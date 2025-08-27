const express = require('express');
const axios = require('axios');
const cheerio = require('cheerio');
const { URL } = require('url');
const bcrypt = require('bcrypt');
const { PrismaClient } = require('./src/generated/prisma');
const jwt = require('jsonwebtoken')
const cors = require('cors')

const app = express();
app.use(cors());
const PORT = 5000;

app.use(express.json());
const corsOptions = {
  origin: "https://url-scarpper.vercel.app/",
  methods: "GET,POST,PUT,DELETE"
};

app.use(cors(corsOptions));

const prisma = new PrismaClient();

async function deleteStuckJobs(){
  await prisma.url_analyses.deleteMany({
    where: {
      completed_at: null
    }
  });
  
}

deleteStuckJobs();

function getHtmlVersion(html) {
  const doctype = html.match(/<!doctype.*?>/i);
  if (!doctype) return 'Unknown';
  const doc = doctype[0].toLowerCase();
  if (doc === '<!doctype html>') return 'HTML5';
  if (doc.includes('4.01')) return 'HTML 4.01';
  if (doc.includes('xhtml')) return 'XHTML';
  return 'Unknown';
}

// 🔧 Helper: Get Title
const getTitle = ($) => $('title').text() || 'No title found';

// 🔧 Helper: Count Headings
const getHeadingsCount = ($) => {
  const headings = {};
  for (let i = 1; i <= 6; i++) {
    headings[`h${i}`] = $(`h${i}`).length;
  }
  return headings;
};

// 🔧 Helper: Classify Links
async function classifyLinks($, baseUrl) {
  const parsedUrl = new URL(baseUrl);
  const hrefs = $('a[href]')
    .map((i, el) => $(el).attr('href'))
    .get()
    .filter((href) => href && !href.startsWith('javascript:'));

  const links = [];

  for (const href of hrefs) {
    let fullUrl;
    try {
      fullUrl = new URL(href, baseUrl);
    } catch {
      links.push({
        url: href,
        status_code: null,
        type: 'broken',
        error_type: 'InvalidURL'
      });
      continue;
    }

    let status_code = null;
    let error_type = null;

    try {
      const res = await fetch(fullUrl.href, { method: 'HEAD' });
      status_code = res.status;
    } catch (err) {
      status_code = null;
      error_type = err.name || 'UnknownError';
    }

    // Determine type
    let type;
    if (status_code && (status_code >= 400 && status_code <= 599)) {
      type = 'broken';
    } else {
      const isInternal = fullUrl.hostname === parsedUrl.hostname;
      type = isInternal ? 'internal' : 'external';
    }

    links.push({
      url: fullUrl.href,
      status_code,
      type,
      error_type
    });
  }

  // Deduplicate by URL
  const uniqueLinks = [
    ...new Map(links.map((item) => [item.url, item])).values()
  ];

  return { links: uniqueLinks };
}

// 🔧 Helper: Detect login form
const hasLoginForm = ($) => $('input[type="password"]').length > 0;

