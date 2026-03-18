import { useState, useEffect, useRef } from "react";

// ─── Brand Colors ────────────────────────────────────────────────────────────
// Primary Blue:  #00AEEF
// Dark Navy:     #0d1b2e
// Pink Accent:   #EC1D8D
// White:         #FFFFFF

// ─── SVG Icons ───────────────────────────────────────────────────────────────
const IconBroom = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 21l5-5m0 0l7-7m-7 7 1.5-1.5M13 9l2-2 3 3-2 2m-3-3l-5 5"/>
    <circle cx="18" cy="5" r="2.5" fill="currentColor" opacity="0.4"/>
  </svg>
);
const IconShield = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
    <path d="M9 12l2 2 4-4"/>
  </svg>
);
const IconHome = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/>
    <polyline points="9,22 9,12 15,12 15,22"/>
  </svg>
);
const IconBuilding = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="3" width="18" height="18" rx="1"/>
    <path d="M3 9h18M9 21V9m6 0v12"/>
  </svg>
);
const IconStar = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
  </svg>
);
const IconPin = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/>
    <circle cx="12" cy="10" r="3"/>
  </svg>
);
const IconPhone = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81 19.79 19.79 0 01.15 1.19 2 2 0 012.11 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/>
  </svg>
);
const IconMail = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
    <polyline points="22,6 12,13 2,6"/>
  </svg>
);
const IconWhatsapp = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
);
const IconChevronLeft = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="15 18 9 12 15 6"/>
  </svg>
);
const IconChevronRight = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="9 18 15 12 9 6"/>
  </svg>
);
const IconMenu = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/>
  </svg>
);
const IconX = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
  </svg>
);
const IconCheck = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="20 6 9 17 4 12"/>
  </svg>
);
const IconSparkle = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2l2.4 7.4H22l-6.2 4.5 2.4 7.4L12 17l-6.2 4.3 2.4-7.4L2 9.4h7.6L12 2z"/>
  </svg>
);

// ─── Osides Dot Logo Mark ─────────────────────────────────────────────────────
const OsidesLogoMark = ({ className }) => (
  <svg className={className} viewBox="0 0 60 50" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="30" cy="10" r="8" fill="#00AEEF"/>
    <circle cx="17" cy="19" r="6" fill="#00AEEF"/>
    <circle cx="43" cy="19" r="5" fill="#00AEEF"/>
    <circle cx="9"  cy="30" r="4" fill="#00AEEF"/>
    <circle cx="51" cy="29" r="3.5" fill="#00AEEF"/>
    <circle cx="24" cy="32" r="3" fill="#00AEEF"/>
    <circle cx="38" cy="33" r="4" fill="#00AEEF"/>
    <circle cx="17" cy="42" r="2.5" fill="#EC1D8D"/>
    <circle cx="42" cy="44" r="2.5" fill="#EC1D8D"/>
    <circle cx="30" cy="46" r="2" fill="#EC1D8D"/>
  </svg>
);

// ─── Carousel Images ──────────────────────────────────────────────────────────
// Images from Unsplash (free to use). Replace src with your own photos when ready.
const carouselSlides = [
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&h=420&fit=crop&auto=format",
    caption: "Professional Deep Cleaning",
    sub: "Homes cleaned top to bottom — every room, every corner",
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?w=1200&h=420&fit=crop&auto=format",
    caption: "Office & Commercial Cleaning",
    sub: "Spotless workspaces that keep your team productive",
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1584820927498-cfe5211fd8bf?w=1200&h=420&fit=crop&auto=format",
    caption: "Security Services",
    sub: "24/7 trained guards for homes, businesses & events",
  },
  {
    id: 4,
    src: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=1200&h=420&fit=crop&auto=format",
    caption: "Post-Construction Cleanup",
    sub: "Dust, debris & chemical removal after every build",
  },
  {
    id: 5,
    src: "https://images.unsplash.com/photo-1563453392212-326f5e854473?w=1200&h=420&fit=crop&auto=format",
    caption: "Floor Polishing & Restoration",
    sub: "Marble, tile & hardwood brought back to a brilliant shine",
  },
];

// ─── Thumbnail Strip Component ───────────────────────────────────────────────
function ThumbStrip() {
  const [active, setActive] = useState(0);
  return (
    <div className="mt-5 grid grid-cols-5 gap-3">
      {carouselSlides.map((slide, i) => (
        <div
          key={slide.id}
          onClick={() => setActive(i)}
          className={`relative h-16 rounded-xl overflow-hidden cursor-pointer border-2 transition-all duration-200 ${
            active === i ? "border-[#EC1D8D] scale-105 shadow-lg" : "border-transparent opacity-55 hover:opacity-90 hover:scale-102"
          }`}
        >
          <img src={slide.src} alt={slide.caption} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/20" />
        </div>
      ))}
    </div>
  );
}

