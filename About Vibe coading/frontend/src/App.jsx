import { useEffect, useState } from 'react'
import { NavLink, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Login from './pages/Login'
import Register from './pages/Register'
import Parcels from './pages/Parcels'
import { useAuth } from './context/AuthContext'

function App() {
  const [theme, setTheme] = useState(() => localStorage.getItem('theme') || 'light')
  const { user, login, logout } = useAuth()

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    localStorage.setItem('theme', theme)
  }, [theme])

  const toggleTheme = () => {
    setTheme((current) => (current === 'light' ? 'dark' : 'light'))
  }

  const handleLogin = (loggedInUser) => {
    login(loggedInUser)
  }

  const handleLogout = () => {
    logout()
  }

  return (
    <div className="min-h-screen bg-base-200 text-base-content transition-colors duration-300">
      <header className="sticky top-0 z-20 border-b border-base-300 bg-base-100/85 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-br from-primary to-secondary font-semibold text-primary-content">
              DP
            </div>
            <div>
              <NavLink to="/" className="text-lg font-semibold tracking-wide">
                Daisy Palace
              </NavLink>
              <p className="text-xs uppercase tracking-[0.3em] text-base-content/60">Digital Studio</p>
            </div>
          </div>

          <nav className="flex items-center gap-2 sm:gap-4">
            <NavLink to="/" className={({ isActive }) => `hidden rounded-full px-3 py-2 text-sm transition sm:inline ${isActive ? 'bg-primary/10 text-primary' : 'hover:bg-base-200'}`}>
              Home
            </NavLink>
            <NavLink to="/about" className={({ isActive }) => `hidden rounded-full px-3 py-2 text-sm transition sm:inline ${isActive ? 'bg-primary/10 text-primary' : 'hover:bg-base-200'}`}>
              About
            </NavLink>
            <NavLink to="/parcels" className={({ isActive }) => `hidden rounded-full px-3 py-2 text-sm transition sm:inline ${isActive ? 'bg-primary/10 text-primary' : 'hover:bg-base-200'}`}>
              Parcels
            </NavLink>

            <div className="dropdown dropdown-end">
              <div tabIndex={0} role="button" className="btn btn-ghost btn-sm">
                Menu ▾
              </div>
              <ul tabIndex={0} className="menu dropdown-content z-[1] mt-2 w-48 rounded-box border border-base-300 bg-base-100 p-2 shadow-lg">
                <li>
                  <a href="#about">About Company</a>
                </li>
                <li>
                  <a href="#services">Services</a>
                </li>
                <li>
                  <a href="#what-we-do">What We Do</a>
                </li>
                <li>
                  <a href="#contact">Contact</a>
                </li>
              </ul>
            </div>

            {user ? (
              <button className="btn btn-ghost btn-sm" onClick={handleLogout}>
                Logout
              </button>
            ) : (
              <NavLink to="/login" className={({ isActive }) => `rounded-full px-3 py-2 text-sm transition ${isActive ? 'bg-primary/10 text-primary' : 'hover:bg-base-200'}`}>
                Login
              </NavLink>
            )}

            <button className="btn btn-ghost btn-sm" onClick={toggleTheme}>
              {theme === 'light' ? '🌙 Dark' : '☀️ Light'}
            </button>
          </nav>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-6 py-10">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/parcels" element={<Parcels />} />
          <Route path="/login" element={<Login onLogin={handleLogin} />} />
          <Route path="/register" element={<Register onLogin={handleLogin} />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
