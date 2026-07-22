export const hotelInfo = {
  name: "HKS Hotel",
  tagline: "Where Luxury Meets Timeless Elegance",
  description:
    "Experience unparalleled luxury at HKS Hotel, a five-star sanctuary in the heart of the city. From world-class dining to rejuvenating spa treatments, every detail is crafted for your comfort.",
  address: "128 Grand Boulevard, Luxury District, New York, NY 10001",
  phone: "+1 (212) 555-0199",
  email: "reservations@hks-hotel.com",
  hours: "Front Desk: 24/7 | Concierge: 6:00 AM – 11:00 PM",
  rating: 5,
  awards: ["Forbes Five Star", "Travel + Leisure World's Best", "AAA Five Diamond"],
  social: {
    instagram: "https://instagram.com",
    facebook: "https://facebook.com",
    twitter: "https://twitter.com",
  },
};

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/rooms", label: "Rooms & Suites" },
  { href: "/dining", label: "Dining" },
  { href: "/spa", label: "Spa & Wellness" },
  { href: "/events", label: "Events" },
  { href: "/gallery", label: "Gallery" },
  { href: "/contact", label: "Contact" },
];

export const rooms = [
  {
    id: "presidential-suite",
    name: "Presidential Suite",
    description:
      "Our most exclusive accommodation featuring panoramic city views, a private terrace, butler service, and a marble bathroom with soaking tub.",
    price: 1250,
    size: "180 m²",
    bed: "King Bed + Living Room",
    guests: 4,
    image: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=800&q=80",
    amenities: ["Butler Service", "Private Terrace", "Jacuzzi", "Mini Bar", "Smart TV", "City View"],
    featured: true,
  },
  {
    id: "executive-suite",
    name: "Executive Suite",
    description:
      "Sophisticated space designed for discerning travelers with separate living area, premium linens, and exclusive lounge access.",
    price: 650,
    size: "85 m²",
    bed: "King Bed",
    guests: 2,
    image: "https://images.unsplash.com/photo-1590490360182-c33d57733427?w=800&q=80",
    amenities: ["Lounge Access", "Work Desk", "Rain Shower", "Nespresso", "Smart TV"],
    featured: true,
  },
  {
    id: "deluxe-room",
    name: "Deluxe Room",
    description:
      "Elegant comfort with plush furnishings, marble bathroom, and stunning views of the city skyline.",
    price: 380,
    size: "45 m²",
    bed: "King or Twin",
    guests: 2,
    image: "https://images.unsplash.com/photo-1611892440504-42a784e0158d?w=800&q=80",
    amenities: ["City View", "Rain Shower", "Mini Bar", "Smart TV", "Safe"],
    featured: true,
  },
  {
    id: "premium-room",
    name: "Premium Room",
    description:
      "Refined accommodation with contemporary design, premium amenities, and peaceful ambiance.",
    price: 290,
    size: "38 m²",
    bed: "Queen Bed",
    guests: 2,
    image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800&q=80",
    amenities: ["Garden View", "Work Desk", "Mini Bar", "Smart TV"],
    featured: false,
  },
  {
    id: "family-suite",
    name: "Family Suite",
    description:
      "Spacious two-bedroom suite perfect for families, with connecting rooms and kid-friendly amenities.",
    price: 520,
    size: "95 m²",
    bed: "2 King Beds",
    guests: 5,
    image: "https://images.unsplash.com/photo-1566665797739-1674de7a421a?w=800&q=80",
    amenities: ["2 Bedrooms", "Kids Amenities", "Kitchenette", "Smart TV", "Bathtub"],
    featured: false,
  },
  {
    id: "penthouse",
    name: "Skyline Penthouse",
    description:
      "The ultimate luxury experience atop the hotel with 360° views, private pool, and dedicated concierge.",
    price: 2500,
    size: "250 m²",
    bed: "Master Suite + 2 Rooms",
    guests: 6,
    image: "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?w=800&q=80",
    amenities: ["Private Pool", "360° Views", "Private Chef", "Helipad Access", "Cinema Room"],
    featured: false,
  },
];

