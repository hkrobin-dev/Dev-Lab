import { Link } from 'react-router-dom';
import { ShoppingBagIcon, UserIcon } from '@heroicons/react/24/outline';

function Navbar() {
  return (
    <header className="border-b border-slate-200 bg-white/90 backdrop-blur-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link to="/" className="text-lg font-semibold tracking-tight text-slate-900">
          BuyBike
        </Link>
        <nav className="flex items-center gap-3 text-sm font-medium text-slate-600">
          <Link to="/" className="transition hover:text-slate-900">
            Marketplace
          </Link>
          <Link to="/seller" className="transition hover:text-slate-900">
            Seller
          </Link>
          <Link to="/checkout" className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-4 py-2 text-white transition hover:bg-slate-800">
            <ShoppingBagIcon className="h-4 w-4" />
            Checkout
          </Link>
          <Link to="/login" className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 transition hover:border-slate-300">
            <UserIcon className="h-4 w-4" />
            Sign in
          </Link>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
