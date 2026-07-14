import { useEffect, useState } from 'react'

const slides = [
  {
    title: 'Craft premium digital experiences',
    text: 'We design modern interfaces that feel polished, fast, and memorable.',
    badge: 'Creative Direction',
  },
  {
    title: 'Scale with reliable web solutions',
    text: 'From landing pages to full product experiences, our stack is ready to grow.',
    badge: 'Product Engineering',
  },
  {
    title: 'Move from idea to launch quickly',
    text: 'A strong frontend foundation helps you iterate with confidence and speed.',
    badge: 'Launch Ready',
  },
]

const services = [
  {
    title: 'UI/UX Design',
    description: 'Thoughtful interfaces with clarity, structure, and lasting brand impact.',
  },
  {
    title: 'Frontend Development',
    description: 'High-performance React experiences with responsive layouts and smooth motion.',
  },
  {
    title: 'Product Strategy',
    description: 'Roadmaps, messaging, and user flows that turn ideas into meaningful products.',
  },
]

const testimonials = [
  {
    quote: 'Their attention to detail and visual polish completely elevated our launch.',
    name: 'Alicia Moore',
    role: 'Founder, North Studio',
  },
  {
    quote: 'The final experience felt premium, fast, and effortless to use from day one.',
    name: 'Daniel Brooks',
    role: 'Product Lead, Bright Labs',
  },
]