export const services = [
  {
    icon: "concierge",
    title: "24/7 Concierge",
    description: "Personal assistance for reservations, tickets, and local recommendations anytime.",
  },
  {
    icon: "car",
    title: "Valet Parking",
    description: "Complimentary valet service with secure underground parking for all guests.",
  },
  {
    icon: "plane",
    title: "Airport Transfer",
    description: "Luxury chauffeur service to and from the airport in premium vehicles.",
  },
  {
    icon: "bell",
    title: "Butler Service",
    description: "Dedicated butler for suite guests — unpacking, pressing, and personalized care.",
  },
  {
    icon: "shirt",
    title: "Laundry & Dry Cleaning",
    description: "Same-day laundry and dry cleaning with premium garment care.",
  },
  {
    icon: "wifi",
    title: "High-Speed Wi-Fi",
    description: "Complimentary fiber-optic internet throughout the hotel and in all rooms.",
  },
  {
    icon: "baby",
    title: "Kids Club",
    description: "Supervised activities and entertainment for children aged 4–12.",
  },
  {
    icon: "briefcase",
    title: "Business Center",
    description: "Fully equipped workspace with meeting rooms, printing, and secretarial services.",
  },
];

export const amenities = [
  { icon: "waves", title: "Infinity Pool", description: "Rooftop heated pool with skyline views" },
  { icon: "dumbbell", title: "Fitness Center", description: "State-of-the-art gym open 24/7" },
  { icon: "coffee", title: "Executive Lounge", description: "Complimentary breakfast and evening cocktails" },
  { icon: "shield", title: "Security", description: "24-hour surveillance and in-room safes" },
];

export const diningVenues = [
  {
    id: "grand-restaurant",
    name: "The Grand Restaurant",
    type: "Fine Dining",
    cuisine: "Contemporary French",
    hours: "6:30 PM – 11:00 PM",
    description:
      "Michelin-inspired cuisine crafted by our executive chef using the finest seasonal ingredients.",
    image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=80",
    highlights: ["Tasting Menu", "Wine Pairing", "Private Dining Room"],
  },
  {
    id: "skyline-bar",
    name: "Skyline Bar",
    type: "Rooftop Bar",
    cuisine: "Cocktails & Tapas",
    hours: "5:00 PM – 1:00 AM",
    description:
      "Sip artisan cocktails while enjoying breathtaking panoramic views of the city at sunset.",
    image: "https://images.unsplash.com/photo-1470337458703-46ad1756a187?w=800&q=80",
    highlights: ["Craft Cocktails", "Live Jazz", "Sunset Views"],
  },
  {
    id: "garden-cafe",
    name: "Garden Café",
    type: "All-Day Dining",
    cuisine: "International",
    hours: "6:00 AM – 10:00 PM",
    description:
      "Relaxed elegance for breakfast, lunch, and dinner with indoor and terrace seating.",
    image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800&q=80",
    highlights: ["Breakfast Buffet", "Afternoon Tea", "Garden Terrace"],
  },
  {
    id: "room-service",
    name: "In-Room Dining",
    type: "24/7 Service",
    cuisine: "Full Menu",
    hours: "24 Hours",
    description:
      "Gourmet meals delivered to your room any time of day or night by our dedicated team.",
    image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800&q=80",
    highlights: ["24/7 Menu", "Champagne Service", "Private Balcony Setup"],
  },
];

export const spaTreatments = [
  {
    name: "Signature HKS Massage",
    duration: "90 min",
    price: 220,
    description: "A bespoke full-body massage using warm oils and ancient healing techniques.",
    image: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=800&q=80",
  },
  {
    name: "Gold Radiance Facial",
    duration: "75 min",
    price: 195,
    description: "Luxurious facial with 24-karat gold infusion for luminous, youthful skin.",
    image: "https://images.unsplash.com/photo-1570172619644-dfd019ed1284?w=800&q=80",
  },
  {
    name: "Couples Retreat",
    duration: "120 min",
    price: 450,
    description: "Side-by-side massage and private spa suite with champagne and chocolates.",
    image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=800&q=80",
  },
  {
    name: "Hammam Ritual",
    duration: "60 min",
    price: 160,
    description: "Traditional steam bath, body scrub, and foam massage in our Turkish hammam.",
    image: "https://images.unsplash.com/photo-1515377905703-c4788e51af15?w=800&q=80",
  },
];

