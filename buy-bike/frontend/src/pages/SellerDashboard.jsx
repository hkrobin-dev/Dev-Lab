import { motion } from 'framer-motion';

const sellerListings = [
  { id: 'bike-1', title: 'Urban Rider 5000', status: 'Active', price: 749 },
  { id: 'bike-2', title: 'TrailCrest Pro', status: 'Pending', price: 1299 },
];

function SellerDashboard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="space-y-10"
    >
      <section className="rounded-[2rem] bg-white p-8 shadow-soft">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h1 className="text-3xl font-semibold text-slate-900">Seller dashboard</h1>
            <p className="mt-2 text-slate-500">Manage your bike listings, orders, and product details from one place.</p>
          </div>
          <button className="inline-flex items-center justify-center rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-800">
            Create new listing
          </button>
        </div>
      </section>

      <section className="grid gap-6 lg:grid-cols-[1.4fr_0.6fr]">
        <div className="rounded-[2rem] bg-white p-8 shadow-soft">
          <h2 className="text-2xl font-semibold text-slate-900">Your listings</h2>
          <div className="mt-6 space-y-4">
            {sellerListings.map((item) => (
              <div key={item.id} className="flex flex-col gap-4 rounded-3xl border border-slate-200 p-5 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <h3 className="text-xl font-semibold text-slate-900">{item.title}</h3>
                  <p className="mt-2 text-sm text-slate-500">${item.price} • {item.status}</p>
                </div>
                <button className="rounded-full border border-slate-200 bg-slate-50 px-5 py-2 text-sm font-semibold text-slate-700 transition hover:bg-slate-100">
                  Edit
                </button>
              </div>
            ))}
          </div>
        </div>

        <aside className="rounded-[2rem] bg-slate-900 p-8 text-white shadow-soft">
          <h2 className="text-2xl font-semibold">Order overview</h2>
          <p className="mt-3 text-slate-300">Recent sales and buyer requests appear here once orders begin.</p>
          <div className="mt-6 space-y-4">
            <div className="rounded-3xl bg-slate-800 p-4">
              <p className="text-sm text-slate-400">No new orders yet. Add more listings to attract buyers.</p>
            </div>
          </div>
        </aside>
      </section>
    </motion.div>
  );
}

export default SellerDashboard;
