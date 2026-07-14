import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

function Register({ onLogin }) {
  const [form, setForm] = useState({ name: '', email: '', password: '' })
  const [message, setMessage] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const navigate = useNavigate()

  const handleSubmit = async (event) => {
    event.preventDefault()
    setMessage('')
    setIsLoading(true)

    try {
      const response = await fetch('http://localhost:5000/api/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.message || 'Registration failed')
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
      <div className="card overflow-hidden bg-gradient-to-br from-secondary/15 to-primary/15 shadow-xl">
        <div className="card-body">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-primary">Join the Studio</p>
          <h1 className="text-3xl font-semibold">Create a polished account experience</h1>
          <p className="mt-3 text-base-content/70">
            Register for a more complete product journey, with a clean profile and room for future dashboard features.
          </p>
          <ul className="mt-5 space-y-2 text-sm text-base-content/70">
            <li>• Secure account creation flow</li>
            <li>• Consistent visual language with the rest of the site</li>
            <li>• Designed to scale into a full customer portal</li>
          </ul>
        </div>
      </div>

      <div className="card bg-base-100 shadow-xl">
        <div className="card-body">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-primary">Register</p>
          <h2 className="text-3xl font-semibold">Create your account</h2>
          <p className="mt-2 text-base-content/70">Sign up to access your personalized dashboard.</p>

          <form onSubmit={handleSubmit} className="mt-6 space-y-4">
            <input
              type="text"
              placeholder="Full name"
              className="input input-bordered w-full"
              value={form.name}
              onChange={(event) => setForm({ ...form, name: event.target.value })}
              required
            />
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
              {isLoading ? 'Creating account...' : 'Create Account'}
            </button>
          </form>

          {message ? <p className="mt-4 text-sm text-error">{message}</p> : null}

          <p className="mt-4 text-sm text-base-content/70">
            Already have an account? <Link to="/login" className="link link-primary">Login here</Link>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Register
