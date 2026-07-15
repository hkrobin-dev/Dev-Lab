import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

function Login() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45 }}
      className="mx-auto max-w-md rounded-[2rem] bg-white p-8 shadow-soft"
    >
      <h1 className="text-3xl font-semibold text-slate-900">Welcome back</h1>
      <p className="mt-3 text-sm text-slate-500">Log in to continue shopping or manage your seller listings.</p>
      <form className="mt-8 space-y-6">
        <label className="block text-sm font-medium text-slate-700">
          Email
          <input type="email" placeholder="you@example.com" className="mt-2 w-full rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 transition focus:border-slate-400 focus:ring-2 focus:ring-sky-200" />
        </label>
        <label className="block text-sm font-medium text-slate-700">
          Password
          <input type="password" placeholder="••••••••" className="mt-2 w-full rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 transition focus:border-slate-400 focus:ring-2 focus:ring-sky-200" />
        </label>
        <button type="submit" className="w-full rounded-full bg-slate-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-800">
          Sign in
        </button>
      </form>
      <p className="mt-6 text-sm text-slate-500">
        New to BuyBike?{' '}
        <Link to="/register" className="font-semibold text-slate-900 hover:text-slate-700">
          Create an account
        </Link>
      </p>
    </motion.div>
  );
}

export default Login;
