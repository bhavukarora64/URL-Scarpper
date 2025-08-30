import { useRef, useState } from "react"
import { AtSymbolIcon, LockClosedIcon } from "@heroicons/react/24/outline"
import { useNavigate } from "react-router"
import { useAtom} from "jotai"
import { userId } from "../../store/URLs";

export default function SignInForm() {
  const [formData, setFormData] = useState({ email: "", password: "" })
  const [error, setError] = useState("")
  const [success, setSuccess] = useState("")
  const [loading, setLoading] = useState(false)
  const [, setCurrentUserId] = useAtom(userId);
  const navigate = useNavigate()
  const usernameRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const apiURL = import.meta.env.VITE_BACKEND_URL;

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setError("")
    setSuccess("")
    setLoading(true)

    try {
      const res = await fetch(`${apiURL}/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      })

      const data = await res.json()
      if (!res.ok) throw new Error(data.error || "Login failed")

      localStorage.setItem("token", data.token)

      setCurrentUserId(data.user.id)
      navigate("/")
      setSuccess("Login successful!")
    } catch (err: any) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-md p-8">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">Sign In</h2>

        <form className="space-y-5" onSubmit={handleSubmit}>
          {/* Email */}
          <div className="flex items-center border border-gray-300 rounded-lg px-3 py-2 focus-within:ring-2 focus-within:ring-blue-500 focus-within:border-blue-500 transition">
            <AtSymbolIcon className="w-5 h-5 text-gray-400 mr-2" />
            <input
              type="email"
              ref={usernameRef}
              placeholder="jon.doe@mail.com"
              className="w-full bg-transparent outline-none text-gray-700 placeholder-gray-400"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              required
            />
          </div>

          {/* Password */}
          <div className="flex items-center border border-gray-300 rounded-lg px-3 py-2 focus-within:ring-2 focus-within:ring-blue-500 focus-within:border-blue-500 transition">
            <LockClosedIcon className="w-5 h-5 text-gray-400 mr-2" />
            <input
              type="password"
              ref={passwordRef}
              placeholder="************"
              className="w-full bg-transparent outline-none text-gray-700 placeholder-gray-400"
              value={formData.password}
              onChange={(e) => setFormData({ ...formData, password: e.target.value })}
              required
            />
          </div>

          {/* Submit Button */}
          <div className="flex gap-4">
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold shadow hover:bg-blue-700 transition disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? "Signing in..." : "Sign In"}
            </button>
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold shadow hover:bg-blue-700 transition disabled:opacity-50 disabled:cursor-not-allowed"
              onClick={() => {
                setFormData({ email: "Demouser@gmail.com", password: "Demouser@123" })
              }}
            >
              Demo Sign In
            </button>
          </div>
        </form>

        {/* Messages */}
        {error && <p className="text-red-500 mt-4 text-center">{error}</p>}
        {success && <p className="text-green-600 mt-4 text-center">{success}</p>}

        <p className="mt-6 text-center text-sm text-gray-600">
          Don’t have an account?{" "}
          <a href="/signup" className="text-blue-600 hover:underline">Sign up</a>
        </p>
      </div>
    </div>
  )
}