function Home() {
  const [activeSlide, setActiveSlide] = useState(0)

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveSlide((current) => (current + 1) % slides.length)
    }, 4000)

    return () => window.clearInterval(timer)
  }, [])

  return (
    <section className="space-y-8">
      <div className="hero relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-indigo-700 via-fuchsia-600 to-cyan-500 p-8 text-primary-content shadow-2xl sm:p-12">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.25),transparent_35%)]" />
        <div className="relative z-10 grid gap-8 lg:grid-cols-[1.15fr_0.85fr]">
          <div className="animate-fade-up max-w-2xl">
            <p className="mb-3 text-sm uppercase tracking-[0.35em]">Modern design system</p>
            <h1 className="text-4xl font-bold leading-tight sm:text-5xl">
              Turn ideas into polished digital experiences.
            </h1>
            <p className="mt-4 text-lg opacity-90">
              We build elegant frontends with thoughtful motion, bold visuals, and a clear path from
              concept to launch.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href="#services" className="btn btn-accent">
                Explore Services
              </a>
              <a href="#about" className="btn btn-outline btn-secondary text-white">
                Learn More
              </a>
            </div>
          </div>

          <div className="rounded-[1.5rem] bg-base-100/90 p-5 text-base-content shadow-xl backdrop-blur">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.3em] text-primary">Featured</p>
                <h2 className="text-xl font-semibold">What we are building</h2>
              </div>
              <span className="badge badge-primary">Live</span>
            </div>

            <div className="mt-4 h-48 overflow-hidden rounded-2xl bg-base-200">
              <div
                className="flex h-full transition-transform duration-700"
                style={{ transform: `translateX(-${activeSlide * 100}%)` }}
              >
                {slides.map((slide) => (
                  <div key={slide.title} className="flex h-full min-w-full flex-col justify-between p-6">
                    <div>
                      <p className="text-sm font-semibold uppercase tracking-[0.3em] text-primary">
                        {slide.badge}
                      </p>
                      <h3 className="mt-3 text-2xl font-semibold">{slide.title}</h3>
                      <p className="mt-2 text-sm opacity-80">{slide.text}</p>
                    </div>
                    <div className="h-2 w-16 rounded-full bg-gradient-to-r from-primary to-secondary" />
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-4 flex justify-center gap-2">
              {slides.map((slide, index) => (
                <button
                  key={slide.title}
                  className={`h-2.5 rounded-full transition-all ${index === activeSlide ? 'w-8 bg-primary' : 'w-2.5 bg-base-300'}`}
                  onClick={() => setActiveSlide(index)}
                  aria-label={`Show slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      <div id="about" className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="card overflow-hidden bg-base-100 shadow-xl">
          <div className="card-body">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-primary">About Our Company</p>
            <h2 className="card-title text-2xl">We help ambitious brands grow with thoughtful digital experiences.</h2>
            <p className="mt-3 text-base-content/80">
              Daisy Palace is a digital studio focused on modern websites, polished product experiences,
              and strategic design that turns attention into trust.
            </p>
            <div className="mt-5 grid gap-3 sm:grid-cols-3">
              <div className="rounded-2xl bg-base-200 p-3">
                <p className="text-2xl font-bold text-primary">10+</p>
                <p className="text-sm text-base-content/70">Years of experience</p>
              </div>
              <div className="rounded-2xl bg-base-200 p-3">
                <p className="text-2xl font-bold text-primary">100%</p>
                <p className="text-sm text-base-content/70">Client focused</p>
              </div>
              <div className="rounded-2xl bg-base-200 p-3">
                <p className="text-2xl font-bold text-primary">24/7</p>
                <p className="text-sm text-base-content/70">Support mindset</p>
              </div>
            </div>
          </div>
        </div>

        <div className="card overflow-hidden bg-gradient-to-br from-base-100 to-base-200 shadow-xl">
          <div className="card-body p-0">
            <img
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=900&q=80"
              alt="Team collaborating on a design project"
              className="h-56 w-full object-cover"
            />
            <div className="p-6">
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary text-lg text-primary-content">
                  ✦
                </div>
                <div>
                  <h3 className="font-semibold">Why clients choose us</h3>
                  <p className="text-sm text-base-content/70">Clarity, consistency, and modern execution in every project.</p>
                </div>
              </div>
              <ul className="mt-5 space-y-3 text-base-content/80">
                <li>• Strategic design that reflects your brand personality</li>
                <li>• Clean development that scales with your growth</li>
                <li>• A partnership approach built around long-term value</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div id="services" className="grid gap-6 md:grid-cols-3">
        {services.map((service) => (
          <div key={service.title} className="card bg-base-100 shadow-lg transition-transform duration-300 hover:-translate-y-1">
            <div className="card-body">
              <h3 className="card-title">{service.title}</h3>
              <p className="text-base-content/80">{service.description}</p>
            </div>
          </div>
        ))}
      </div>

      <div id="what-we-do" className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="card bg-base-100 shadow-xl">
          <div className="card-body">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-primary">What We Do</p>
            <h2 className="card-title text-2xl">We focus on clarity, usability, and growth</h2>
            <ul className="mt-4 space-y-3 text-base-content/80">
              <li>• Build fast, responsive, and visually consistent interfaces</li>
              <li>• Add thoughtful animation and interaction details</li>
              <li>• Prepare your product for future backend and database integration</li>
            </ul>
          </div>
        </div>

        <div className="card bg-gradient-to-br from-primary/10 to-secondary/10 shadow-xl">
          <div className="card-body">
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-base-300 bg-base-100/70 p-4">
                <p className="text-3xl font-bold text-primary">01</p>
                <p className="mt-2 font-semibold">Strategy</p>
              </div>
              <div className="rounded-2xl border border-base-300 bg-base-100/70 p-4">
                <p className="text-3xl font-bold text-primary">02</p>
                <p className="mt-2 font-semibold">Design</p>
              </div>
              <div className="rounded-2xl border border-base-300 bg-base-100/70 p-4">
                <p className="text-3xl font-bold text-primary">03</p>
                <p className="mt-2 font-semibold">Build</p>
              </div>
              <div className="rounded-2xl border border-base-300 bg-base-100/70 p-4">
                <p className="text-3xl font-bold text-primary">04</p>
                <p className="mt-2 font-semibold">Launch</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="card bg-base-100 shadow-xl">
        <div className="card-body">
          <div className="flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-primary">Testimonials</p>
              <h2 className="text-2xl font-semibold">Loved by teams building bold digital products</h2>
            </div>
            <p className="text-sm text-base-content/70">Real feedback from founders and product leaders.</p>
          </div>

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {testimonials.map((item) => (
              <div key={item.name} className="rounded-2xl border border-base-300 bg-base-200/70 p-5">
                <p className="text-lg italic text-base-content/80">“{item.quote}”</p>
                <div className="mt-4">
                  <p className="font-semibold">{item.name}</p>
                  <p className="text-sm text-base-content/70">{item.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <footer id="contact" className="rounded-[2rem] border border-base-300 bg-base-100/90 p-8 shadow-xl">
        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-primary">Ready to begin</p>
            <h2 className="mt-2 text-2xl font-semibold">Let’s build a website that feels as strong as your brand.</h2>
            <p className="mt-3 max-w-2xl text-base-content/70">
              From strategy and design to frontend development, we help companies create experiences that are
              beautiful, modern, and built for growth.
            </p>
          </div>

          <div className="rounded-2xl bg-base-200 p-5">
            <h3 className="font-semibold">Company info</h3>
            <ul className="mt-3 space-y-2 text-sm text-base-content/70">
              <li>• Based in modern digital markets</li>
              <li>• Specializing in web design and frontend development</li>
              <li>• Trusted by brands that want clarity and impact</li>
            </ul>
            <div className="mt-4 flex flex-wrap gap-3">
              <a href="#" className="btn btn-primary btn-sm">
                Contact Us
              </a>
              <a href="#" className="btn btn-outline btn-sm">
                View Portfolio
              </a>
            </div>
          </div>
        </div>
      </footer>
    </section>
  )
}

export default Home
