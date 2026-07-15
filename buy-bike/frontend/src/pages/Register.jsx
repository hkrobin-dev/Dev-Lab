import { motion } from 'framer-motion';

function Register() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45 }}
      className="mx-auto max-w-md rounded-[2rem] bg-white p-8 shadow-soft"
    >
      <h1 className="text-3xl font-semibold text-slate-900">Create account</h1>
      <p className="mt-3 text-sm text-slate-500">Join as a buyer or seller and start listing and buying bikes.</p>
      <form className="mt-8 space-y-6">
        <label className="block text-sm font-medium text-slate-700">
          Full name
          <input type="text" placeholder="Your name" className="mt-2 w-full rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 transition focus:border-slate-400 focus:ring-2 focus:ring-sky-200" />
        </label>
        <label className="block text-sm font-medium text-slate-700">
          Email
          <input type="email" placeholder="you@example.com" className="mt-2 w-full rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 transition focus:border-slate-400 focus:ring-2 focus:ring-sky-200" />
        </label>
        <label className="block text-sm font-medium text-slate-700">
          Password
          <input type="password" placeholder="••••••••" className="mt-2 w-full rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 transition focus:border-slate-400 focus:ring-2 focus:ring-sky-200" />
        </label>
        <label className="block text-sm font-medium text-slate-700">
          Role
          <select className="mt-2 w-full rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 transition focus:border-slate-400 focus:ring-2 focus:ring-sky-200">
            <option value="buyer">Buyer</option>
            <option value="seller">Seller</option>
          </select>
        </label>
        <button type="submit" className="w-full rounded-full bg-slate-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-800">
          Create account
        </button>
      </form>
    </motion.div>
  );
}

export default Register;