export const spaFacilities = [
  { title: "Indoor Pool", description: "Heated pool with hydrotherapy jets" },
  { title: "Sauna & Steam", description: "Finnish sauna and aromatic steam rooms" },
  { title: "Fitness Studio", description: "Yoga, Pilates, and personal training" },
  { title: "Relaxation Lounge", description: "Herbal teas and tranquil resting area" },
];

export const eventSpaces = [
  {
    name: "Grand Ballroom",
    capacity: "500 guests",
    size: "800 m²",
    description: "Magnificent ballroom with crystal chandeliers for weddings and galas.",
    image: "https://images.unsplash.com/photo-1519167758481-83f29da79877?w=800&q=80",
    features: ["Stage", "Dance Floor", "Premium AV", "Bridal Suite"],
  },
  {
    name: "Executive Boardroom",
    capacity: "20 guests",
    size: "60 m²",
    description: "Private boardroom with video conferencing and catering services.",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80",
    features: ["Video Conferencing", "Smart Screen", "Catering", "Secretary Service"],
  },
  {
    name: "Garden Pavilion",
    capacity: "150 guests",
    size: "300 m²",
    description: "Open-air venue surrounded by lush gardens for ceremonies and receptions.",
    image: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=800&q=80",
    features: ["Outdoor Setting", "Floral Decor", "Lighting Design", "Live Music"],
  },
  {
    name: "Sky Lounge",
    capacity: "80 guests",
    size: "150 m²",
    description: "Intimate rooftop space for cocktail receptions and corporate events.",
    image: "https://images.unsplash.com/photo-1511578314322-379afb476865?w=800&q=80",
    features: ["City Views", "Bar Service", "Flexible Layout", "Sunset Timing"],
  },
];

export const galleryImages = [
  { src: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600&q=80", alt: "Hotel exterior at night" },
  { src: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=600&q=80", alt: "Luxury suite bedroom" },
  { src: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&q=80", alt: "Fine dining restaurant" },
  { src: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=600&q=80", alt: "Spa treatment room" },
  { src: "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?w=600&q=80", alt: "Penthouse living area" },
  { src: "https://images.unsplash.com/photo-1470337458703-46ad1756a187?w=600&q=80", alt: "Rooftop bar cocktails" },
  { src: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=600&q=80", alt: "Infinity pool" },
  { src: "https://images.unsplash.com/photo-1519167758481-83f29da79877?w=600&q=80", alt: "Grand ballroom" },
  { src: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=600&q=80", alt: "Garden café terrace" },
  { src: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=600&q=80", alt: "Premium hotel room" },
  { src: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=600&q=80", alt: "Spa relaxation area" },
  { src: "https://images.unsplash.com/photo-1566665797739-1674de7a421a?w=600&q=80", alt: "Family suite" },
];

export const testimonials = [
  {
    name: "Sarah Mitchell",
    role: "Business Traveler",
    quote:
      "HKS Hotel exceeded every expectation. The butler service in the Presidential Suite was impeccable, and the skyline views were breathtaking.",
    rating: 5,
  },
  {
    name: "James & Emily Chen",
    role: "Honeymoon Couple",
    quote:
      "We chose HKS for our honeymoon and it was magical. The spa couples retreat and rooftop bar made our stay unforgettable.",
    rating: 5,
  },
  {
    name: "Robert Williams",
    role: "Event Organizer",
    quote:
      "Hosted our company's annual gala in the Grand Ballroom. The event team handled every detail flawlessly. Truly world-class.",
    rating: 5,
  },
];

export const roomTypeOptions = rooms.map((room) => ({
  value: room.id,
  label: `${room.name} — $${room.price}/night`,
}));
