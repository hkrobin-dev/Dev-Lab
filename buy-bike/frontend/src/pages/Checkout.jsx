import { motion } from 'framer-motion';

function Checkout() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="mx-auto max-w-3xl rounded-[2rem] bg-white p-8 shadow-soft"
    >
      <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="space-y-6">
          <div className="rounded-3xl bg-slate-50 p-6">
            <p className="text-sm uppercase tracking-[0.24em] text-slate-500">Order summary</p>
            <h1 className="mt-4 text-3xl font-semibold text-slate-900">Secure checkout</h1>
            <p className="mt-3 text-slate-600">Review your bike order and complete payment with Stripe.</p>
          </div>
          <div className="rounded-3xl border border-slate-200 p-6">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-lg font-semibold text-slate-900">Urban Rider 5000</h2>
                <p className="text-sm text-slate-500">Berlin, DE</p>
              </div>
              <p className="text-lg font-semibold text-slate-900">$749</p>
            </div>
            <div className="mt-4 space-y-4 text-sm text-slate-600">
              <div className="flex items-center justify-between rounded-3xl bg-slate-100 p-4">
                <span>Shipping</span>
                <span>Free</span>
              </div>
              <div className="flex items-center justify-between rounded-3xl bg-slate-100 p-4">
                <span>Payment</span>
                <span>Stripe</span>
              </div>
            </div>
          </div>
          <button className="w-full rounded-full bg-slate-900 px-6 py-4 text-sm font-semibold text-white transition hover:bg-slate-800">
            Pay with Stripe
          </button>
        </div>
        <aside className="space-y-6 rounded-[2rem] bg-slate-900 p-8 text-white shadow-soft">
          <div className="rounded-3xl bg-slate-800 p-6">
            <h2 className="text-xl font-semibold">Why BuyBike?</h2>
            <p className="mt-3 text-slate-300">Fast checkout, seller verification, and secure payments for a smoother bike purchasing experience.</p>
          </div>
          <div className="rounded-3xl bg-slate-800 p-6">
            <h3 className="text-sm uppercase tracking-[0.3em] text-sky-300">Need help?</h3>
            <p className="mt-3 text-slate-300">Contact support for order questions or listing requests.</p>
          </div>
        </aside>
      </div>
    </motion.div>
  );
}

export default Checkout;