// 🚀 Main Route
app.post('/analyze', async (req, res) => {
  const { url, userId } = req.body;
  if (!url || !userId) return res.status(400).json({ error: 'URL and userId are required' });

  try {
    const createdAt = new Date();

    // Step 1: Create pending record
    const pendingAnalysis = await prisma.url_analyses.create({
      data: { user_id: userId, url, title: '', html_version: '', login_form_present: false, created_at: createdAt, completed_at: null, internal_links_count: 0, external_links_count: 0, broken_links_count: 0 }
    });

    // Step 2: Respond immediately
    res.status(202).json({ message: 'Analysis started', analysisId: pendingAnalysis.id });

    // Step 3: Background analysis
    (async () => {
      try {
        const response = await axios.get(url, { timeout: 10000 });
        const $ = cheerio.load(response.data);

        const htmlVersion = getHtmlVersion(response.data);
        const title = getTitle($);
        const headings = getHeadingsCount($);
        const { links } = await classifyLinks($, url);

        let internal_links_count = 0;
        let external_links_count = 0;
        links.forEach(link => link.type === 'external' ? external_links_count++ : internal_links_count++);

        const broken_links = links.filter(element => element.type === 'broken');

        await prisma.url_analyses.update({
          where: { id: pendingAnalysis.id },
          data: {
            title,
            html_version: htmlVersion,
            login_form_present: hasLoginForm($),
            internal_links_count,
            external_links_count,
            broken_links_count: broken_links.length,
            completed_at: new Date(),
            headings: { create: headings },
            links: { create: links }
          }
        });
        console.log(`Analysis ${pendingAnalysis.id} completed`);
      } catch (err) {
        console.error('Analysis failed:', err.message);
        await prisma.url_analyses.delete({ where: { id: pendingAnalysis.id } });
      }
    })();

  } catch (err) {
    res.status(500).json({ error: 'Failed to start analysis', details: err.message });
  }
});

// ✅ Signup route
app.post('/signup', async (req, res) => {
  try {
    const { email, password, name } = req.body;
    if (!email || !password) return res.status(400).json({ error: 'Email and password required' });

    const existingUser = await prisma.users.findUnique({ where: { email } });
    if (existingUser) return res.status(409).json({ error: 'User already exists' });

    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await prisma.users.create({ data: { email, password_hash: hashedPassword, name } });

    res.status(201).json({ message: 'User created', user: { id: user.id, email: user.email, name: user.name } });
  } catch (err) {
    res.status(500).json({ error: 'Signup failed', details: err.message });
  }
});

app.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password)
      return res.status(400).json({ error: 'Email and password required' });

    const user = await prisma.users.findUnique({ where: { email } });
    if (!user) return res.status(404).json({ error: 'User not found' });

    const isPasswordValid = await bcrypt.compare(password, user.password_hash);
    if (!isPasswordValid)
      return res.status(401).json({ error: 'Invalid password' });

    // ✅ create JWT (or use sessions if you want)
    const token = jwt.sign(
      { id: user.id, email: user.email },
      process.env.JWT_SECRET || "supersecret",
      { expiresIn: "1h" }
    );

    res.json({
      message: "Login successful",
      token,
      user: { id: user.id, email: user.email, name: user.name }
    });
  } catch (err) {
    res.status(500).json({ error: "Login failed", details: err.message });
  }
});

// ✅ List URLs with pagination
app.post('/urls', async (req, res) => {
  try {
    const { userId, limit = 10, page = 1 } = req.body;
    if (!userId) return res.status(400).json({ error: 'userId required' });

    const skip = (page - 1) * limit;

    const [items, total] = await Promise.all([
      prisma.url_analyses.findMany({ where: { user_id: userId }, skip, take: limit, orderBy: { created_at: 'desc' } }),
      prisma.url_analyses.findMany({ where: { user_id: userId } })
    ]);

    res.status(200).json({ UrlAnalysis: items, total, page, totalPage: Math.ceil(total.length / limit) });
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch URLs', details: err.message });
  }
});

// ✅ Fetch links for a specific analysis
app.post('/url_list', async (req, res) => {
  try {
    const { analysisid } = req.body;
    if (!analysisid) return res.status(400).json({ error: 'analysisId required' });

    const links = await prisma.links.findMany({ where: { analysis_id: parseInt(analysisid) } });
    res.status(200).json({ links });
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch links', details: err.message });
  }
});

// ✅ Fetch headings for a specific analysis
app.post('/headings', async (req, res) => {
  try {
    const { analysisid } = req.body;
    if (!analysisid) return res.status(400).json({ error: 'analysisId required' });

    const headings = await prisma.headings.findMany({ where: { analysis_id: parseInt(analysisid) } });
    res.status(200).json({ headings });
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch headings', details: err.message });
  }
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
