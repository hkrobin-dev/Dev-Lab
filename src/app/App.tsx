import { useState } from "react";
import {
  Search, Heart, MapPin, Calendar, ChevronDown, Phone,
  MessageCircle, Mail, Share2, LayoutGrid, List,
  SlidersHorizontal, X, Check, Upload, ArrowRight,
  ArrowLeft, Facebook, Instagram, Twitter, Youtube,
  BadgeCheck, Smartphone, Shield, ChevronRight, Menu,
} from "lucide-react";

// ── Constants ──────────────────────────────────────────────────────────────────

const RED = "#E63946";
const NAVY = "#1D3557";

type Page = "home" | "browse" | "detail" | "post";

// ── Data ───────────────────────────────────────────────────────────────────────

interface Bike {
  id: number;
  title: string;
  brand: string;
  price: number;
  location: string;
  year: number;
  mileage: string;
  condition: "New" | "Used";
  cc: string;
  image: string;
  seller: string;
  verified: boolean;
}

const BIKES: Bike[] = [
  {
    id: 1,
    title: "Yamaha FZS V3 Fi",
    brand: "Yamaha",
    price: 195000,
    location: "Mirpur, Dhaka",
    year: 2023,
    mileage: "8,500 km",
    condition: "Used",
    cc: "149cc",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop&auto=format",
    seller: "Rahim Motors",
    verified: true,
  },
  {
    id: 2,
    title: "Honda CB Hornet 160R",
    brand: "Honda",
    price: 210000,
    location: "Agrabad, Chittagong",
    year: 2022,
    mileage: "12,000 km",
    condition: "Used",
    cc: "162cc",
    image: "https://images.unsplash.com/photo-1449426468159-d96dbf08f19f?w=600&h=400&fit=crop&auto=format",
    seller: "Karim Auto Zone",
    verified: true,
  },
  {
    id: 3,
    title: "Bajaj Pulsar NS160",
    brand: "Bajaj",
    price: 175000,
    location: "Zindabazar, Sylhet",
    year: 2023,
    mileage: "5,200 km",
    condition: "Used",
    cc: "160cc",
    image: "https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?w=600&h=400&fit=crop&auto=format",
    seller: "Pulsar BD Showroom",
    verified: false,
  },
  {
    id: 4,
    title: "Hero Glamour FI 125",
    brand: "Hero",
    price: 135000,
    location: "Rajshahi Sadar",
    year: 2024,
    mileage: "0 km",
    condition: "New",
    cc: "124cc",
    image: "https://images.unsplash.com/photo-1609630875171-b1321377ee65?w=600&h=400&fit=crop&auto=format",
    seller: "Hero BD Dealer",
    verified: true,
  },
  {
    id: 5,
    title: "TVS Apache RTR 160 4V",
    brand: "TVS",
    price: 188000,
    location: "Khulna City",
    year: 2023,
    mileage: "9,800 km",
    condition: "Used",
    cc: "159cc",
    image: "https://images.unsplash.com/photo-1558980664-769d59546b3d?w=600&h=400&fit=crop&auto=format",
    seller: "TVS Authorized",
    verified: true,
  },
  {
    id: 6,
    title: "Suzuki Gixxer SF 150",
    brand: "Suzuki",
    price: 220000,
    location: "Gulshan, Dhaka",
    year: 2022,
    mileage: "14,000 km",
    condition: "Used",
    cc: "155cc",
    image: "https://images.unsplash.com/photo-1532298229144-0ec0c57515c7?w=600&h=400&fit=crop&auto=format",
    seller: "Gixxer BD",
    verified: false,
  },
];

const BD_DISTRICTS = [
  "Dhaka", "Chittagong", "Sylhet", "Rajshahi", "Khulna",
  "Barisal", "Rangpur", "Mymensingh", "Comilla", "Narayanganj",
  "Gazipur", "Narsingdi", "Tangail", "Bogra", "Dinajpur",
  "Jessore", "Faridpur", "Noakhali", "Brahmanbaria", "Cox's Bazar",
];

function formatPrice(p: number) {
  return "৳ " + p.toLocaleString("en-IN");
}

// ── Shared UI ──────────────────────────────────────────────────────────────────

function ConditionBadge({ condition }: { condition: "New" | "Used" }) {
  return (
    <span
      className={`text-xs font-semibold px-2 py-0.5 rounded-full ${
        condition === "New"
          ? "bg-green-100 text-green-700"
          : "bg-amber-100 text-amber-700"
      }`}
    >
      {condition}
    </span>
  );
}

function ListingCard({ bike, onClick }: { bike: Bike; onClick: () => void }) {
  const [saved, setSaved] = useState(false);
  return (
    <div
      onClick={onClick}
      className="bg-card rounded-xl overflow-hidden border border-border shadow-sm hover:shadow-lg transition-all duration-200 cursor-pointer group"
    >
      <div className="relative overflow-hidden">
        <img
          src={bike.image}
          alt={bike.title}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300 bg-muted"
        />
        <button
          onClick={(e) => { e.stopPropagation(); setSaved(!saved); }}
          className="absolute top-2.5 right-2.5 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-md hover:scale-110 transition-transform"
        >
          <Heart
            size={15}
            className={saved ? "fill-red-500 text-red-500" : "text-slate-400"}
          />
        </button>
        {bike.verified && (
          <div className="absolute top-2.5 left-2.5 bg-white/95 rounded-full px-2 py-0.5 flex items-center gap-1 shadow-sm">
            <BadgeCheck size={11} style={{ color: RED }} />
            <span className="text-xs font-semibold" style={{ color: RED }}>Verified</span>
          </div>
        )}
      </div>
      <div className="p-4">
        <p className="text-lg font-bold leading-none" style={{ color: RED }}>
          {formatPrice(bike.price)}
        </p>
        <h3 className="font-semibold text-sm text-foreground mt-1 truncate">{bike.title}</h3>
        <div className="flex items-center gap-3 mt-2 text-muted-foreground text-xs">
          <span className="flex items-center gap-1">
            <MapPin size={10} />{bike.location}
          </span>
          <span className="flex items-center gap-1">
            <Calendar size={10} />{bike.year}
          </span>
        </div>
        <div className="flex items-center justify-between mt-3 pt-3 border-t border-border">
          <ConditionBadge condition={bike.condition} />
          <span className="text-xs text-muted-foreground">{bike.cc} · {bike.mileage}</span>
        </div>
      </div>
    </div>
  );
}

// ── Navbar ─────────────────────────────────────────────────────────────────────

