import { MagnifyingGlassIcon, XMarkIcon, ClockIcon } from "@heroicons/react/16/solid";
import { useEffect, useRef, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { userId } from "../../store/URLs";
import { useAtomValue } from "jotai";

export function SearchBar() {
  const providedURL = useRef<HTMLInputElement>(null);
  const [recent, setRecent] = useState<string[]>(["https://example.com", "https://github.com"]);
  const navigate = useNavigate();
  const currentUserId = useAtomValue(userId);

  async function fetchURLDetails() {
    try {
      const url = providedURL.current?.value;
      if (!url) return;
      
      // Save to recent searches
      setRecent((prev) => [url, ...prev.slice(0, 4)]);

      navigate("/dashboard");
      await axios.post("http://localhost:5000/analyze", {
        url,
        userId: currentUserId,
      });
    } catch (e: any) {
      alert(e.message);
    }
  }

  function clearInput() {
    if (providedURL.current) {
      providedURL.current.value = "";
    }
  }

  useEffect(() => {
    if(!currentUserId || !localStorage.getItem('token')){
        navigate('/signin')
    }
  }, [])

  return (
    <div className="flex flex-col items-center mt-12 px-4">
      {/* Heading */}
      <h1 className="text-4xl font-bold text-gray-800 text-center">URL Crawler</h1>
      <p className="text-gray-500 mt-2 text-center">
        Paste any website link below and we’ll fetch insights for you.
      </p>

      {/* Search Box */}
      <div className="relative w-full max-w-2xl mt-6">
        <input
          onKeyDown={(e) => {
            if (e.key === "Enter") fetchURLDetails();
          }}
          ref={providedURL}
          type="text"
          placeholder="Paste a URL to analyze..."
          className="w-full py-3 pl-5 pr-20 border border-gray-300 rounded-xl shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none text-gray-700 placeholder-gray-400 transition"
        />

        {/* Clear button */}
        <button
          onClick={clearInput}
          className="absolute right-12 top-1/2 -translate-y-1/2 p-2 rounded-lg hover:bg-gray-100 transition"
        >
          <XMarkIcon className="w-5 h-5 text-gray-500" />
        </button>

        {/* Search button */}
        <button
          onClick={fetchURLDetails}
          className="absolute right-2 top-1/2 -translate-y-1/2 p-2 rounded-lg hover:bg-blue-50 transition"
        >
          <MagnifyingGlassIcon className="w-6 h-6 text-blue-600" />
        </button>
      </div>

      {/* Recent Searches */}
      {recent.length > 0 && (
        <div className="w-full max-w-2xl mt-8">
          <h2 className="text-lg font-semibold text-gray-700 mb-3">Example Searches</h2>
          <ul className="space-y-2">
            {recent.map((item, i) => (
              <li
                key={i}
                className="flex items-center gap-2 text-gray-600 bg-gray-50 px-3 py-2 rounded-lg shadow-sm hover:bg-gray-100 cursor-pointer transition"
                onClick={() => {
                  if (providedURL.current) {
                    providedURL.current.value = item;
                    fetchURLDetails();
                  }
                }}
              >
                <ClockIcon className="w-4 h-4 text-gray-500" />
                <span className="truncate">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
