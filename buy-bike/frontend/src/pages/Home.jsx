import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import ProductCard from '../components/ProductCard';

const products = [
  {
    id: 'bike-1',
    title: 'Urban Rider 5000',
    price: 749,
    condition: 'Used',
    location: 'Berlin, DE',
    image: 'https://images.unsplash.com/photo-1518655048521-f130df041f66?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'bike-2',
    title: 'TrailCrest Pro',
    price: 1299,
    condition: 'New',
    location: 'Amsterdam, NL',
    image: 'https://images.unsplash.com/photo-1508606572321-901ea4437072?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'bike-3',
    title: 'Classic Steel Frame',
    price: 499,
    condition: 'Refurbished',
    location: 'Madrid, ES',
    image: 'https://images.unsplash.com/photo-1498245804494-a53f3161d5d2?auto=format&fit=crop&w=800&q=80',
  },
];

function Home() {
  return (
    <div>
      <section className="mb-12 overflow-hidden rounded-3xl bg-gradient-to-r from-slate-900 to-sky-600 px-6 py-12 text-white shadow-soft sm:px-12 sm:py-16">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            <p className="mb-4 text-sm uppercase tracking-[0.3em] text-sky-200">Bike Marketplace</p>
            <h1 className="mb-6 text-4xl font-semibold tracking-tight sm:text-5xl">
              Buy and sell bikes with confidence.
            </h1>
            <p className="max-w-xl text-slate-200/90 leading-7">
              Discover beautiful bikes, connect with trusted sellers, and complete secure payments in one modern marketplace.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link to="/" className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-900 shadow-lg shadow-slate-900/10 transition hover:bg-slate-100">
                Browse bikes
              </Link>
              <Link to="/seller" className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10">
                Sell your bike
              </Link>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="relative flex h-full items-center justify-center"
          >
            <div className="absolute inset-0 rounded-[2rem] bg-white/10 blur-2xl" />
            <img
              src="https://images.unsplash.com/photo-1477902747921-32c0294106a6?auto=format&fit=crop&w=1000&q=80"
              alt="Bike marketplace hero"
              className="relative h-[320px] w-full rounded-[2rem] object-cover shadow-2xl shadow-slate-900/20"
            />
          </motion.div>
        </div>
      </section>

      <section className="mb-10">
        <div className="mb-8 flex items-center justify-between">
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.25em] text-slate-500">Latest listings</p>
            <h2 className="mt-2 text-3xl font-semibold text-slate-900">Top bikes this week</h2>
          </div>
          <Link to="/" className="text-sm font-semibold text-slate-600 transition hover:text-slate-900">
            View all bikes
          </Link>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {products.map((product, index) => (
            <ProductCard key={product.id} product={product} index={index} />
          ))}
        </div>
      </section>
    </div>
  );
}

export default Home;
