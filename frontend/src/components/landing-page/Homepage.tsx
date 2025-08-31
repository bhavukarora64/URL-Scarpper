import { useNavigate } from "react-router";
import heroImage from "../../assets/dashboard.png";

const Homepage = () => {
    const navigate = useNavigate();
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-white to-slate-50 scroll-smooth">
      {/* Navbar */}
      <header className="fixed top-0 left-0 w-full bg-white/80 backdrop-blur-md border-b border-slate-200/50 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 onClick={()=> {navigate('/homepage')}} className="text-2xl font-bold bg-gradient-to-r from-indigo-600 via-purple-600 to-violet-600 bg-clip-text text-transparent hover:cursor-pointer">
            _Scan_Url_
          </h1>
          <nav className="space-x-8 hidden md:flex">
            <a 
              href="#features" 
              className="text-slate-600 hover:text-indigo-600 transition-all duration-300 font-medium"
            >
              Features
            </a>
            <a 
              href="#demo" 
              className="text-slate-600 hover:text-indigo-600 transition-all duration-300 font-medium"
            >
              Demo
            </a>
            <a 
              href="#contact" 
              className="text-slate-600 hover:text-indigo-600 transition-all duration-300 font-medium"
            >
              Contact
            </a>
          </nav>
          <button onClick={()=> {navigate('/signin')}} className="inline-flex items-center justify-center whitespace-nowrap rounded-xl text-sm font-semibold h-12 px-8 text-base bg-indigo-600 text-white hover:bg-indigo-700 shadow-md hover:shadow-lg transition-all duration-300">
            Sign In
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative flex flex-col items-center justify-center text-center px-6 pt-32 pb-24 min-h-screen overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-b from-indigo-50/50 via-transparent to-purple-50/50" />
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-indigo-500/20 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl" />
        
        <div className="relative z-10 max-w-6xl mx-auto">
          <div className="mb-8">
            <div className="inline-block px-4 py-2 bg-indigo-100/80 backdrop-blur-sm rounded-full border border-indigo-200/50 mb-6">
              <span className="text-sm font-medium text-indigo-700">✨ Analyze websites instantly</span>
            </div>
            
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-extrabold bg-gradient-to-r from-indigo-600 via-purple-600 to-violet-600 bg-clip-text text-transparent mb-8 leading-tight">
              Unlock Website
              <br />
              <span className="block">Intelligence</span>
            </h1>

            <p className="text-xl md:text-2xl text-slate-600 max-w-3xl mx-auto mb-12 leading-relaxed">
              Extract comprehensive insights from any URL — HTML versions, metadata, 
              link analysis, and security checks in seconds.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
              <button onClick={()=>{navigate('/')}} className="inline-flex items-center justify-center whitespace-nowrap rounded-xl text-lg font-semibold h-14 px-10 min-w-[200px] bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg shadow-indigo-500/30 hover:shadow-xl hover:shadow-indigo-500/40 hover:scale-105 active:scale-95 transition-all duration-300">
                Start Analyzing Free
              </button>
              <a href="#demo"><button className="inline-flex items-center justify-center whitespace-nowrap rounded-xl text-lg font-semibold h-14 px-10 min-w-[200px] border-2 border-indigo-600/20 text-indigo-600 bg-white/10 backdrop-blur-md hover:bg-indigo-600 hover:text-white hover:scale-105 active:scale-95 shadow-md hover:shadow-lg hover:shadow-indigo-500/30 transition-all duration-300">
                Watch Demo
              </button></a>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl blur-2xl opacity-20" />
            <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-indigo-500/20 border border-indigo-200/20 bg-white/50 backdrop-blur-sm p-2">
              <img 
                src={heroImage}
                alt="URL Scrapper Dashboard showing website analysis results"
                className="w-full h-auto rounded-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-24 px-6 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-2 bg-indigo-100/80 backdrop-blur-sm rounded-full border border-indigo-200/50 mb-6">
              <span className="text-sm font-medium text-indigo-700">🚀 Powerful Features</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Everything You Need to 
              <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-violet-600 bg-clip-text text-transparent block">Analyze Websites</span>
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Our comprehensive toolkit gives you deep insights into any website's structure and performance.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: "🔍",
                title: "HTML Version Detection",
                description: "Instantly identify HTML5, XHTML, or legacy versions with detailed compatibility reports."
              },
              {
                icon: "🔗",
                title: "Advanced Link Analysis",
                description: "Comprehensive link checking including broken links, redirects, and internal/external mapping."
              },
              {
                icon: "📊",
                title: "Metadata Extraction",
                description: "Complete SEO analysis including titles, descriptions, headings, and structured data."
              },
              {
                icon: "🛡️",
                title: "Security Scanning",
                description: "Detect security vulnerabilities, SSL issues, and potential threats automatically."
              },
              {
                icon: "⚡",
                title: "Performance Metrics",
                description: "Get detailed performance insights including load times and optimization recommendations."
              },
              {
                icon: "📱",
                title: "Mobile Responsiveness",
                description: "Test mobile compatibility and responsive design across multiple device types."
              }
            ].map((feature, index) => (
              <div key={index} className="group hover:scale-105 transition-all duration-300 bg-white/80 backdrop-blur-sm border border-indigo-100/50 hover:border-indigo-200/50 hover:shadow-xl hover:shadow-indigo-500/20 rounded-2xl p-8 text-center">
                <div className="text-4xl mb-4 group-hover:scale-110 transition-all duration-500 ease-out">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3 text-slate-800">
                  {feature.title}
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Demo Section */}
      <section id="demo" className="py-24 px-6 bg-slate-50/50">
        <div className="max-w-6xl mx-auto text-center">
          <div className="mb-16">
            <div className="inline-block px-4 py-2 bg-indigo-100/80 backdrop-blur-sm rounded-full border border-indigo-200/50 mb-6">
              <span className="text-sm font-medium text-indigo-700">📹 See It In Action</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Watch How It 
              <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-violet-600 bg-clip-text text-transparent block">Works</span>
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              See our powerful analysis engine in action with a real-time demonstration.
            </p>
          </div>

          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl blur-2xl opacity-20 group-hover:opacity-30 transition-all duration-300" />
            <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-indigo-500/20 hover:shadow-indigo-500/30 transition-all duration-300 border border-indigo-200/20 bg-white/50 backdrop-blur-sm">
              <div className="aspect-video bg-gradient-to-br from-slate-100 to-slate-200 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-20 h-20 bg-indigo-500/20 rounded-full flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-all duration-500 ease-out">
                    <div className="w-0 h-0 border-l-[12px] border-l-indigo-600 border-y-[8px] border-y-transparent ml-1" />
                  </div>
                  <p className="text-lg font-medium text-slate-600">Demo Video Coming Soon</p>
                  <p className="text-sm text-slate-500">Interactive demo available now</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/5 to-purple-600/5" />
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl" />
        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Start 
            <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-violet-600 bg-clip-text text-transparent block">Analyzing?</span>
          </h2>
          <p className="text-xl text-slate-600 mb-12 max-w-2xl mx-auto">
            Join thousands of developers and marketers who trust ScanURL for their website analysis needs.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <button onClick={()=> {navigate('/signup')}} className="inline-flex items-center justify-center whitespace-nowrap rounded-xl text-lg font-semibold h-14 px-10 min-w-[200px] bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg shadow-indigo-500/30 hover:shadow-xl hover:shadow-indigo-500/40 hover:scale-105 active:scale-95 transition-all duration-300">
              Get Started Free
            </button>
            <button onClick={()=> {alert('Congratulations..Its free for you !')}} className="inline-flex items-center justify-center whitespace-nowrap rounded-xl text-lg font-semibold h-14 px-10 min-w-[200px] border-2 border-indigo-600/20 text-indigo-600 bg-white/10 backdrop-blur-md hover:bg-indigo-600 hover:text-white hover:scale-105 active:scale-95 shadow-md hover:shadow-lg hover:shadow-indigo-500/30 transition-all duration-300">
              View Pricing
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <div className="text-center">
              <div className="text-3xl font-bold text-indigo-600 mb-2">10K+</div>
              <div className="text-slate-600">Websites Analyzed</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-indigo-600 mb-2">99.9%</div>
              <div className="text-slate-600">Uptime Guaranteed</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-indigo-600 mb-2">&lt;2s</div>
              <div className="text-slate-600">Average Analysis Time</div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="py-12 px-6 border-t border-slate-200/50 bg-slate-50/20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-bold bg-gradient-to-r from-indigo-600 via-purple-600 to-violet-600 bg-clip-text text-transparent mb-4">
                _Scan_Url_
              </h3>
              <p className="text-slate-600">
                The most powerful website analysis tool for developers and marketers.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-slate-800">Product</h4>
              <ul className="space-y-2 text-slate-600">
                <li><a href="#" className="hover:text-indigo-600 transition-all duration-300">Features</a></li>
                <li><a href="#" className="hover:text-indigo-600 transition-all duration-300">Pricing</a></li>
                <li><a href="#" className="hover:text-indigo-600 transition-all duration-300">API</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-slate-800">Support</h4>
              <ul className="space-y-2 text-slate-600">
                <li><a href="#" className="hover:text-indigo-600 transition-all duration-300">Documentation</a></li>
                <li><a href="#" className="hover:text-indigo-600 transition-all duration-300">Help Center</a></li>
                <li><a href="#" className="hover:text-indigo-600 transition-all duration-300">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-slate-800">Company</h4>
              <ul className="space-y-2 text-slate-600">
                <li><a href="#" className="hover:text-indigo-600 transition-all duration-300">About</a></li>
                <li><a href="#" className="hover:text-indigo-600 transition-all duration-300">Blog</a></li>
                <li><a href="#" className="hover:text-indigo-600 transition-all duration-300">Careers</a></li>
              </ul>
            </div>
          </div>
          
          <div className="pt-8 border-t border-slate-200/50 text-center text-slate-600">
            <p>&copy; {new Date().getFullYear()} _Scan_Url_. Built with ❤️ for developers.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Homepage;