function Navbar({ setPage }: { setPage: (p: Page) => void }) {
  const [open, setOpen] = useState(false);
  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-border shadow-sm">
      <div className="max-w-7xl mx-auto px-4 h-16 flex items-center gap-4">
        <button onClick={() => setPage("home")} className="flex items-center gap-2 shrink-0">
          <div
            className="w-9 h-9 rounded-xl flex items-center justify-center text-white font-bold text-base"
            style={{ backgroundColor: RED }}
          >
            B
          </div>
          <span className="font-bold text-xl" style={{ color: NAVY }}>BikeBD</span>
        </button>

        <div className="flex-1 max-w-lg mx-auto hidden md:flex items-center bg-muted rounded-full px-4 h-10 border border-border gap-2 focus-within:border-primary transition-colors">
          <Search size={15} className="text-muted-foreground shrink-0" />
          <input
            className="flex-1 bg-transparent text-sm outline-none placeholder:text-muted-foreground"
            placeholder="Search bikes by brand, model..."
          />
        </div>

        <div className="ml-auto flex items-center gap-2">
          <button className="hidden md:block text-sm font-semibold px-4 py-2 rounded-lg hover:bg-muted transition-colors" style={{ color: NAVY }}>
            Login
          </button>
          <button className="hidden md:block text-sm font-semibold px-4 py-2 rounded-lg border border-border hover:bg-muted transition-colors" style={{ color: NAVY }}>
            Register
          </button>
          <button
            onClick={() => setPage("post")}
            className="hidden md:flex items-center gap-1.5 text-sm font-bold px-4 py-2 rounded-lg text-white transition-opacity hover:opacity-90"
            style={{ backgroundColor: RED }}
          >
            + Post Free Ad
          </button>
          <button onClick={() => setOpen(!open)} className="md:hidden p-2 rounded-lg hover:bg-muted">
            <Menu size={20} style={{ color: NAVY }} />
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden bg-white border-t border-border p-4 space-y-3">
          <div className="flex items-center bg-muted rounded-full px-4 h-10 border border-border gap-2">
            <Search size={15} className="text-muted-foreground" />
            <input className="flex-1 bg-transparent text-sm outline-none placeholder:text-muted-foreground" placeholder="Search bikes..." />
          </div>
          <button className="w-full text-left text-sm font-semibold py-2.5 px-4 rounded-xl hover:bg-muted" style={{ color: NAVY }}>Login</button>
          <button className="w-full text-left text-sm font-semibold py-2.5 px-4 rounded-xl border border-border hover:bg-muted" style={{ color: NAVY }}>Register</button>
          <button
            onClick={() => { setPage("post"); setOpen(false); }}
            className="w-full text-sm font-bold py-2.5 px-4 rounded-xl text-white"
            style={{ backgroundColor: RED }}
          >
            + Post Free Ad
          </button>
        </div>
      )}
    </nav>
  );
}

// ── Footer ─────────────────────────────────────────────────────────────────────