// ─── Carousel Component ───────────────────────────────────────────────────────
function Carousel() {
  const [current, setCurrent] = useState(0);
  const [prev, setPrev] = useState(null);
  const [direction, setDirection] = useState("right");
  const [sliding, setSliding] = useState(false);
  const timerRef = useRef(null);

  const goTo = (idx, dir = "right") => {
    if (sliding) return;
    const next = (idx + carouselSlides.length) % carouselSlides.length;
    if (next === current) return;
    setDirection(dir);
    setPrev(current);
    setSliding(true);
    setCurrent(next);
    setTimeout(() => { setSliding(false); setPrev(null); }, 600);
  };

  useEffect(() => {
    timerRef.current = setInterval(() => goTo(current + 1, "right"), 5000);
    return () => clearInterval(timerRef.current);
  }, [current, sliding]);

  const slide = carouselSlides[current];
  const prevSlide = prev !== null ? carouselSlides[prev] : null;

  return (
    <div className="relative w-full overflow-hidden rounded-2xl shadow-2xl" style={{ height: "460px" }}>

      {/* Previous slide (sliding out) */}
      {prevSlide && sliding && (
        <div
          className="absolute inset-0 z-10"
          style={{
            animation: `slideOut${direction === "right" ? "Left" : "Right"} 0.6s cubic-bezier(0.4,0,0.2,1) forwards`,
          }}
        >
          <img src={prevSlide.src} alt={prevSlide.caption} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
        </div>
      )}

      {/* Current slide (sliding in) */}
      <div
        className="absolute inset-0 z-20"
        style={{
          animation: sliding
            ? `slideIn${direction === "right" ? "Right" : "Left"} 0.6s cubic-bezier(0.4,0,0.2,1) forwards`
            : "none",
        }}
      >
        <img
          src={slide.src}
          alt={slide.caption}
          className="w-full h-full object-cover"
          loading="lazy"
        />
        {/* Dark gradient overlay for text legibility */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />

        {/* Caption */}
        <div className="absolute bottom-0 left-0 right-0 px-8 pb-16 z-10">
          <div className="inline-flex items-center gap-2 bg-[#EC1D8D] px-3 py-1 rounded-full mb-3">
            <span className="text-white text-xs font-black tracking-widest uppercase">Osides Solutions</span>
          </div>
          <h3 className="text-white text-2xl md:text-3xl font-black leading-tight mb-1">{slide.caption}</h3>
          <p className="text-white/70 text-sm font-medium">{slide.sub}</p>
        </div>
      </div>

      {/* Arrows */}
      <button
        onClick={() => goTo(current - 1, "left")}
        className="absolute left-4 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white/15 hover:bg-white/35 backdrop-blur-md border border-white/25 flex items-center justify-center text-white transition-all z-30 hover:scale-105"
      >
        <IconChevronLeft className="w-5 h-5" />
      </button>
      <button
        onClick={() => goTo(current + 1, "right")}
        className="absolute right-4 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white/15 hover:bg-white/35 backdrop-blur-md border border-white/25 flex items-center justify-center text-white transition-all z-30 hover:scale-105"
      >
        <IconChevronRight className="w-5 h-5" />
      </button>

      {/* Dot navigation */}
      <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex gap-2 z-30">
        {carouselSlides.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i, i > current ? "right" : "left")}
            className={`rounded-full transition-all duration-300 ${
              i === current ? "w-7 h-2.5 bg-white" : "w-2.5 h-2.5 bg-white/40 hover:bg-white/70"
            }`}
          />
        ))}
      </div>

      {/* Slide counter pill */}
      <div className="absolute top-4 right-4 bg-black/40 backdrop-blur-sm text-white text-xs font-bold px-3 py-1.5 rounded-full z-30 border border-white/10">
        {current + 1} / {carouselSlides.length}
      </div>

      {/* CSS keyframes for slide animations */}
      <style>{`
        @keyframes slideInRight {
          from { transform: translateX(100%); }
          to   { transform: translateX(0); }
        }
        @keyframes slideInLeft {
          from { transform: translateX(-100%); }
          to   { transform: translateX(0); }
        }
        @keyframes slideOutLeft {
          from { transform: translateX(0); }
          to   { transform: translateX(-100%); }
        }
        @keyframes slideOutRight {
          from { transform: translateX(0); }
          to   { transform: translateX(100%); }
        }
      `}</style>
    </div>
  );
}

// ─── Stat Card ────────────────────────────────────────────────────────────────
function StatCard({ number, label, accent }) {
  return (
    <div className="flex flex-col items-center py-6 px-4">
      <span className={`text-4xl font-black ${accent}`}>{number}</span>
      <span className="text-sm text-slate-500 font-semibold mt-1 text-center">{label}</span>
    </div>
  );
}

