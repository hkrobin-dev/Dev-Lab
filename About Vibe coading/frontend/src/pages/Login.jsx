import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

function Login({ onLogin }) {
  const [form, setForm] = useState({ email: '', password: '' })
  const [message, setMessage] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const navigate = useNavigate()

  const handleSubmit = async (event) => {
    event.preventDefault()
    setMessage('')
    setIsLoading(true)

    try {
      const response = await fetch('http://localhost:5000/api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.message || 'Login failed')
      }

      onLogin(data.user)
      navigate('/')
    } catch (error) {
      setMessage(error.message)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[0.9fr_1.1fr]">
      <div className="card overflow-hidden bg-gradient-to-br from-primary/15 to-secondary/15 shadow-xl">
        <div className="card-body">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-primary">Secure Access</p>
          <h1 className="text-3xl font-semibold">Professional sign-in experience</h1>
          <p className="mt-3 text-base-content/70">
            Access your workspace with confidence. This flow is designed to feel polished, simple, and ready for production.
          </p>
          <ul className="mt-5 space-y-2 text-sm text-base-content/70">
            <li>• Modern form design with clear feedback</li>
            <li>• Protected routes and persistent session state</li>
            <li>• Clean onboarding for future authentication upgrades</li>
          </ul>
        </div>
      </div>

      <div className="card bg-base-100 shadow-xl">
        <div className="card-body">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-primary">Login</p>
          <h2 className="text-3xl font-semibold">Welcome back</h2>
          <p className="mt-2 text-base-content/70">Use your demo account to sign in and continue.</p>

          <form onSubmit={handleSubmit} className="mt-6 space-y-4">
            <input
              type="email"
              placeholder="Email"
              className="input input-bordered w-full"
              value={form.email}
              onChange={(event) => setForm({ ...form, email: event.target.value })}
              required
            />
            <input
              type="password"
              placeholder="Password"
              className="input input-bordered w-full"
              value={form.password}
              onChange={(event) => setForm({ ...form, password: event.target.value })}
              required
            />
            <button type="submit" className={`btn btn-primary w-full ${isLoading ? 'loading' : ''}`}>
              {isLoading ? 'Signing in...' : 'Sign In'}
            </button>
          </form>

          {message ? <p className="mt-4 text-sm text-error">{message}</p> : null}
          <p className="mt-4 text-sm text-base-content/70">Demo login: admin@example.com / password123</p>
          <p className="text-sm text-base-content/70">
            Don&apos;t have an account? <Link to="/register" className="link link-primary">Create one</Link>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Login
