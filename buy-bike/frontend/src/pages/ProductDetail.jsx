import { motion } from 'framer-motion';
import { useParams, Link } from 'react-router-dom';

const product = {
  id: 'bike-1',
  title: 'Urban Rider 5000',
  price: 749,
  condition: 'Used',
  location: 'Berlin, DE',
  description: 'A smooth commuter bike with full Shimano drivetrain, lightweight frame, and integrated lighting. Ready for city rides and weekend adventures.',
  image: 'https://images.unsplash.com/photo-1477902747921-32c0294106a6?auto=format&fit=crop&w=1000&q=80',
  seller: 'Mountain Bikes Co.',
};

function ProductDetail() {
  const { id } = useParams();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr]"
    >
      <div className="rounded-[2rem] bg-white p-6 shadow-soft">
        <img src={product.image} alt={product.title} className="h-[420px] w-full rounded-[1.75rem] object-cover" />
        <div className="mt-8 space-y-4">
          <div className="flex items-center justify-between gap-6">
            <div>
              <h1 className="text-3xl font-semibold text-slate-900">{product.title}</h1>
              <p className="mt-2 text-sm uppercase tracking-[0.24em] text-slate-500">{product.condition}</p>
            </div>
            <p className="text-3xl font-semibold text-slate-900">${product.price}</p>
          </div>
          <p className="leading-7 text-slate-600">{product.description}</p>
          <div className="flex flex-wrap gap-4 text-sm text-slate-500">
            <span className="rounded-2xl bg-slate-100 px-4 py-2">Seller: {product.seller}</span>
            <span className="rounded-2xl bg-slate-100 px-4 py-2">Location: {product.location}</span>
          </div>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <Link to="/checkout" className="inline-flex flex-1 items-center justify-center rounded-full bg-slate-900 px-6 py-3 text-white transition hover:bg-slate-800">
              Checkout now
            </Link>
            <Link to="/seller" className="inline-flex flex-1 items-center justify-center rounded-full border border-slate-200 bg-white px-6 py-3 text-slate-900 transition hover:bg-slate-50">
              Contact seller
            </Link>
          </div>
        </div>
      </div>

      <aside className="space-y-6 rounded-[2rem] bg-slate-900 p-6 text-white shadow-soft">
        <div className="space-y-3">
          <h2 className="text-xl font-semibold">Bike specs</h2>
          <div className="grid gap-3 text-sm text-slate-200 sm:grid-cols-2">
            <div className="rounded-3xl bg-white/5 p-4">Frame: Aluminum</div>
            <div className="rounded-3xl bg-white/5 p-4">Gear: Shimano 105</div>
            <div className="rounded-3xl bg-white/5 p-4">Brakes: Disc</div>
            <div className="rounded-3xl bg-white/5 p-4">Warranty: 6 months</div>
          </div>
        </div>
        <div className="rounded-3xl bg-slate-800/80 p-6">
          <p className="text-sm uppercase tracking-[0.24em] text-sky-300">Safe checkout</p>
          <p className="mt-3 text-lg font-semibold">Secure payment with Stripe</p>
          <p className="mt-4 text-slate-300">Complete your purchase, and your order will be confirmed instantly with a secure payment gateway.</p>
        </div>
      </aside>
    </motion.div>
  );
}

export default ProductDetail;