// ─── Service Card ─────────────────────────────────────────────────────────────
function ServiceCard({ icon: Icon, title, items, accentColor, bgColor, borderColor }) {
  return (
    <div className={`rounded-2xl ${bgColor} border ${borderColor} p-7 flex flex-col gap-5 hover:shadow-xl transition-shadow duration-300`}>
      <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${accentColor}`}>
        <Icon className="w-6 h-6" />
      </div>
      <h3 className="text-xl font-black text-[#0d1b2e] tracking-tight">{title}</h3>
      <ul className="flex flex-col gap-3">
        {items.map((item, i) => (
          <li key={i} className="flex items-start gap-3 text-sm text-slate-600 font-medium">
            <span className={`mt-0.5 w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 ${accentColor}`}>
              <IconCheck className="w-3 h-3" />
            </span>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

// ─── Price Row ────────────────────────────────────────────────────────────────
function PriceRow({ label, price, highlight }) {
  return (
    <div className={`flex items-center justify-between px-5 py-4 rounded-xl transition-colors ${highlight ? "bg-[#EC1D8D]/10 border border-[#EC1D8D]/30" : "bg-slate-50 hover:bg-[#00AEEF]/5 border border-transparent"}`}>
      <div className="flex items-center gap-3">
        <IconHome className="w-4 h-4 text-[#00AEEF]" />
        <span className="text-sm font-bold text-slate-700">{label}</span>
      </div>
      <span className={`text-2xl font-black ${highlight ? "text-[#EC1D8D]" : "text-[#0077C8]"}`}>{price}</span>
    </div>
  );
}

// ─── Testimonial Card ─────────────────────────────────────────────────────────
function TestimonialCard({ name, role, text, rating }) {
  return (
    <div className="bg-white rounded-2xl border border-slate-100 p-6 shadow-sm hover:shadow-md transition-shadow flex flex-col gap-4">
      <div className="flex gap-1">
        {[...Array(rating)].map((_, i) => (
          <IconStar key={i} className="w-4 h-4 text-[#EC1D8D]" />
        ))}
      </div>
      <p className="text-slate-600 text-sm leading-relaxed italic">"{text}"</p>
      <div className="flex items-center gap-3 mt-auto pt-2 border-t border-slate-100">
        <div className="w-9 h-9 rounded-full bg-gradient-to-br from-[#00AEEF] to-[#0077C8] flex items-center justify-center text-white font-black text-sm">
          {name[0]}
        </div>
        <div>
          <p className="text-sm font-bold text-[#0d1b2e]">{name}</p>
          <p className="text-xs text-slate-400 font-medium">{role}</p>
        </div>
      </div>
    </div>
  );
}

// ─── Nav Link ─────────────────────────────────────────────────────────────────
function NavLink({ label, href, onClick }) {
  return (
    <a
      href={href}
      onClick={onClick}
      className="text-slate-600 hover:text-[#00AEEF] font-semibold text-sm transition-colors tracking-wide"
    >
      {label}
    </a>
  );
}

// ─── Main App ─────────────────────────────────────────────────────────────────
export default function OsidesWebsite() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  const navLinks = [
    { label: "Home", id: "hero" },
    { label: "About", id: "about" },
    { label: "Services", id: "services" },
    { label: "Gallery", id: "gallery" },
    { label: "Pricing", id: "pricing" },
    { label: "Contact", id: "contact" },
  ];

  return (
    <div className="font-sans bg-white text-[#0d1b2e] overflow-x-hidden">

      {/* ── NAVBAR ─────────────────────────────────────────────────────────── */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-100" : "bg-transparent"}`}>
        <div className="max-w-6xl mx-auto px-5 py-4 flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <OsidesLogoMark className="w-10 h-8" />
            <div>
              <p className="font-black text-base tracking-widest text-[#0d1b2e] leading-none uppercase">Osides Solutions</p>
              <p className="text-[10px] text-[#00AEEF] font-bold tracking-widest uppercase leading-none mt-0.5">Making your places better</p>
            </div>
          </div>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-7">
            {navLinks.map((l) => (
              <NavLink key={l.id} label={l.label} href={`#${l.id}`} onClick={(e) => { e.preventDefault(); scrollTo(l.id); }} />
            ))}
            <button
              onClick={() => scrollTo("contact")}
              className="bg-[#EC1D8D] hover:bg-[#c4006e] text-white text-sm font-bold px-5 py-2.5 rounded-full transition-colors shadow-sm"
            >
              Get a Quote
            </button>
          </div>

          {/* Mobile burger */}
          <button className="md:hidden p-2 text-[#0d1b2e]" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <IconX className="w-6 h-6" /> : <IconMenu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="md:hidden bg-white border-t border-slate-100 px-5 py-5 flex flex-col gap-4 shadow-lg">
            {navLinks.map((l) => (
              <NavLink key={l.id} label={l.label} href={`#${l.id}`} onClick={(e) => { e.preventDefault(); scrollTo(l.id); }} />
            ))}
            <button
              onClick={() => scrollTo("contact")}
              className="bg-[#EC1D8D] text-white text-sm font-bold px-5 py-3 rounded-full mt-2 w-full"
            >
              Get a Quote
            </button>
          </div>
        )}
      </nav>

      {/* ── HERO ───────────────────────────────────────────────────────────── */}
      <section id="hero" className="relative min-h-screen flex items-center overflow-hidden bg-[#0d1b2e]">
        {/* Background dots pattern */}
        <div className="absolute inset-0 opacity-5">
          {[...Array(80)].map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full bg-[#00AEEF]"
              style={{
                width: Math.random() * 8 + 3 + "px",
                height: Math.random() * 8 + 3 + "px",
                left: Math.random() * 100 + "%",
                top: Math.random() * 100 + "%",
                opacity: Math.random() * 0.8 + 0.2,
              }}
            />
          ))}
        </div>

        {/* Blue glow */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#00AEEF] opacity-10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-[#EC1D8D] opacity-10 rounded-full blur-3xl" />

        <div className="max-w-6xl mx-auto px-5 pt-28 pb-20 grid md:grid-cols-2 gap-16 items-center relative z-10">
          {/* Left: Text */}
          <div className="flex flex-col gap-6">
            <div className="inline-flex items-center gap-2 bg-[#00AEEF]/10 border border-[#00AEEF]/30 rounded-full px-4 py-2 w-fit">
              <IconSparkle className="w-4 h-4 text-[#00AEEF]" />
              <span className="text-[#00AEEF] text-xs font-bold tracking-widest uppercase">Lusaka's Trusted Partner</span>
            </div>

            <h1 className="text-5xl md:text-6xl font-black text-white leading-[1.05] tracking-tight">
              Making Your<br />
              <span className="text-[#00AEEF]">Places</span>{" "}
              <span className="text-[#EC1D8D]">Better</span>
            </h1>

            <p className="text-slate-300 text-lg leading-relaxed max-w-md">
              Professional cleaning and security services for homes, offices, and commercial spaces across Lusaka. Reliable, affordable, and thorough.
            </p>

            <div className="flex flex-wrap gap-4 mt-2">
              <button
                onClick={() => scrollTo("services")}
                className="bg-[#00AEEF] hover:bg-[#0095cc] text-white font-bold px-7 py-3.5 rounded-full transition-colors shadow-lg shadow-[#00AEEF]/30"
              >
                Our Services
              </button>
              <button
                onClick={() => scrollTo("contact")}
                className="border-2 border-[#EC1D8D] text-[#EC1D8D] hover:bg-[#EC1D8D] hover:text-white font-bold px-7 py-3.5 rounded-full transition-all"
              >
                Get a Quote
              </button>
            </div>

            {/* Trust pills */}
            <div className="flex flex-wrap gap-3 mt-1">
              {["Reliable", "Professional", "Affordable"].map((tag) => (
                <span key={tag} className="flex items-center gap-1.5 text-xs font-bold text-white/70 bg-white/10 px-3 py-1.5 rounded-full border border-white/10">
                  <IconCheck className="w-3 h-3 text-[#00AEEF]" /> {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Right: Hero visual card */}
          <div className="relative hidden md:block">
            <div className="bg-gradient-to-br from-[#0f2540] to-[#1a3a5c] rounded-3xl p-8 border border-[#00AEEF]/20 shadow-2xl">
              <div className="flex items-center gap-3 mb-6">
                <OsidesLogoMark className="w-12 h-10" />
                <div>
                  <p className="text-white font-black text-lg tracking-wide uppercase">Osides Solutions</p>
                  <p className="text-[#00AEEF] text-xs font-bold tracking-widest">Making your places better</p>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-3 mb-6">
                {[
                  { icon: IconBroom, label: "Deep Cleaning", color: "text-[#00AEEF]", bg: "bg-[#00AEEF]/10" },
                  { icon: IconShield, label: "Security", color: "text-[#EC1D8D]", bg: "bg-[#EC1D8D]/10" },
                  { icon: IconBuilding, label: "Commercial", color: "text-[#00AEEF]", bg: "bg-[#00AEEF]/10" },
                  { icon: IconHome, label: "Residential", color: "text-[#EC1D8D]", bg: "bg-[#EC1D8D]/10" },
                ].map(({ icon: Icon, label, color, bg }) => (
                  <div key={label} className={`${bg} rounded-xl p-4 flex flex-col gap-2`}>
                    <Icon className={`w-6 h-6 ${color}`} />
                    <span className="text-white text-sm font-bold">{label}</span>
                  </div>
                ))}
              </div>
              <div className="bg-[#EC1D8D]/10 border border-[#EC1D8D]/30 rounded-xl px-4 py-3 text-center">
                <p className="text-white/60 text-xs font-bold tracking-widest uppercase mb-1">Starting from</p>
                <p className="text-[#EC1D8D] text-3xl font-black">K700</p>
                <p className="text-white/50 text-xs">Deep cleaning • Any size</p>
              </div>
            </div>
            {/* Floating badge */}
            <div className="absolute -bottom-4 -left-4 bg-white rounded-2xl shadow-xl px-5 py-3 flex items-center gap-3 border border-slate-100">
              <div className="flex -space-x-1">
                {["#00AEEF", "#EC1D8D", "#0077C8"].map((c, i) => (
                  <div key={i} className="w-7 h-7 rounded-full border-2 border-white flex items-center justify-center text-white text-xs font-black" style={{ background: c }}>
                    {String.fromCharCode(65 + i)}
                  </div>
                ))}
              </div>
              <div>
                <p className="text-xs font-black text-[#0d1b2e]">Happy clients</p>
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, i) => <IconStar key={i} className="w-3 h-3 text-[#EC1D8D]" />)}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
          <div className="w-6 h-9 rounded-full border-2 border-white/30 flex items-start justify-center pt-1.5">
            <div className="w-1 h-2 rounded-full bg-white/60" />
          </div>
        </div>
      </section>

      {/* ── STATS BAR ──────────────────────────────────────────────────────── */}
      <section className="bg-[#00AEEF] py-2">
        <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 divide-x divide-white/30">
          <StatCard number="500+" label="Happy Clients" accent="text-white" />
          <StatCard number="5+" label="Years Experience" accent="text-white" />
          <StatCard number="24/7" label="Security Cover" accent="text-white" />
          <StatCard number="100%" label="Satisfaction" accent="text-white" />
        </div>
      </section>

      {/* ── ABOUT ──────────────────────────────────────────────────────────── */}
      <section id="about" className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-5 grid md:grid-cols-2 gap-16 items-center">
          {/* Left: Text */}
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-2">
              <div className="h-1 w-8 bg-[#EC1D8D] rounded-full" />
              <span className="text-[#EC1D8D] text-xs font-black tracking-widest uppercase">Who We Are</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-[#0d1b2e] leading-tight tracking-tight">
              Lusaka's Most Trusted Cleaning & Security Company
            </h2>
            <p className="text-slate-500 leading-relaxed">
              Osides Solutions is a Lusaka-based company dedicated to providing exceptional cleaning and security services. We combine trained professionals, proven methods, and genuine care to deliver results that exceed expectations.
            </p>
            <p className="text-slate-500 leading-relaxed">
              Whether you need a one-off deep clean, regular office maintenance, post-construction cleanup, or round-the-clock security for your property — we've got you covered.
            </p>
            <div className="grid grid-cols-2 gap-4 mt-2">
              {[
                "Fully trained professional staff",
                "Eco-friendly cleaning products",
                "Licensed security personnel",
                "Flexible scheduling",
                "Competitive & transparent pricing",
                "Satisfaction guaranteed",
              ].map((item) => (
                <div key={item} className="flex items-start gap-2.5 text-sm text-slate-600 font-medium">
                  <span className="mt-0.5 w-5 h-5 rounded-full bg-[#00AEEF]/10 flex items-center justify-center flex-shrink-0">
                    <IconCheck className="w-3 h-3 text-[#00AEEF]" />
                  </span>
                  {item}
                </div>
              ))}
            </div>
          </div>

          {/* Right: Visual */}
          <div className="flex flex-col gap-4">
            <div className="bg-gradient-to-br from-[#0d1b2e] to-[#0a2a50] rounded-3xl p-8 text-white">
              <OsidesLogoMark className="w-16 h-14 mb-5" />
              <blockquote className="text-lg font-light leading-relaxed italic text-white/80 mb-6 border-l-4 border-[#EC1D8D] pl-5">
                "Our mission is simple: to make every space we touch cleaner, safer, and more comfortable for the people who use it."
              </blockquote>
              <p className="text-[#00AEEF] font-bold text-sm tracking-widest uppercase">— Osides Solutions Team</p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-[#EC1D8D] rounded-2xl p-5 text-white text-center">
                <IconBroom className="w-8 h-8 mx-auto mb-2 opacity-80" />
                <p className="font-black text-lg">Cleaning</p>
                <p className="text-white/70 text-xs font-medium">Homes • Offices • Sites</p>
              </div>
              <div className="bg-[#0d1b2e] rounded-2xl p-5 text-white text-center border border-[#00AEEF]/30">
                <IconShield className="w-8 h-8 mx-auto mb-2 text-[#00AEEF]" />
                <p className="font-black text-lg">Security</p>
                <p className="text-white/50 text-xs font-medium">Guards • Patrol • Events</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SERVICES ───────────────────────────────────────────────────────── */}
      <section id="services" className="py-24 bg-slate-50">
        <div className="max-w-6xl mx-auto px-5">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-2 mb-4">
              <div className="h-1 w-8 bg-[#00AEEF] rounded-full" />
              <span className="text-[#00AEEF] text-xs font-black tracking-widest uppercase">What We Offer</span>
              <div className="h-1 w-8 bg-[#00AEEF] rounded-full" />
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-[#0d1b2e] tracking-tight">Our Services</h2>
            <p className="text-slate-500 mt-4 max-w-xl mx-auto leading-relaxed">
              From spotless interiors to safe premises — we deliver professional results every time.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <ServiceCard
              icon={IconBroom}
              title="Professional Cleaning"
              accentColor="bg-[#00AEEF]/10 text-[#00AEEF]"
              bgColor="bg-white"
              borderColor="border-slate-100"
              items={[
                "Residential deep cleaning (all bedroom counts)",
                "Office & commercial space cleaning",
                "Post-construction dust & debris removal",
                "Floor polishing — marble, tile & hardwood",
                "Waste collection & disposal management",
              ]}
            />
            <ServiceCard
              icon={IconShield}
              title="Security Services"
              accentColor="bg-[#EC1D8D]/10 text-[#EC1D8D]"
              bgColor="bg-white"
              borderColor="border-slate-100"
              items={[
                "Static guards for homes, businesses & events",
                "24/7 round-the-clock protection",
                "Trained and licensed security personnel",
                "Access control and entry management",
                "Mobile patrol and monitoring services",
              ]}
            />
          </div>

          {/* Sub-service pills */}
          <div className="mt-10 bg-white rounded-2xl border border-slate-100 p-7">
            <p className="text-xs font-black tracking-widest text-slate-400 uppercase mb-5">All cleaning types we handle</p>
            <div className="flex flex-wrap gap-3">
              {[
                "Home Cleaning", "Office Cleaning", "Deep Cleaning", "Post-Construction",
                "Floor Polishing", "Carpet Cleaning", "Window Cleaning", "Waste Management",
                "Move-In / Move-Out", "Event Cleanup",
              ].map((tag) => (
                <span key={tag} className="text-xs font-bold text-[#0077C8] bg-[#00AEEF]/8 border border-[#00AEEF]/20 px-4 py-2 rounded-full">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── GALLERY / CAROUSEL ─────────────────────────────────────────────── */}
      <section id="gallery" className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-5">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-2 mb-4">
              <div className="h-1 w-8 bg-[#EC1D8D] rounded-full" />
              <span className="text-[#EC1D8D] text-xs font-black tracking-widest uppercase">Our Work</span>
              <div className="h-1 w-8 bg-[#EC1D8D] rounded-full" />
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-[#0d1b2e] tracking-tight">Gallery</h2>
            <p className="text-slate-400 text-sm mt-3">Replace placeholders with your own photos</p>
          </div>
          <Carousel />

          {/* Thumb strip */}
          <ThumbStrip />
        </div>
      </section>

      {/* ── PRICING ────────────────────────────────────────────────────────── */}
      <section id="pricing" className="py-24 bg-[#0d1b2e]">
        <div className="max-w-4xl mx-auto px-5">
          <div className="text-center mb-14">
            <div className="flex items-center justify-center gap-2 mb-4">
              <div className="h-1 w-8 bg-[#00AEEF] rounded-full" />
              <span className="text-[#00AEEF] text-xs font-black tracking-widest uppercase">Transparent Rates</span>
              <div className="h-1 w-8 bg-[#00AEEF] rounded-full" />
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-white tracking-tight">One-Off Deep Cleaning</h2>
            <p className="text-slate-400 mt-4 max-w-md mx-auto leading-relaxed">
              Clear, upfront pricing with no hidden fees. Professional cleaning for every home size.
            </p>
          </div>

          <div className="bg-[#0f2540] rounded-3xl border border-[#00AEEF]/20 overflow-hidden">
            {/* Top accent */}
            <div className="h-1 bg-gradient-to-r from-[#00AEEF] via-[#EC1D8D] to-[#00AEEF]" />
            <div className="p-8 flex flex-col gap-3">
              <PriceRow label="1 Bedroom House" price="K700" />
              <PriceRow label="2 Bedroom House" price="K900" />
              <PriceRow label="3 Bedroom House" price="K1,200" />
              <PriceRow label="4 Bedroom House" price="K1,400" />
              <PriceRow label="Large 5+ Bedroom House" price="K2,000" highlight />
            </div>
            <div className="bg-[#060f1c] px-8 py-5 flex flex-col md:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-3 text-slate-400 text-sm">
                <IconSparkle className="w-4 h-4 text-[#EC1D8D]" />
                <span>Thorough top-to-bottom cleaning included in every service</span>
              </div>
              <button
                onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                className="bg-[#EC1D8D] hover:bg-[#c4006e] text-white font-bold px-6 py-3 rounded-full transition-colors text-sm whitespace-nowrap"
              >
                Book Now
              </button>
            </div>
          </div>

          <p className="text-center text-slate-500 text-sm mt-6">
            Need a custom quote for commercial spaces or security services?{" "}
            <button
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              className="text-[#00AEEF] font-bold hover:underline"
            >
              Contact us
            </button>
          </p>
        </div>
      </section>

      {/* ── TESTIMONIALS ───────────────────────────────────────────────────── */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-6xl mx-auto px-5">
          <div className="text-center mb-14">
            <div className="flex items-center justify-center gap-2 mb-4">
              <div className="h-1 w-8 bg-[#EC1D8D] rounded-full" />
              <span className="text-[#EC1D8D] text-xs font-black tracking-widest uppercase">Client Reviews</span>
              <div className="h-1 w-8 bg-[#EC1D8D] rounded-full" />
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-[#0d1b2e] tracking-tight">What Clients Say</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <TestimonialCard
              name="Chanda Mwale"
              role="Homeowner, Chalala"
              text="Osides Solutions transformed my 3-bedroom house. The team was punctual, thorough, and incredibly professional. My floors shine like never before!"
              rating={5}
            />
            <TestimonialCard
              name="Bupe Kapasa"
              role="Office Manager, Lusaka"
              text="We use Osides for our office cleaning every week. They are consistent, reliable, and our office has never looked better. Highly recommended."
              rating={5}
            />
            <TestimonialCard
              name="Mutale Banda"
              role="Property Developer"
              text="After our construction project, Osides did a fantastic post-construction clean. They removed every bit of dust and debris. Truly professional."
              rating={5}
            />
          </div>
        </div>
      </section>

      {/* ── CONTACT ────────────────────────────────────────────────────────── */}
      <section id="contact" className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-5 grid md:grid-cols-2 gap-16 items-start">
          {/* Left: Info */}
          <div className="flex flex-col gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="h-1 w-8 bg-[#00AEEF] rounded-full" />
                <span className="text-[#00AEEF] text-xs font-black tracking-widest uppercase">Get In Touch</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-black text-[#0d1b2e] tracking-tight leading-tight">
                Ready to Book<br />a Service?
              </h2>
              <p className="text-slate-500 mt-4 leading-relaxed">
                Contact us today for a free quote or to schedule your service. We respond quickly and are always happy to help.
              </p>
            </div>

            <div className="flex flex-col gap-5">
              {[
                { icon: IconPin, label: "Address", value: "Plot 2664, Rockfield, Chalala, Lusaka" },
                { icon: IconPhone, label: "Phone", value: "0977 319 756" },
                { icon: IconWhatsapp, label: "WhatsApp", value: "0965 319 756" },
                { icon: IconMail, label: "Email", value: "osidessolutions@gmail.com" },
              ].map(({ icon: Icon, label, value }) => (
                <div key={label} className="flex items-center gap-4">
                  <div className="w-11 h-11 rounded-xl bg-[#00AEEF]/10 flex items-center justify-center flex-shrink-0">
                    <Icon className="w-5 h-5 text-[#00AEEF]" />
                  </div>
                  <div>
                    <p className="text-xs font-black text-slate-400 uppercase tracking-widest">{label}</p>
                    <p className="font-bold text-[#0d1b2e] text-sm mt-0.5">{value}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* WhatsApp CTA */}
            <a
              href="https://wa.me/260965319756"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-bold px-6 py-4 rounded-2xl transition-colors shadow-lg shadow-green-200 w-fit"
            >
              <IconWhatsapp className="w-6 h-6" />
              Chat on WhatsApp
            </a>
          </div>

          {/* Right: Contact form */}
          <div className="bg-slate-50 rounded-3xl border border-slate-100 p-8">
            <h3 className="text-xl font-black text-[#0d1b2e] mb-6">Send Us a Message</h3>
            <div className="flex flex-col gap-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-bold text-slate-500 uppercase tracking-widest block mb-2">First Name</label>
                  <input type="text" placeholder="Chanda" className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm font-medium focus:outline-none focus:border-[#00AEEF] focus:ring-2 focus:ring-[#00AEEF]/20 transition-all" />
                </div>
                <div>
                  <label className="text-xs font-bold text-slate-500 uppercase tracking-widest block mb-2">Last Name</label>
                  <input type="text" placeholder="Mwale" className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm font-medium focus:outline-none focus:border-[#00AEEF] focus:ring-2 focus:ring-[#00AEEF]/20 transition-all" />
                </div>
              </div>
              <div>
                <label className="text-xs font-bold text-slate-500 uppercase tracking-widest block mb-2">Phone / WhatsApp</label>
                <input type="tel" placeholder="0977 000 000" className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm font-medium focus:outline-none focus:border-[#00AEEF] focus:ring-2 focus:ring-[#00AEEF]/20 transition-all" />
              </div>
              <div>
                <label className="text-xs font-bold text-slate-500 uppercase tracking-widest block mb-2">Service Needed</label>
                <select className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm font-medium focus:outline-none focus:border-[#00AEEF] focus:ring-2 focus:ring-[#00AEEF]/20 transition-all bg-white">
                  <option value="">Select a service...</option>
                  <option>Home Deep Cleaning</option>
                  <option>Office Cleaning</option>
                  <option>Post-Construction Cleaning</option>
                  <option>Floor Polishing</option>
                  <option>Security Services</option>
                  <option>Other</option>
                </select>
              </div>
              <div>
                <label className="text-xs font-bold text-slate-500 uppercase tracking-widest block mb-2">Message</label>
                <textarea rows={4} placeholder="Tell us about your property and what you need..." className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm font-medium focus:outline-none focus:border-[#00AEEF] focus:ring-2 focus:ring-[#00AEEF]/20 transition-all resize-none" />
              </div>
              <button className="w-full bg-[#EC1D8D] hover:bg-[#c4006e] text-white font-black py-4 rounded-xl transition-colors text-sm tracking-wide shadow-lg shadow-pink-100 mt-1">
                Send Message
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ── FOOTER ─────────────────────────────────────────────────────────── */}
      <footer className="bg-[#0d1b2e] border-t border-white/5">
        <div className="max-w-6xl mx-auto px-5 py-12">
          <div className="grid md:grid-cols-3 gap-10 mb-10">
            {/* Brand */}
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-3">
                <OsidesLogoMark className="w-10 h-8" />
                <div>
                  <p className="font-black text-white text-sm tracking-widest uppercase leading-none">Osides Solutions</p>
                  <p className="text-[10px] text-[#00AEEF] font-bold tracking-widest uppercase mt-1">Making your places better</p>
                </div>
              </div>
              <p className="text-slate-400 text-sm leading-relaxed">
                Lusaka's trusted partner for professional cleaning and security services. Reliable, affordable, and thorough — every time.
              </p>
            </div>
            {/* Quick Links */}
            <div>
              <p className="text-xs font-black tracking-widest text-slate-500 uppercase mb-5">Quick Links</p>
              <div className="flex flex-col gap-3">
                {navLinks.map((l) => (
                  <button
                    key={l.id}
                    onClick={() => scrollTo(l.id)}
                    className="text-slate-400 hover:text-[#00AEEF] text-sm font-medium transition-colors text-left"
                  >
                    {l.label}
                  </button>
                ))}
              </div>
            </div>
            {/* Contact */}
            <div>
              <p className="text-xs font-black tracking-widest text-slate-500 uppercase mb-5">Contact Us</p>
              <div className="flex flex-col gap-3">
                {[
                  { icon: IconPin, value: "Plot 2664, Rockfield, Chalala, Lusaka" },
                  { icon: IconPhone, value: "0977 319 756" },
                  { icon: IconWhatsapp, value: "0965 319 756" },
                  { icon: IconMail, value: "osidessolutions@gmail.com" },
                ].map(({ icon: Icon, value }) => (
                  <div key={value} className="flex items-start gap-2.5 text-sm text-slate-400 font-medium">
                    <Icon className="w-4 h-4 text-[#00AEEF] mt-0.5 flex-shrink-0" />
                    {value}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-slate-500 text-xs font-medium">
              © {new Date().getFullYear()} Osides Solutions. All rights reserved.
            </p>
            <div className="flex items-center gap-2">
              {["Reliable", "Professional", "Affordable"].map((tag, i) => (
                <span key={tag}>
                  <span className="text-xs text-slate-500 font-bold">{tag}</span>
                  {i < 2 && <span className="text-[#EC1D8D] mx-2 text-xs">•</span>}
                </span>
              ))}
            </div>
          </div>
        </div>
      </footer>

    </div>
  );
}