import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

function ProductCard({ product, index }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 26 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.55, delay: index * 0.08 }}
      className="overflow-hidden rounded-3xl bg-white shadow-soft"
    >
      <div className="relative overflow-hidden">
        <img src={product.image} alt={product.title} className="h-64 w-full object-cover transition duration-500 hover:scale-105" />
        <span className="absolute left-4 top-4 rounded-full bg-sky-600 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-white shadow-lg shadow-sky-600/20">
          {product.condition}
        </span>
      </div>
      <div className="space-y-4 p-6">
        <div className="flex items-center justify-between gap-4">
          <div>
            <h3 className="text-xl font-semibold text-slate-900">{product.title}</h3>
            <p className="text-sm text-slate-500">{product.location}</p>
          </div>
          <p className="text-lg font-semibold text-slate-900">${product.price}</p>
        </div>
        <Link
          to={`/product/${product.id}`}
          className="inline-flex items-center justify-center rounded-full bg-slate-900 px-4 py-2 text-sm font-semibold text-white transition hover:bg-slate-800"
        >
          View details
        </Link>
      </div>
    </motion.article>
  );
}

export default ProductCard;