function Footer() {
  return (
    <footer style={{ backgroundColor: NAVY }} className="text-white pt-14 pb-8 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mb-10">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 rounded-xl flex items-center justify-center text-white font-bold" style={{ backgroundColor: RED }}>B</div>
              <span className="font-bold text-xl">BikeBD</span>
            </div>
            <p className="text-sm text-white/55 leading-relaxed mb-5">
              {"Bangladesh's #1 marketplace for buying and selling new and used bikes."}
            </p>
            <div className="flex gap-2">
              {[Facebook, Instagram, Twitter, Youtube].map((Icon, i) => (
                <button key={i} className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors">
                  <Icon size={15} />
                </button>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-sm uppercase tracking-wider text-white/50">Quick Links</h4>
            <ul className="space-y-2.5">
              {["Buy a Bike", "Sell a Bike", "All Categories", "Featured Ads", "Compare Bikes"].map((l) => (
                <li key={l}><button className="text-sm text-white/60 hover:text-white transition-colors">{l}</button></li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-sm uppercase tracking-wider text-white/50">Popular Brands</h4>
            <ul className="space-y-2.5">
              {["Yamaha", "Honda", "Bajaj", "Hero", "TVS", "Suzuki"].map((b) => (
                <li key={b}><button className="text-sm text-white/60 hover:text-white transition-colors">{b}</button></li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-sm uppercase tracking-wider text-white/50">Support</h4>
            <ul className="space-y-2.5">
              {["Help Center", "Safety Tips", "Fraud Prevention", "Contact Us", "Terms of Service", "Privacy Policy"].map((l) => (
                <li key={l}><button className="text-sm text-white/60 hover:text-white transition-colors">{l}</button></li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/35">© 2024 BikeBD Technologies Ltd. All rights reserved.</p>
          <div className="flex items-center gap-2 flex-wrap justify-center">
            <span className="text-xs text-white/35">Payments via:</span>
            <span className="text-xs font-bold px-2.5 py-1 rounded-md text-white" style={{ backgroundColor: "#E2136E" }}>bKash</span>
            <span className="text-xs font-bold px-2.5 py-1 rounded-md text-white" style={{ backgroundColor: "#F26522" }}>Nagad</span>
            <span className="text-xs font-bold px-2.5 py-1 rounded-md text-white" style={{ backgroundColor: "#2C9642" }}>SSL Commerz</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

// ── HomePage ───────────────────────────────────────────────────────────────────

function HomePage({ setPage }: { setPage: (p: Page) => void }) {
  return (
    <div>
      {/* ── Hero ── */}
      <section
        className="relative py-16 md:py-24 px-4 text-white overflow-hidden"
        style={{ background: `linear-gradient(135deg, ${NAVY} 0%, #2a4a6e 60%, #16304f 100%)` }}
      >
        <div
          className="absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage: "url(https://images.unsplash.com/photo-1449426468159-d96dbf08f19f?w=1600&h=700&fit=crop&auto=format)",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        {/* Decorative circles */}
        <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full opacity-10" style={{ background: RED }} />
        <div className="absolute -bottom-20 -left-20 w-64 h-64 rounded-full opacity-5" style={{ background: RED }} />

        <div className="relative max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-white/10 rounded-full px-4 py-1.5 text-sm mb-6 border border-white/20">
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            10,000+ verified listings across Bangladesh
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold mb-4 leading-tight">
            Buy & Sell Bikes<br />
            <span style={{ color: "#f4a261" }}>in Bangladesh</span>
          </h1>
          <p className="text-lg text-white/70 mb-10">
            Find your perfect ride or sell your bike fast — free, easy, trusted.
          </p>

          {/* Search form */}
          <div className="bg-white rounded-2xl p-4 shadow-2xl text-left">
            <div className="grid grid-cols-2 md:grid-cols-5 gap-3 mb-3">
              {["Category", "Brand", "District", "Condition", "Price Range"].map((label) => (
                <div key={label} className="relative">
                  <select className="w-full h-11 pl-3 pr-8 rounded-xl border border-border bg-muted text-sm text-foreground appearance-none focus:outline-none focus:ring-2 cursor-pointer">
                    <option value="">{label}</option>
                    {label === "Category" && ["Motorcycle", "Bicycle", "Scooter", "Electric Bike"].map((o) => <option key={o}>{o}</option>)}
                    {label === "Brand" && ["Yamaha", "Honda", "Bajaj", "Hero", "TVS", "Suzuki"].map((o) => <option key={o}>{o}</option>)}
                    {label === "District" && BD_DISTRICTS.map((o) => <option key={o}>{o}</option>)}
                    {label === "Condition" && ["New", "Used"].map((o) => <option key={o}>{o}</option>)}
                    {label === "Price Range" && ["Under 1 Lakh", "1–2 Lakh", "2–3 Lakh", "3 Lakh+"].map((o) => <option key={o}>{o}</option>)}
                  </select>
                  <ChevronDown size={13} className="absolute right-2.5 top-3.5 text-muted-foreground pointer-events-none" />
                </div>
              ))}
            </div>
            <button
              onClick={() => setPage("browse")}
              className="w-full h-12 rounded-xl text-white font-bold text-base flex items-center justify-center gap-2 transition-opacity hover:opacity-90"
              style={{ backgroundColor: RED }}
            >
              <Search size={18} /> Search Bikes
            </button>
          </div>

          <p className="text-white/40 text-xs mt-4">Popular: Yamaha FZS · Honda Hornet · Bajaj Pulsar · TVS Apache</p>
        </div>
      </section>

      {/* ── Categories ── */}
      <section className="py-14 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold" style={{ color: NAVY }}>Browse by Category</h2>
            <p className="text-muted-foreground text-sm mt-1">Find the type of bike that suits you</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { icon: "🏍️", label: "Motorcycle", count: "6,240", color: "#fef2f2" },
              { icon: "🚲", label: "Bicycle", count: "1,850", color: "#f0fdf4" },
              { icon: "🛵", label: "Scooter", count: "980", color: "#eff6ff" },
              { icon: "⚡", label: "Electric Bike", count: "430", color: "#fefce8" },
            ].map((cat) => (
              <button
                key={cat.label}
                onClick={() => setPage("browse")}
                className="group flex flex-col items-center p-7 rounded-2xl border-2 border-border bg-white hover:border-red-400 hover:shadow-xl transition-all duration-200"
                style={{ background: `linear-gradient(135deg, white 60%, ${cat.color})` }}
              >
                <span className="text-5xl mb-3 group-hover:scale-110 transition-transform duration-200">{cat.icon}</span>
                <span className="font-bold text-sm" style={{ color: NAVY }}>{cat.label}</span>
                <span
                  className="mt-2.5 text-xs font-bold px-3 py-1 rounded-full text-white"
                  style={{ backgroundColor: RED }}
                >
                  {cat.count} ads
                </span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ── Featured Listings ── */}
      <section className="py-14 px-4 bg-muted">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold" style={{ color: NAVY }}>Featured Bikes</h2>
              <p className="text-muted-foreground text-sm mt-0.5">Hand-picked verified listings</p>
            </div>
            <button
              onClick={() => setPage("browse")}
              className="text-sm font-semibold flex items-center gap-1 hover:gap-2 transition-all"
              style={{ color: RED }}
            >
              View all <ChevronRight size={16} />
            </button>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {BIKES.slice(0, 4).map((bike) => (
              <ListingCard key={bike.id} bike={bike} onClick={() => setPage("detail")} />
            ))}
          </div>
        </div>
      </section>

      {/* ── Trust Section ── */}
      <section className="py-14 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold" style={{ color: NAVY }}>Why Choose BikeBD?</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: "✅",
                title: "Verified Sellers",
                desc: "Every seller completes our NID verification. Browse with confidence knowing listings are from real, trusted people.",
                stat: "12,400+ verified sellers",
              },
              {
                icon: "🔒",
                title: "Secure Transactions",
                desc: "Protected payments via bKash, Nagad, and SSL Commerz. Your money stays safe with our escrow-style protection.",
                stat: "৳ 42 crore+ transacted",
              },
              {
                icon: "📱",
                title: "Easy Posting",
                desc: "List your bike in under 3 minutes. Upload photos, set a price, and reach thousands of buyers across Bangladesh.",
                stat: "Free for private sellers",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="flex flex-col p-7 rounded-2xl border border-border bg-white hover:shadow-lg transition-shadow"
              >
                <span className="text-4xl mb-4">{item.icon}</span>
                <h3 className="font-bold text-lg mb-2" style={{ color: NAVY }}>{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed flex-1">{item.desc}</p>
                <div
                  className="mt-5 text-xs font-bold px-3 py-1.5 rounded-lg inline-self-start self-start"
                  style={{ backgroundColor: "#fef2f2", color: RED }}
                >
                  {item.stat}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Recent Listings ── */}
      <section className="py-14 px-4 bg-muted">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold" style={{ color: NAVY }}>Recent Listings</h2>
              <p className="text-muted-foreground text-sm mt-0.5">Fresh ads posted today</p>
            </div>
            <button
              onClick={() => setPage("browse")}
              className="text-sm font-semibold flex items-center gap-1 hover:gap-2 transition-all"
              style={{ color: RED }}
            >
              See all <ChevronRight size={16} />
            </button>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {BIKES.map((bike) => (
              <ListingCard key={bike.id} bike={bike} onClick={() => setPage("detail")} />
            ))}
          </div>
        </div>
      </section>

      {/* ── App Download ── */}
      <section className="py-16 px-4" style={{ backgroundColor: NAVY }}>
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10">
          <div className="text-white flex-1">
            <p className="text-xs font-bold uppercase tracking-widest text-white/40 mb-3">Mobile App</p>
            <h2 className="text-3xl md:text-4xl font-extrabold mb-4 leading-tight">
              Get the BikeBD App
            </h2>
            <p className="text-white/60 mb-8 max-w-md leading-relaxed">
              Buy and sell on the go. Instant alerts for new listings, real-time chat with sellers, and saved searches — all in your pocket.
            </p>
            <div className="flex gap-3 flex-wrap">
              {[
                { label: "App Store", sub: "Download on the" },
                { label: "Google Play", sub: "Get it on" },
              ].map((btn) => (
                <button
                  key={btn.label}
                  className="flex items-center gap-3 bg-white/10 hover:bg-white/20 border border-white/20 px-5 py-3 rounded-xl transition-colors"
                >
                  <Smartphone size={22} className="text-white" />
                  <div className="text-left">
                    <div className="text-xs text-white/50">{btn.sub}</div>
                    <div className="text-sm font-bold text-white">{btn.label}</div>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Phone mockup */}
          <div className="relative shrink-0">
            <div className="relative w-52 h-96 rounded-[2.5rem] border-4 border-white/20 shadow-2xl overflow-hidden bg-gradient-to-b from-slate-800 to-slate-900 flex flex-col">
              <div className="h-1.5 w-16 bg-white/20 rounded-full mx-auto mt-3 mb-0" />
              <div className="p-3 flex-1 overflow-hidden">
                <div className="bg-white rounded-2xl h-full p-3 overflow-hidden">
                  <div className="flex items-center gap-1.5 mb-3">
                    <div className="w-5 h-5 rounded-md flex items-center justify-center text-white text-xs font-bold" style={{ backgroundColor: RED }}>B</div>
                    <span className="text-xs font-bold" style={{ color: NAVY }}>BikeBD</span>
                  </div>
                  <div className="space-y-2">
                    {BIKES.slice(0, 3).map((b) => (
                      <div key={b.id} className="flex gap-2 p-1.5 rounded-lg bg-muted">
                        <img src={b.image} alt={b.title} className="w-12 h-10 rounded-md object-cover shrink-0 bg-slate-200" />
                        <div className="min-w-0">
                          <p className="text-[9px] font-bold truncate" style={{ color: RED }}>৳ {(b.price / 1000).toFixed(0)}K</p>
                          <p className="text-[8px] font-semibold text-foreground truncate">{b.title}</p>
                          <p className="text-[7px] text-muted-foreground">{b.location}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute -top-3 -right-3 w-16 h-16 rounded-full border-4 border-white/10 opacity-30" style={{ backgroundColor: RED }} />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

// ── BrowsePage ─────────────────────────────────────────────────────────────────

function BrowsePage({ setPage }: { setPage: (p: Page) => void }) {
  const [showFilters, setShowFilters] = useState(false);
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");

  const FilterPanel = () => (
    <div className="bg-card rounded-2xl border border-border p-5 space-y-6">
      <div className="flex items-center justify-between">
        <h3 className="font-bold text-base" style={{ color: NAVY }}>Filters</h3>
        <button className="text-xs font-semibold hover:opacity-70 transition-opacity" style={{ color: RED }}>Reset all</button>
      </div>

      {/* Category */}
      <div>
        <h4 className="font-semibold text-sm mb-3 text-foreground">Category</h4>
        <div className="space-y-2.5">
          {["Motorcycle", "Bicycle", "Scooter", "Electric Bike"].map((c) => (
            <label key={c} className="flex items-center gap-2.5 text-sm cursor-pointer">
              <input type="checkbox" className="rounded accent-red-500 w-4 h-4" />
              <span className="text-foreground">{c}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Brand */}
      <div>
        <h4 className="font-semibold text-sm mb-3 text-foreground">Brand</h4>
        <div className="space-y-2.5">
          {["Yamaha", "Honda", "Bajaj", "Hero", "TVS", "Suzuki", "Other"].map((b) => (
            <label key={b} className="flex items-center gap-2.5 text-sm cursor-pointer">
              <input type="checkbox" className="rounded accent-red-500 w-4 h-4" />
              <span className="text-foreground">{b}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Price Range */}
      <div>
        <h4 className="font-semibold text-sm mb-3 text-foreground">Price Range (BDT)</h4>
        <div className="flex gap-2 mb-3">
          <input className="flex-1 h-9 px-3 rounded-xl border border-border text-sm bg-muted focus:outline-none" placeholder="Min" defaultValue="0" />
          <input className="flex-1 h-9 px-3 rounded-xl border border-border text-sm bg-muted focus:outline-none" placeholder="Max" defaultValue="500000" />
        </div>
        <input type="range" min={0} max={500000} defaultValue={250000} className="w-full accent-red-500" />
        <div className="flex justify-between text-xs text-muted-foreground mt-1">
          <span>৳ 0</span><span>৳ 5,00,000</span>
        </div>
      </div>

      {/* Condition */}
      <div>
        <h4 className="font-semibold text-sm mb-3 text-foreground">Condition</h4>
        <div className="flex gap-4">
          {["All", "New", "Used"].map((c, i) => (
            <label key={c} className="flex items-center gap-1.5 text-sm cursor-pointer">
              <input type="radio" name="cond" defaultChecked={i === 0} className="accent-red-500" />
              <span>{c}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Year */}
      <div>
        <h4 className="font-semibold text-sm mb-3 text-foreground">Year</h4>
        <div className="relative">
          <select className="w-full h-10 pl-3 pr-8 rounded-xl border border-border bg-muted text-sm appearance-none focus:outline-none">
            <option>Any Year</option>
            {Array.from({ length: 15 }, (_, i) => 2024 - i).map((y) => <option key={y}>{y}</option>)}
          </select>
          <ChevronDown size={13} className="absolute right-3 top-3.5 text-muted-foreground pointer-events-none" />
        </div>
      </div>

      {/* District */}
      <div>
        <h4 className="font-semibold text-sm mb-3 text-foreground">District</h4>
        <div className="relative">
          <select className="w-full h-10 pl-3 pr-8 rounded-xl border border-border bg-muted text-sm appearance-none focus:outline-none">
            <option>All Districts</option>
            {BD_DISTRICTS.map((d) => <option key={d}>{d}</option>)}
          </select>
          <ChevronDown size={13} className="absolute right-3 top-3.5 text-muted-foreground pointer-events-none" />
        </div>
      </div>

      {/* Engine CC */}
      <div>
        <h4 className="font-semibold text-sm mb-3 text-foreground">Engine CC</h4>
        <div className="relative">
          <select className="w-full h-10 pl-3 pr-8 rounded-xl border border-border bg-muted text-sm appearance-none focus:outline-none">
            <option>All CC</option>
            {["50cc", "100cc", "125cc", "150cc", "160cc", "200cc+"].map((cc) => <option key={cc}>{cc}</option>)}
          </select>
          <ChevronDown size={13} className="absolute right-3 top-3.5 text-muted-foreground pointer-events-none" />
        </div>
      </div>

      <button
        className="w-full h-11 rounded-xl text-white font-bold text-sm transition-opacity hover:opacity-90"
        style={{ backgroundColor: RED }}
      >
        Apply Filters
      </button>
    </div>
  );

  return (
    <div className="min-h-screen bg-muted">
      {/* Top bar */}
      <div className="bg-white border-b border-border px-4 py-3 sticky top-16 z-30">
        <div className="max-w-7xl mx-auto flex items-center gap-3 justify-between">
          <div>
            <span className="font-bold text-foreground">1,240 bikes</span>
            <span className="text-muted-foreground text-sm ml-1">found</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="relative hidden sm:block">
              <select className="h-9 pl-3 pr-8 rounded-xl border border-border bg-white text-sm appearance-none cursor-pointer focus:outline-none">
                <option>Sort: Newest First</option>
                <option>Price: Low to High</option>
                <option>Price: High to Low</option>
                <option>Most Popular</option>
              </select>
              <ChevronDown size={13} className="absolute right-2.5 top-3 text-muted-foreground pointer-events-none" />
            </div>
            <div className="flex rounded-xl border border-border overflow-hidden">
              <button
                onClick={() => setViewMode("grid")}
                className={`p-2 transition-colors ${viewMode === "grid" ? "text-white" : "bg-white text-muted-foreground hover:bg-muted"}`}
                style={viewMode === "grid" ? { backgroundColor: RED } : {}}
              >
                <LayoutGrid size={16} />
              </button>
              <button
                onClick={() => setViewMode("list")}
                className={`p-2 transition-colors ${viewMode === "list" ? "text-white" : "bg-white text-muted-foreground hover:bg-muted"}`}
                style={viewMode === "list" ? { backgroundColor: RED } : {}}
              >
                <List size={16} />
              </button>
            </div>
            <button
              onClick={() => setShowFilters(true)}
              className="md:hidden flex items-center gap-1.5 h-9 px-3 rounded-xl border border-border bg-white text-sm font-semibold"
              style={{ color: NAVY }}
            >
              <SlidersHorizontal size={14} /> Filters
            </button>
          </div>
        </div>
      </div>

      {/* Mobile filter drawer overlay */}
      {showFilters && (
        <div className="fixed inset-0 z-50 md:hidden">
          <div className="absolute inset-0 bg-black/40" onClick={() => setShowFilters(false)} />
          <div className="absolute bottom-0 left-0 right-0 bg-white rounded-t-3xl max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between p-5 border-b border-border sticky top-0 bg-white">
              <span className="font-bold text-lg" style={{ color: NAVY }}>Filters</span>
              <button onClick={() => setShowFilters(false)} className="p-1.5 rounded-lg hover:bg-muted">
                <X size={20} />
              </button>
            </div>
            <div className="p-4"><FilterPanel /></div>
          </div>
        </div>
      )}

      <div className="max-w-7xl mx-auto px-4 py-6 flex gap-6">
        {/* Sidebar */}
        <aside className="w-72 shrink-0 hidden md:block">
          <FilterPanel />
        </aside>

        {/* Main */}
        <main className="flex-1 min-w-0">
          <div className={`grid gap-4 ${viewMode === "grid" ? "grid-cols-1 sm:grid-cols-2 xl:grid-cols-3" : "grid-cols-1"}`}>
            {BIKES.map((bike) =>
              viewMode === "grid" ? (
                <ListingCard key={bike.id} bike={bike} onClick={() => setPage("detail")} />
              ) : (
                <div
                  key={bike.id}
                  onClick={() => setPage("detail")}
                  className="bg-card rounded-xl border border-border shadow-sm hover:shadow-md transition-shadow cursor-pointer flex gap-0 overflow-hidden"
                >
                  <img
                    src={bike.image}
                    alt={bike.title}
                    className="w-44 h-36 object-cover shrink-0 bg-muted"
                  />
                  <div className="flex-1 p-4 flex flex-col justify-between">
                    <div>
                      <div className="flex items-start justify-between gap-2">
                        <div>
                          <h3 className="font-semibold text-foreground text-sm">{bike.title}</h3>
                          <p className="text-xl font-bold mt-0.5" style={{ color: RED }}>{formatPrice(bike.price)}</p>
                        </div>
                        <ConditionBadge condition={bike.condition} />
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-3 text-xs text-muted-foreground">
                      <span className="flex items-center gap-1"><MapPin size={10} />{bike.location}</span>
                      <span className="flex items-center gap-1"><Calendar size={10} />{bike.year}</span>
                      <span>{bike.cc}</span>
                      <span>{bike.mileage}</span>
                    </div>
                  </div>
                </div>
              )
            )}
          </div>

          {/* Pagination */}
          <div className="flex items-center justify-center gap-1.5 mt-10">
            <button className="w-9 h-9 rounded-xl border border-border bg-white flex items-center justify-center hover:bg-muted transition-colors">
              <ArrowLeft size={15} />
            </button>
            {[1, 2, 3, "...", 12].map((p, i) => (
              <button
                key={i}
                className={`w-9 h-9 rounded-xl text-sm font-semibold border transition-colors ${
                  p === 1 ? "text-white border-transparent" : "bg-white border-border hover:bg-muted text-foreground"
                }`}
                style={p === 1 ? { backgroundColor: RED } : {}}
              >
                {p}
              </button>
            ))}
            <button className="w-9 h-9 rounded-xl border border-border bg-white flex items-center justify-center hover:bg-muted transition-colors">
              <ArrowRight size={15} />
            </button>
          </div>
        </main>
      </div>
    </div>
  );
}

// ── DetailPage ─────────────────────────────────────────────────────────────────

function DetailPage({ setPage }: { setPage: (p: Page) => void }) {
  const bike = BIKES[0];
  const [activeImg, setActiveImg] = useState(0);
  const [saved, setSaved] = useState(false);
  const [safetyOpen, setSafetyOpen] = useState(false);
  const images = [bike.image, ...BIKES.slice(1, 5).map((b) => b.image)];

  return (
    <div className="min-h-screen bg-muted pb-20 lg:pb-0">
      {/* Breadcrumb */}
      <div className="bg-white border-b border-border px-4 py-3">
        <div className="max-w-7xl mx-auto text-sm text-muted-foreground flex items-center gap-1.5 flex-wrap">
          <button onClick={() => setPage("home")} className="hover:text-primary transition-colors">Home</button>
          <ChevronRight size={13} />
          <button onClick={() => setPage("browse")} className="hover:text-primary transition-colors">Motorcycles</button>
          <ChevronRight size={13} />
          <span className="text-foreground font-semibold">{bike.title}</span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-6 flex flex-col lg:flex-row gap-6">
        {/* Left */}
        <div className="flex-1 space-y-5">
          {/* Gallery */}
          <div className="bg-card rounded-2xl overflow-hidden border border-border shadow-sm">
            <div className="relative bg-slate-100">
              <img
                src={images[activeImg]}
                alt={bike.title}
                className="w-full h-72 md:h-[400px] object-cover"
              />
              <div className="absolute top-3 left-3 bg-black/60 text-white text-xs px-3 py-1 rounded-full font-semibold backdrop-blur-sm">
                360° View
              </div>
              <div className="absolute bottom-3 right-3 bg-black/60 text-white text-xs px-2.5 py-1 rounded-full">
                {activeImg + 1} / {images.length}
              </div>
            </div>
            <div className="flex gap-2 p-3 overflow-x-auto bg-white">
              {images.map((img, i) => (
                <button
                  key={i}
                  onClick={() => setActiveImg(i)}
                  className={`shrink-0 w-20 h-16 rounded-xl overflow-hidden border-2 transition-all ${
                    activeImg === i ? "border-red-500 scale-105" : "border-transparent opacity-70 hover:opacity-100"
                  }`}
                >
                  <img src={img} alt="" className="w-full h-full object-cover bg-slate-200" />
                </button>
              ))}
            </div>
          </div>

          {/* Specs */}
          <div className="bg-card rounded-2xl border border-border shadow-sm p-6">
            <h2 className="font-bold text-xl mb-5" style={{ color: NAVY }}>Specifications</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {[
                ["Brand", bike.brand],
                ["Model", "FZS V3 Fi"],
                ["Year", String(bike.year)],
                ["Engine", bike.cc],
                ["Mileage", bike.mileage],
                ["Color", "Midnight Black"],
                ["Condition", bike.condition],
                ["Fuel Type", "Petrol"],
              ].map(([k, v]) => (
                <div key={k} className="bg-muted rounded-xl p-3.5">
                  <div className="text-xs text-muted-foreground mb-1">{k}</div>
                  <div className="font-bold text-sm text-foreground">{v}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Description */}
          <div className="bg-card rounded-2xl border border-border shadow-sm p-6">
            <h2 className="font-bold text-xl mb-3" style={{ color: NAVY }}>Description</h2>
            <p className="text-sm text-muted-foreground leading-7">
              {`This Yamaha FZS V3 Fi is in excellent condition with full service history from authorized service center.
              Original paint, never been in an accident, never flooded. All documents are complete — registration,
              tax token, fitness, and insurance up to date. Genuine reason for selling: upgrading to a larger bike.
              Price is slightly negotiable for serious buyers only. Located in Mirpur-10, Dhaka. Test ride available
              after token amount. Call between 10 AM – 8 PM.`}
            </p>
          </div>

          {/* Safety Tips */}
          <div className="bg-card rounded-2xl border border-border shadow-sm overflow-hidden">
            <button
              onClick={() => setSafetyOpen(!safetyOpen)}
              className="w-full flex items-center justify-between p-5 text-left hover:bg-muted/50 transition-colors"
            >
              <span className="font-bold text-base flex items-center gap-2" style={{ color: NAVY }}>
                <Shield size={18} style={{ color: RED }} /> Safety Tips for Buyers
              </span>
              <ChevronDown size={18} className={`text-muted-foreground transition-transform duration-200 ${safetyOpen ? "rotate-180" : ""}`} />
            </button>
            {safetyOpen && (
              <div className="px-5 pb-5 space-y-3 border-t border-border pt-4">
                {[
                  "Always meet in a safe, public location during daylight hours.",
                  "Inspect the bike thoroughly and request all original documents.",
                  "Verify engine and chassis numbers against registration papers.",
                  "Never pay advance without proper document verification.",
                  "Have a trusted mechanic inspect the bike before purchase.",
                ].map((tip, i) => (
                  <div key={i} className="flex gap-3 text-sm text-muted-foreground">
                    <Check size={15} className="text-green-500 shrink-0 mt-0.5" />
                    <span>{tip}</span>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Similar Bikes */}
          <div className="bg-card rounded-2xl border border-border shadow-sm p-6">
            <h2 className="font-bold text-xl mb-5" style={{ color: NAVY }}>Similar Bikes</h2>
            <div className="flex gap-4 overflow-x-auto pb-2">
              {BIKES.slice(1).map((b) => (
                <div
                  key={b.id}
                  onClick={() => setActiveImg(0)}
                  className="shrink-0 w-44 rounded-xl border border-border overflow-hidden cursor-pointer hover:shadow-md transition-shadow"
                >
                  <img src={b.image} alt={b.title} className="w-full h-28 object-cover bg-slate-200" />
                  <div className="p-3">
                    <p className="text-xs font-bold" style={{ color: RED }}>{formatPrice(b.price)}</p>
                    <p className="text-xs font-semibold text-foreground mt-0.5 truncate">{b.title}</p>
                    <p className="text-xs text-muted-foreground mt-0.5">{b.location}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right sticky column */}
        <aside className="w-full lg:w-80 shrink-0">
          <div className="sticky top-[calc(4rem+1px)] space-y-4">
            {/* Price & actions */}
            <div className="bg-card rounded-2xl border border-border shadow-sm p-5">
              <h1 className="text-xl font-bold text-foreground mb-1">{bike.title}</h1>
              <div className="flex items-center gap-2 mb-1">
                <span className="text-3xl font-extrabold" style={{ color: RED }}>{formatPrice(bike.price)}</span>
                <span className="text-xs font-bold bg-green-100 text-green-700 px-2.5 py-0.5 rounded-full">Negotiable</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-muted-foreground mb-5">
                <MapPin size={11} />{bike.location}
                <span>·</span>
                <span>Posted 2 days ago</span>
              </div>

              <div className="space-y-2.5">
                <button className="w-full h-12 rounded-xl font-bold text-white text-sm flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 transition-colors">
                  <Phone size={17} /> Call Seller
                </button>
                <button className="w-full h-12 rounded-xl font-bold text-green-600 text-sm flex items-center justify-center gap-2 border-2 border-green-500 hover:bg-green-50 transition-colors">
                  <MessageCircle size={17} /> WhatsApp
                </button>
                <button
                  className="w-full h-12 rounded-xl font-bold text-white text-sm flex items-center justify-center gap-2 transition-opacity hover:opacity-90"
                  style={{ backgroundColor: NAVY }}
                >
                  <Mail size={17} /> Send Message
                </button>
                <button
                  onClick={() => setSaved(!saved)}
                  className={`w-full flex items-center justify-center gap-2 text-sm font-semibold py-2 rounded-xl transition-colors ${saved ? "bg-red-50" : "hover:bg-muted"}`}
                  style={{ color: saved ? RED : "#64748b" }}
                >
                  <Heart size={16} className={saved ? "fill-red-500" : ""} />
                  {saved ? "Saved to Wishlist" : "Save to Wishlist"}
                </button>
              </div>
            </div>

            {/* Seller card */}
            <div className="bg-card rounded-2xl border border-border shadow-sm p-5">
              <h3 className="font-bold text-sm mb-4" style={{ color: NAVY }}>About the Seller</h3>
              <div className="flex items-center gap-3 mb-4">
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-xl shrink-0"
                  style={{ backgroundColor: NAVY }}
                >
                  R
                </div>
                <div>
                  <div className="flex items-center gap-1.5">
                    <span className="font-bold text-sm text-foreground">{bike.seller}</span>
                    <BadgeCheck size={15} style={{ color: RED }} />
                  </div>
                  <div className="text-xs text-muted-foreground">Member since Jan 2021</div>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-3 mb-4">
                <div className="bg-muted rounded-xl p-3 text-center">
                  <div className="font-bold text-foreground text-base">24</div>
                  <div className="text-xs text-muted-foreground">Listings</div>
                </div>
                <div className="bg-muted rounded-xl p-3 text-center">
                  <div className="font-bold text-foreground text-base">93%</div>
                  <div className="text-xs text-muted-foreground">Response Rate</div>
                </div>
              </div>
              <button
                className="w-full h-9 rounded-xl border border-border text-sm font-semibold hover:bg-muted transition-colors"
                style={{ color: NAVY }}
              >
                View All Seller Listings
              </button>
            </div>

            {/* Share */}
            <div className="bg-card rounded-2xl border border-border shadow-sm p-4">
              <p className="text-sm font-bold mb-3 text-foreground">Share this listing</p>
              <div className="grid grid-cols-4 gap-2">
                {[
                  { Icon: Facebook, color: "#1877f2" },
                  { Icon: Twitter, color: "#1da1f2" },
                  { Icon: MessageCircle, color: "#25d366" },
                  { Icon: Share2, color: "#64748b" },
                ].map(({ Icon, color }, i) => (
                  <button
                    key={i}
                    className="h-10 rounded-xl border border-border flex items-center justify-center hover:bg-muted transition-colors"
                  >
                    <Icon size={16} style={{ color }} />
                  </button>
                ))}
              </div>
            </div>
          </div>
        </aside>
      </div>

      {/* Mobile sticky bottom */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-border p-3 flex gap-2 z-40 shadow-lg">
        <button className="flex-1 h-12 rounded-xl font-bold text-white text-sm flex items-center justify-center gap-1.5 bg-green-500 hover:bg-green-600 transition-colors">
          <Phone size={16} /> Call
        </button>
        <button className="flex-1 h-12 rounded-xl font-bold text-white text-sm flex items-center justify-center gap-1.5" style={{ backgroundColor: "#25D366" }}>
          <MessageCircle size={16} /> WhatsApp
        </button>
        <button
          onClick={() => setSaved(!saved)}
          className="w-12 h-12 rounded-xl border border-border flex items-center justify-center"
          style={{ borderColor: saved ? RED : undefined }}
        >
          <Heart size={19} className={saved ? "fill-red-500 text-red-500" : "text-muted-foreground"} />
        </button>
      </div>
    </div>
  );
}

// ── PostAdPage ─────────────────────────────────────────────────────────────────

const STEPS = ["Category", "Details", "Photos", "Price & Location", "Preview"];

function PostAdPage({ setPage }: { setPage: (p: Page) => void }) {
  const [step, setStep] = useState(0);
  const [category, setCategory] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-muted py-8 px-4">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <div className="flex items-center gap-3 mb-6">
          <button
            onClick={() => step > 0 ? setStep(step - 1) : setPage("home")}
            className="w-9 h-9 rounded-xl border border-border bg-white flex items-center justify-center hover:bg-muted transition-colors"
          >
            <ArrowLeft size={17} />
          </button>
          <div>
            <h1 className="text-xl font-bold" style={{ color: NAVY }}>Post Your Bike Ad</h1>
            <p className="text-xs text-muted-foreground">Step {step + 1} of {STEPS.length}: {STEPS[step]}</p>
          </div>
        </div>

        {/* Progress */}
        <div className="mb-8">
          <div className="flex items-start justify-between mb-3 relative">
            <div className="absolute top-4 left-4 right-4 h-0.5 bg-border" />
            <div
              className="absolute top-4 left-4 h-0.5 transition-all duration-500"
              style={{ backgroundColor: RED, right: `calc(${(1 - step / (STEPS.length - 1)) * 100}% + 1rem)` }}
            />
            {STEPS.map((s, i) => (
              <div key={s} className="flex flex-col items-center gap-1.5 relative z-10">
                <div
                  className="w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold border-2 transition-all duration-300"
                  style={
                    i < step
                      ? { backgroundColor: RED, borderColor: RED, color: "white" }
                      : i === step
                      ? { backgroundColor: RED, borderColor: RED, color: "white" }
                      : { backgroundColor: "white", borderColor: "#e2e8f0", color: "#94a3b8" }
                  }
                >
                  {i < step ? <Check size={14} /> : i + 1}
                </div>
                <span
                  className="text-xs font-semibold hidden sm:block"
                  style={{ color: i === step ? RED : i < step ? NAVY : "#94a3b8" }}
                >
                  {s}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Card */}
        <div className="bg-card rounded-2xl border border-border shadow-sm p-6 md:p-8">

          {/* Step 1: Category */}
          {step === 0 && (
            <div>
              <h2 className="text-xl font-bold mb-1" style={{ color: NAVY }}>Choose a Category</h2>
              <p className="text-sm text-muted-foreground mb-6">What type of bike are you selling?</p>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: "🏍️", label: "Motorcycle", desc: "Sport, commuter, touring, off-road" },
                  { icon: "🚲", label: "Bicycle", desc: "Road, mountain, hybrid, BMX" },
                  { icon: "🛵", label: "Scooter", desc: "Automatic, moped, maxi-scooter" },
                  { icon: "⚡", label: "Electric Bike", desc: "E-bike, electric scooter, cycle" },
                ].map((cat) => (
                  <button
                    key={cat.label}
                    onClick={() => setCategory(cat.label)}
                    className={`relative flex flex-col items-center p-6 rounded-2xl border-2 transition-all text-center ${
                      category === cat.label
                        ? "border-red-500 bg-red-50 scale-[1.02]"
                        : "border-border bg-white hover:border-red-200 hover:bg-red-50/30"
                    }`}
                  >
                    {category === cat.label && (
                      <div className="absolute top-3 right-3 w-6 h-6 rounded-full flex items-center justify-center" style={{ backgroundColor: RED }}>
                        <Check size={13} className="text-white" />
                      </div>
                    )}
                    <span className="text-4xl mb-3">{cat.icon}</span>
                    <span className="font-bold text-sm text-foreground">{cat.label}</span>
                    <span className="text-xs text-muted-foreground mt-1">{cat.desc}</span>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Step 2: Details */}
          {step === 1 && (
            <div>
              <h2 className="text-xl font-bold mb-1" style={{ color: NAVY }}>Bike Details</h2>
              <p className="text-sm text-muted-foreground mb-6">Help buyers understand your bike better.</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { label: "Brand", type: "select", options: ["Yamaha", "Honda", "Bajaj", "Hero", "TVS", "Suzuki"] },
                  { label: "Model Name", type: "text", placeholder: "e.g. FZS V3 Fi" },
                  { label: "Year of Make", type: "select", options: Array.from({ length: 15 }, (_, i) => String(2024 - i)) },
                  { label: "Engine CC", type: "select", options: ["50cc", "100cc", "125cc", "150cc", "160cc", "200cc+"] },
                  { label: "Mileage (km)", type: "number", placeholder: "e.g. 12000" },
                ].map((f) => (
                  <div key={f.label}>
                    <label className="block text-sm font-semibold mb-1.5 text-foreground">{f.label}</label>
                    {f.type === "select" ? (
                      <div className="relative">
                        <select className="w-full h-11 pl-3 pr-8 rounded-xl border border-border bg-muted text-sm appearance-none focus:outline-none focus:border-primary">
                          <option value="">Select {f.label}</option>
                          {f.options?.map((o) => <option key={o}>{o}</option>)}
                        </select>
                        <ChevronDown size={13} className="absolute right-3 top-3.5 text-muted-foreground pointer-events-none" />
                      </div>
                    ) : (
                      <input
                        type={f.type}
                        placeholder={f.placeholder}
                        className="w-full h-11 px-3 rounded-xl border border-border bg-muted text-sm focus:outline-none focus:border-primary placeholder:text-muted-foreground"
                      />
                    )}
                  </div>
                ))}

                <div>
                  <label className="block text-sm font-semibold mb-1.5 text-foreground">Color</label>
                  <div className="flex flex-wrap gap-2.5">
                    {["#111827", "#E63946", "#1D3557", "#f1f5f9", "#c9a96e", "#16a34a", "#0ea5e9"].map((c) => (
                      <button
                        key={c}
                        className="w-8 h-8 rounded-full border-2 border-white ring-1 ring-border hover:ring-2 hover:ring-primary transition-all"
                        style={{ backgroundColor: c }}
                      />
                    ))}
                  </div>
                </div>

                <div className="sm:col-span-2">
                  <label className="block text-sm font-semibold mb-1.5 text-foreground">Condition</label>
                  <div className="flex gap-3">
                    {["New", "Used"].map((c) => (
                      <button
                        key={c}
                        className={`flex-1 h-11 rounded-xl border-2 text-sm font-bold transition-all ${
                          c === "Used" ? "text-white border-transparent" : "border-border text-foreground bg-white hover:border-red-300"
                        }`}
                        style={c === "Used" ? { backgroundColor: RED } : {}}
                      >
                        {c}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Step 3: Photos */}
          {step === 2 && (
            <div>
              <h2 className="text-xl font-bold mb-1" style={{ color: NAVY }}>Upload Photos</h2>
              <p className="text-sm text-muted-foreground mb-6">Add clear photos — listings with photos get 10x more views.</p>

              <div className="border-2 border-dashed border-border rounded-2xl p-10 text-center bg-muted hover:border-primary transition-colors cursor-pointer mb-5 group">
                <div className="w-14 h-14 rounded-2xl bg-white flex items-center justify-center mx-auto mb-3 shadow-sm group-hover:scale-110 transition-transform">
                  <Upload size={24} style={{ color: RED }} />
                </div>
                <p className="font-bold text-foreground mb-1">Drag & drop your photos here</p>
                <p className="text-sm text-muted-foreground mb-4">or click to browse — up to 10 photos, JPG/PNG</p>
                <button
                  className="px-5 py-2 rounded-xl border-2 text-sm font-bold transition-colors hover:text-white"
                  style={{ borderColor: RED, color: RED }}
                  onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = RED)}
                  onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "transparent")}
                >
                  Choose Photos
                </button>
              </div>

              <div className="grid grid-cols-5 gap-3">
                {BIKES.slice(0, 4).map((bike, i) => (
                  <div key={i} className="relative rounded-xl overflow-hidden border border-border aspect-square bg-muted group">
                    <img src={bike.image} alt="" className="w-full h-full object-cover" />
                    {i === 0 && (
                      <div className="absolute bottom-0 left-0 right-0 text-center text-[10px] text-white py-0.5 font-bold" style={{ backgroundColor: RED }}>
                        Cover
                      </div>
                    )}
                    <button className="absolute top-1.5 right-1.5 w-5 h-5 bg-black/70 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <X size={10} className="text-white" />
                    </button>
                  </div>
                ))}
                <div className="rounded-xl border-2 border-dashed border-border aspect-square flex flex-col items-center justify-center cursor-pointer hover:border-primary transition-colors bg-white">
                  <span className="text-2xl text-muted-foreground leading-none">+</span>
                  <span className="text-xs text-muted-foreground mt-1">Add</span>
                </div>
              </div>
              <p className="text-xs text-muted-foreground mt-3">4 of 10 photos uploaded. Drag to reorder.</p>
            </div>
          )}

          {/* Step 4: Price & Location */}
          {step === 3 && (
            <div>
              <h2 className="text-xl font-bold mb-1" style={{ color: NAVY }}>Price & Location</h2>
              <p className="text-sm text-muted-foreground mb-6">Set a fair price and tell buyers where you are.</p>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-semibold mb-1.5 text-foreground">Asking Price (BDT)</label>
                  <div className="relative">
                    <span className="absolute left-4 top-3 text-base font-bold text-muted-foreground">৳</span>
                    <input
                      type="number"
                      defaultValue={195000}
                      className="w-full h-12 pl-9 pr-4 rounded-xl border border-border bg-muted text-base font-bold focus:outline-none focus:border-primary"
                    />
                  </div>
                  <label className="flex items-center gap-2 mt-2.5 text-sm cursor-pointer">
                    <input type="checkbox" className="rounded accent-red-500 w-4 h-4" defaultChecked />
                    <span className="text-muted-foreground">Mark price as negotiable</span>
                  </label>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold mb-1.5 text-foreground">District</label>
                    <div className="relative">
                      <select className="w-full h-11 pl-3 pr-8 rounded-xl border border-border bg-muted text-sm appearance-none focus:outline-none">
                        <option>Dhaka</option>
                        {BD_DISTRICTS.map((d) => <option key={d}>{d}</option>)}
                      </select>
                      <ChevronDown size={13} className="absolute right-3 top-3.5 text-muted-foreground pointer-events-none" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold mb-1.5 text-foreground">Area / Thana</label>
                    <input
                      type="text"
                      placeholder="e.g. Mirpur-10"
                      className="w-full h-11 px-3 rounded-xl border border-border bg-muted text-sm focus:outline-none focus:border-primary placeholder:text-muted-foreground"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-1.5 text-foreground">Description</label>
                  <textarea
                    rows={5}
                    placeholder="Describe your bike — condition, service history, reason for selling, modifications, any known issues..."
                    className="w-full px-4 py-3 rounded-xl border border-border bg-muted text-sm resize-none focus:outline-none focus:border-primary placeholder:text-muted-foreground leading-relaxed"
                  />
                  <p className="text-xs text-muted-foreground mt-1">Minimum 50 characters. Be honest — it builds buyer trust.</p>
                </div>
              </div>
            </div>
          )}

          {/* Step 5: Preview */}
          {step === 4 && (
            <div>
              <h2 className="text-xl font-bold mb-1" style={{ color: NAVY }}>Preview Your Ad</h2>
              <p className="text-sm text-muted-foreground mb-6">{"This is how your listing appears to buyers. Happy with it?"}</p>
              <div className="bg-muted rounded-2xl overflow-hidden border border-border">
                <img
                  src={BIKES[0].image}
                  alt="Preview"
                  className="w-full h-56 object-cover"
                />
                <div className="p-5">
                  <div className="flex items-center justify-between mb-1">
                    <p className="text-2xl font-extrabold" style={{ color: RED }}>৳ 1,95,000</p>
                    <ConditionBadge condition="Used" />
                  </div>
                  <h3 className="font-bold text-foreground text-lg">Yamaha FZS V3 Fi</h3>
                  <div className="flex flex-wrap gap-3 mt-2.5 text-xs text-muted-foreground">
                    <span className="flex items-center gap-1"><MapPin size={11} />Mirpur, Dhaka</span>
                    <span className="flex items-center gap-1"><Calendar size={11} />2023</span>
                    <span>149cc</span>
                    <span>8,500 km</span>
                  </div>
                  <div className="mt-4 pt-4 border-t border-border flex items-center justify-between">
                    <div>
                      <p className="text-xs text-muted-foreground">Posted by</p>
                      <p className="text-sm font-semibold text-foreground flex items-center gap-1">
                        Rahim Motors <BadgeCheck size={13} style={{ color: RED }} />
                      </p>
                    </div>
                    <span className="text-xs text-muted-foreground bg-white px-2.5 py-1 rounded-lg border border-border">
                      Contact: +880 1***** ****5
                    </span>
                  </div>
                </div>
              </div>

              <div className="mt-5 p-4 bg-green-50 rounded-xl border border-green-200 flex items-start gap-3">
                <Check size={16} className="text-green-600 mt-0.5 shrink-0" />
                <p className="text-sm text-green-700">
                  {"Your ad looks great! Hit \"Post Your Ad\" and it'll go live instantly for free."}
                </p>
              </div>
            </div>
          )}
        </div>

        {/* Navigation */}
        <div className="flex gap-3 mt-5">
          {step > 0 && (
            <button
              onClick={() => setStep(step - 1)}
              className="flex items-center justify-center gap-2 px-6 h-12 rounded-xl border border-border bg-white font-bold text-sm hover:bg-muted transition-colors"
              style={{ color: NAVY }}
            >
              <ArrowLeft size={16} /> Back
            </button>
          )}
          {step < STEPS.length - 1 ? (
            <button
              onClick={() => setStep(step + 1)}
              disabled={step === 0 && !category}
              className="flex-1 h-12 rounded-xl font-bold text-white text-sm transition-opacity hover:opacity-90 flex items-center justify-center gap-2 disabled:opacity-40 disabled:cursor-not-allowed"
              style={{ backgroundColor: RED }}
            >
              Continue <ArrowRight size={16} />
            </button>
          ) : (
            <button
              className="flex-1 h-12 rounded-xl font-bold text-white text-sm transition-opacity hover:opacity-90 flex items-center justify-center gap-2"
              style={{ backgroundColor: RED }}
            >
              🚀 Post Your Ad — Free!
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

// ── App ────────────────────────────────────────────────────────────────────────

export default function App() {
  const [page, setPage] = useState<Page>("home");

  return (
    <div className="min-h-screen bg-background">
      <Navbar setPage={setPage} />
      {page === "home" && <HomePage setPage={setPage} />}
      {page === "browse" && <BrowsePage setPage={setPage} />}
      {page === "detail" && <DetailPage setPage={setPage} />}
      {page === "post" && <PostAdPage setPage={setPage} />}
    </div>
  );
}
