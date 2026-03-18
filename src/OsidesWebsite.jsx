import { useState, useEffect, useRef } from "react";

// ─── SVG Icons ───────────────────────────────────────────────────────────────
const IconBroom     = ({ className }) => (<svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 21l5-5m0 0l7-7m-7 7 1.5-1.5M13 9l2-2 3 3-2 2m-3-3l-5 5"/><circle cx="18" cy="5" r="2.5" fill="currentColor" opacity="0.4"/></svg>);
const IconShield    = ({ className }) => (<svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="M9 12l2 2 4-4"/></svg>);
const IconHome      = ({ className }) => (<svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/><polyline points="9,22 9,12 15,12 15,22"/></svg>);
const IconBuilding  = ({ className }) => (<svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="1"/><path d="M3 9h18M9 21V9m6 0v12"/></svg>);
const IconStar      = ({ className }) => (<svg className={className} viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>);
const IconPin       = ({ className }) => (<svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>);
const IconPhone     = ({ className }) => (<svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81 19.79 19.79 0 01.15 1.19 2 2 0 012.11 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/></svg>);
const IconMail      = ({ className }) => (<svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>);
const IconWhatsapp  = ({ className }) => (<svg className={className} viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>);
const IconChevronL  = ({ className }) => (<svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6"/></svg>);
const IconChevronR  = ({ className }) => (<svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"/></svg>);
const IconMenu      = ({ className }) => (<svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></svg>);
const IconClose     = ({ className }) => (<svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>);
const IconCheck     = ({ className }) => (<svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>);
const IconSparkle   = ({ className }) => (<svg className={className} viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l2.4 7.4H22l-6.2 4.5 2.4 7.4L12 17l-6.2 4.3 2.4-7.4L2 9.4h7.6L12 2z"/></svg>);
const IconTarget    = ({ className }) => (<svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg>);
const IconEye       = ({ className }) => (<svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>);
const IconHeart     = ({ className }) => (<svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"/></svg>);
const IconAward     = ({ className }) => (<svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="8" r="6"/><path d="M15.477 12.89L17 22l-5-3-5 3 1.523-9.11"/></svg>);
const IconUsers     = ({ className }) => (<svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87"/><path d="M16 3.13a4 4 0 010 7.75"/></svg>);
const IconLeaf      = ({ className }) => (<svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 8C8 10 5.9 16.17 3.82 19.34A1 1 0 004.82 21C7 20 11.39 19 15 17c6-3.33 8-9 8-14 0 0-4 0-6 1z"/><path d="M3.82 19.34C5 14 8 10 17 8"/></svg>);
const IconCctv      = ({ className }) => (<svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M23 7l-7 5 7 5V7z"/><rect x="1" y="5" width="15" height="14" rx="2"/></svg>);
const IconCar       = ({ className }) => (<svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="1" y="3" width="15" height="13" rx="2"/><path d="M16 8h5l3 5v3h-8V8z"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/></svg>);
const IconBriefcase = ({ className }) => (<svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 21V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v16"/></svg>);
const IconDoc       = ({ className }) => (<svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg>);
const IconFlag      = ({ className }) => (<svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"/><line x1="4" y1="22" x2="4" y2="15"/></svg>);

// ─── Logo ─────────────────────────────────────────────────────────────────────
const OsidesLogo = ({ className }) => (
  <svg className={className} viewBox="0 0 60 50" fill="none">
    <circle cx="30" cy="10" r="8"   fill="#00AEEF"/>
    <circle cx="17" cy="19" r="6"   fill="#00AEEF"/>
    <circle cx="43" cy="19" r="5"   fill="#00AEEF"/>
    <circle cx="9"  cy="30" r="4"   fill="#00AEEF"/>
    <circle cx="51" cy="29" r="3.5" fill="#00AEEF"/>
    <circle cx="24" cy="32" r="3"   fill="#00AEEF"/>
    <circle cx="38" cy="33" r="4"   fill="#00AEEF"/>
    <circle cx="17" cy="42" r="2.5" fill="#EC1D8D"/>
    <circle cx="42" cy="44" r="2.5" fill="#EC1D8D"/>
    <circle cx="30" cy="46" r="2"   fill="#EC1D8D"/>
  </svg>
);

// ─── Data ─────────────────────────────────────────────────────────────────────
const carouselSlides = [
  { id:1, src:"https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&h=500&fit=crop&auto=format", caption:"Professional Deep Cleaning",    sub:"Top-to-bottom home & office cleaning by trained specialists" },
  { id:2, src:"https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?w=1200&h=500&fit=crop&auto=format", caption:"Office & Commercial Cleaning", sub:"Spotless workspaces that help your team perform their best" },
  { id:3, src:"https://images.unsplash.com/photo-1584820927498-cfe5211fd8bf?w=1200&h=500&fit=crop&auto=format", caption:"24/7 Security Services",       sub:"Licensed guards for homes, businesses & events" },
  { id:4, src:"https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=1200&h=500&fit=crop&auto=format", caption:"Post-Construction Cleanup",    sub:"Complete dust, debris & chemical removal after every build" },
  { id:5, src:"https://images.unsplash.com/photo-1563453392212-326f5e854473?w=1200&h=500&fit=crop&auto=format", caption:"Floor Polishing",              sub:"Marble, tile & hardwood floors restored to a brilliant shine" },
];

const coreValues = [
  { icon: IconDoc,     title: "Integrity",       desc: "Honesty and transparency in all our operations." },
  { icon: IconAward,   title: "Professionalism", desc: "Services delivered with skill, reliability, and consistency." },
  { icon: IconSparkle, title: "Excellence",      desc: "We strive to exceed expectations in every project." },
  { icon: IconHeart,   title: "Customer Focus",  desc: "We prioritise client needs and tailor services accordingly." },
  { icon: IconFlag,    title: "Accountability",  desc: "We take full responsibility for our work and results." },
];

const cleaningServices = [
  { icon: IconBuilding,  text: "Office and commercial cleaning" },
  { icon: IconBriefcase, text: "Industrial cleaning" },
  { icon: IconHome,      text: "Household cleaning" },
  { icon: IconLeaf,      text: "Landscaping and grounds maintenance" },
  { icon: IconBroom,     text: "Garbage collection and disposal" },
  { icon: IconSparkle,   text: "Pest control services" },
];

const securityServices = [
  { icon: IconShield,  text: "Manned guarding — residential, commercial & industrial" },
  { icon: IconUsers,   text: "Event security management" },
  { icon: IconCar,     text: "Mobile patrols" },
  { icon: IconTarget,  text: "Access control and monitoring" },
  { icon: IconCctv,    text: "CCTV installation and monitoring support" },
  { icon: IconEye,     text: "Risk assessment and security consultancy" },
  { icon: IconCar,     text: "Car tracking system and alarm installation" },
];

const management = [
  { name: "Irving Muleya Chitangala", role: "Director",                    initials: "IC", color: "from-[#00AEEF] to-[#0077C8]" },
  { name: "Philip Chitangala",        role: "Director",                    initials: "PC", color: "from-[#EC1D8D] to-[#c4006e]" },
  { name: "Aaron Nkhuwa",             role: "Accounts / HR Administrator", initials: "AN", color: "from-[#0d2a4e] to-[#0077C8]" },
];

const legalInfo = [
  { label: "Company Name",      value: "Osides Solutions Limited" },
  { label: "Incorporated",      value: "27th July 2025" },
  { label: "Country",           value: "Zambia" },
  { label: "Business Areas",    value: "Cleaning & Security Services" },
  { label: "PACRA Reg. No.",    value: "320251049835" },
  { label: "TPIN",              value: "2003912085" },
  { label: "ZRA Compliance No.", value: "2513117839" },
];

const whyUs = [
  "Professional and well-trained staff",
  "Flexible and affordable service packages",
  "Commitment to client satisfaction",
  "Integrated Cleaning + Security solutions",
  "24/7 availability for security services",
  "Zambian-owned and community-focused",
];

const navLinks = [
  { label: "Home",     id: "hero" },
  { label: "About",    id: "about" },
  { label: "Services", id: "services" },
  { label: "Gallery",  id: "gallery" },
  { label: "Pricing",  id: "pricing" },
  { label: "Team",     id: "team" },
  { label: "Contact",  id: "contact" },
];

// ─── Scroll-reveal hook ───────────────────────────────────────────────────────
function useReveal() {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold: 0.08 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  return [ref, visible];
}

function Reveal({ children, delay = 0, className = "" }) {
  const [ref, visible] = useReveal();
  return (
    <div ref={ref} className={className} style={{
      opacity: visible ? 1 : 0,
      transform: visible ? "translateY(0)" : "translateY(22px)",
      transition: `opacity 0.55s ease ${delay}ms, transform 0.55s ease ${delay}ms`,
    }}>
      {children}
    </div>
  );
}

function SectionLabel({ text, color = "blue" }) {
  const cls = color === "pink" ? "text-[#EC1D8D]" : "text-[#00AEEF]";
  const bar = color === "pink" ? "bg-[#EC1D8D]"   : "bg-[#00AEEF]";
  return (
    <div className="flex items-center justify-center gap-2 mb-3">
      <div className={`h-0.5 w-6 ${bar} rounded-full`} />
      <span className={`${cls} text-xs font-black tracking-widest uppercase`}>{text}</span>
      <div className={`h-0.5 w-6 ${bar} rounded-full`} />
    </div>
  );
}

// ─── Carousel ─────────────────────────────────────────────────────────────────
function Carousel() {
  const [current, setCurrent] = useState(0);
  const [prev, setPrev]       = useState(null);
  const [dir, setDir]         = useState("right");
  const [sliding, setSliding] = useState(false);
  const timer = useRef(null);

  // Touch / swipe support
  const touchStartX = useRef(null);
  const onTouchStart = (e) => { touchStartX.current = e.touches[0].clientX; };
  const onTouchEnd   = (e) => {
    if (touchStartX.current === null) return;
    const dx = e.changedTouches[0].clientX - touchStartX.current;
    if (Math.abs(dx) > 40) goTo(current + (dx < 0 ? 1 : -1), dx < 0 ? "right" : "left");
    touchStartX.current = null;
  };

  const goTo = (idx, d = "right") => {
    if (sliding) return;
    const next = (idx + carouselSlides.length) % carouselSlides.length;
    if (next === current) return;
    setDir(d); setPrev(current); setSliding(true); setCurrent(next);
    setTimeout(() => { setSliding(false); setPrev(null); }, 550);
  };

  useEffect(() => {
    timer.current = setInterval(() => goTo(current + 1, "right"), 5500);
    return () => clearInterval(timer.current);
  }, [current, sliding]);

  const slide     = carouselSlides[current];
  const prevSlide = prev !== null ? carouselSlides[prev] : null;

  return (
    <>
      <div
        className="relative w-full overflow-hidden rounded-xl sm:rounded-2xl shadow-xl"
        style={{ height: "clamp(220px, 52vw, 460px)" }}
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
      >
        {/* Previous slide out */}
        {prevSlide && sliding && (
          <div className="absolute inset-0 z-10"
            style={{ animation: `slideOut${dir === "right" ? "Left" : "Right"} 0.55s cubic-bezier(.4,0,.2,1) forwards` }}>
            <img src={prevSlide.src} alt="" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent" />
          </div>
        )}
        {/* Current slide in */}
        <div className="absolute inset-0 z-20"
          style={{ animation: sliding ? `slideIn${dir === "right" ? "Right" : "Left"} 0.55s cubic-bezier(.4,0,.2,1) forwards` : "none" }}>
          <img src={slide.src} alt={slide.caption} className="w-full h-full object-cover" loading="lazy" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
          {/* Caption */}
          <div className="absolute bottom-0 left-0 right-0 px-4 sm:px-8 pb-10 sm:pb-14 z-10">
            <span className="inline-flex items-center gap-1.5 bg-[#EC1D8D] px-2.5 py-1 rounded-full mb-2">
              <OsidesLogo className="w-4 h-3" />
              <span className="text-white text-xs font-black tracking-wider uppercase">Osides Solutions</span>
            </span>
            <h3 className="text-white text-lg sm:text-2xl md:text-3xl font-black leading-tight mb-1">{slide.caption}</h3>
            <p className="text-white/70 text-xs sm:text-sm font-medium hidden sm:block">{slide.sub}</p>
          </div>
        </div>

        {/* Arrows — smaller on mobile */}
        <button onClick={() => goTo(current - 1, "left")}
          className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 w-8 h-8 sm:w-11 sm:h-11 rounded-full bg-white/15 hover:bg-white/35 backdrop-blur-md border border-white/25 flex items-center justify-center text-white z-30 active:scale-95">
          <IconChevronL className="w-4 h-4 sm:w-5 sm:h-5" />
        </button>
        <button onClick={() => goTo(current + 1, "right")}
          className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 w-8 h-8 sm:w-11 sm:h-11 rounded-full bg-white/15 hover:bg-white/35 backdrop-blur-md border border-white/25 flex items-center justify-center text-white z-30 active:scale-95">
          <IconChevronR className="w-4 h-4 sm:w-5 sm:h-5" />
        </button>

        {/* Dots */}
        <div className="absolute bottom-3 sm:bottom-4 left-1/2 -translate-x-1/2 flex gap-1.5 z-30">
          {carouselSlides.map((_, i) => (
            <button key={i} onClick={() => goTo(i, i > current ? "right" : "left")}
              className={`rounded-full transition-all duration-300 ${i === current ? "w-6 h-2 bg-white" : "w-2 h-2 bg-white/40"}`} />
          ))}
        </div>
        {/* Counter */}
        <div className="absolute top-3 right-3 bg-black/40 backdrop-blur-sm text-white text-xs font-bold px-2.5 py-1 rounded-full z-30 border border-white/10">
          {current + 1}/{carouselSlides.length}
        </div>

        <style>{`
          @keyframes slideInRight  { from{transform:translateX(100%)}  to{transform:translateX(0)} }
          @keyframes slideInLeft   { from{transform:translateX(-100%)} to{transform:translateX(0)} }
          @keyframes slideOutLeft  { from{transform:translateX(0)} to{transform:translateX(-100%)} }
          @keyframes slideOutRight { from{transform:translateX(0)} to{transform:translateX(100%)} }
        `}</style>
      </div>

      {/* Thumbnails — hidden on small phones, visible sm+ */}
      <div className="mt-3 hidden sm:grid grid-cols-5 gap-2 sm:gap-3">
        {carouselSlides.map((slide, i) => (
          <div key={slide.id} onClick={() => goTo(i, i > current ? "right" : "left")}
            className={`relative h-12 sm:h-16 rounded-lg sm:rounded-xl overflow-hidden cursor-pointer border-2 transition-all
              ${i === current ? "border-[#EC1D8D] scale-105 shadow-lg" : "border-transparent opacity-50 hover:opacity-85"}`}>
            <img src={slide.src} alt={slide.caption} className="w-full h-full object-cover" />
          </div>
        ))}
      </div>
    </>
  );
}

// ─── Price Row ────────────────────────────────────────────────────────────────
function PriceRow({ label, price, highlight }) {
  return (
    <div className={`flex items-center justify-between px-4 sm:px-5 py-3.5 sm:py-4 rounded-xl
      ${highlight ? "bg-[#EC1D8D]/10 border border-[#EC1D8D]/30" : "bg-white/5 hover:bg-white/10 border border-white/5"}`}>
      <div className="flex items-center gap-2 sm:gap-3">
        <IconHome className="w-4 h-4 text-[#00AEEF] flex-shrink-0" />
        <span className="text-xs sm:text-sm font-bold text-white/85">{label}</span>
      </div>
      <span className={`text-xl sm:text-2xl font-black ${highlight ? "text-[#EC1D8D]" : "text-[#00AEEF]"}`}>{price}</span>
    </div>
  );
}

// ─── Testimonial Card ─────────────────────────────────────────────────────────
function TestCard({ name, role, text, rating }) {
  return (
    <div className="bg-white rounded-2xl border border-slate-100 p-5 sm:p-6 shadow-sm flex flex-col gap-3">
      <div className="flex gap-1">{[...Array(rating)].map((_,i) => <IconStar key={i} className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#EC1D8D]"/>)}</div>
      <p className="text-slate-500 text-sm leading-relaxed italic flex-1">"{text}"</p>
      <div className="flex items-center gap-3 pt-3 border-t border-slate-100">
        <div className="w-9 h-9 rounded-full bg-gradient-to-br from-[#00AEEF] to-[#0077C8] flex items-center justify-center text-white font-black text-sm flex-shrink-0">{name[0]}</div>
        <div>
          <p className="text-sm font-black text-[#0d1b2e]">{name}</p>
          <p className="text-xs text-slate-400">{role}</p>
        </div>
      </div>
    </div>
  );
}

// ─── Floating WhatsApp button ─────────────────────────────────────────────────
function FloatingWhatsApp() {
  return (
    <a href="https://wa.me/260965319756" target="_blank" rel="noopener noreferrer"
      className="fixed bottom-5 right-5 z-50 w-14 h-14 bg-[#25D366] rounded-full flex items-center justify-center shadow-lg shadow-green-300/50 hover:bg-[#1ebe5d] active:scale-95 transition-all"
      aria-label="Chat on WhatsApp">
      <IconWhatsapp className="w-7 h-7 text-white" />
    </a>
  );
}

// ─── Main App ─────────────────────────────────────────────────────────────────
export default function OsidesWebsite() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  // Prevent body scroll when menu open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <div className="font-sans bg-white text-[#0d1b2e] overflow-x-hidden">
      <FloatingWhatsApp />

      {/* ── MOBILE MENU OVERLAY — outside nav so z-index is independent ─────── */}
      {menuOpen && (
        <div
          style={{ position: "fixed", inset: 0, zIndex: 9999, background: "#0d1b2e", display: "flex", flexDirection: "column", overflowY: "auto" }}
        >
          {/* Top bar inside menu */}
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "16px 20px", borderBottom: "1px solid rgba(255,255,255,0.08)" }}>
            <button onClick={() => setMenuOpen(false)} style={{ display: "flex", alignItems: "center", gap: "10px" }}>
              <OsidesLogo className="w-10 h-8" />
              <div style={{ textAlign: "left" }}>
                <p style={{ color: "white", fontWeight: 900, fontSize: "13px", letterSpacing: "2px", textTransform: "uppercase", lineHeight: 1 }}>Osides Solutions</p>
                <p style={{ color: "#00AEEF", fontSize: "10px", fontWeight: 700, letterSpacing: "2px", textTransform: "uppercase", marginTop: "3px" }}>Making your places better</p>
              </div>
            </button>
            <button
              onClick={() => setMenuOpen(false)}
              style={{ background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.12)", borderRadius: "12px", padding: "8px", color: "white", cursor: "pointer" }}
              aria-label="Close menu"
            >
              <IconClose className="w-6 h-6" />
            </button>
          </div>

          {/* Nav links */}
          <div style={{ flex: 1, padding: "8px 20px 0" }}>
            {navLinks.map((l, i) => (
              <button
                key={l.id}
                onClick={() => scrollTo(l.id)}
                style={{
                  display: "block", width: "100%", textAlign: "left",
                  color: "white", fontSize: "24px", fontWeight: 900,
                  padding: "18px 0",
                  borderBottom: i < navLinks.length - 1 ? "1px solid rgba(255,255,255,0.06)" : "none",
                  background: "none", cursor: "pointer",
                  letterSpacing: "0.5px",
                }}
                onMouseEnter={e => e.currentTarget.style.color = "#00AEEF"}
                onMouseLeave={e => e.currentTarget.style.color = "white"}
              >
                {l.label}
              </button>
            ))}
          </div>

          {/* Bottom CTAs */}
          <div style={{ padding: "24px 20px", display: "flex", flexDirection: "column", gap: "12px" }}>
            <button
              onClick={() => scrollTo("contact")}
              style={{ width: "100%", background: "#EC1D8D", color: "white", fontWeight: 900, fontSize: "16px", padding: "16px", borderRadius: "16px", border: "none", cursor: "pointer" }}
            >
              Get a Free Quote
            </button>
            <a
              href="https://wa.me/260965319756"
              target="_blank"
              rel="noopener noreferrer"
              style={{ width: "100%", background: "#25D366", color: "white", fontWeight: 900, fontSize: "16px", padding: "16px", borderRadius: "16px", display: "flex", alignItems: "center", justifyContent: "center", gap: "10px", textDecoration: "none" }}
            >
              <IconWhatsapp className="w-6 h-6" /> WhatsApp Us
            </a>
          </div>
        </div>
      )}

      {/* ── NAVBAR ─────────────────────────────────────────────────────────── */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300
        ${scrolled ? "bg-white/97 backdrop-blur-md shadow-sm border-b border-slate-100" : "bg-transparent"}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 sm:py-4 flex items-center justify-between">
          {/* Logo */}
          <button onClick={() => scrollTo("hero")} className="flex items-center gap-2.5">
            <OsidesLogo className="w-9 h-7 sm:w-10 sm:h-8" />
            <div className="text-left">
              <p className={`font-black text-xs sm:text-sm tracking-widest uppercase leading-none transition-colors
                ${scrolled ? "text-[#0d1b2e]" : "text-white"}`}>Osides Solutions</p>
              <p className="text-[9px] text-[#00AEEF] font-bold tracking-widest uppercase mt-0.5">Making your places better</p>
            </div>
          </button>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-5 xl:gap-7">
            {navLinks.map((l) => (
              <button key={l.id} onClick={() => scrollTo(l.id)}
                className={`text-sm font-semibold transition-colors hover:text-[#00AEEF]
                  ${scrolled ? "text-slate-600" : "text-white/85"}`}>
                {l.label}
              </button>
            ))}
            <button onClick={() => scrollTo("contact")}
              className="bg-[#EC1D8D] hover:bg-[#c4006e] text-white text-sm font-bold px-5 py-2.5 rounded-full transition-colors">
              Get a Quote
            </button>
          </div>

          {/* Mobile burger */}
          <button
            className={`lg:hidden p-2 rounded-xl ${scrolled ? "text-[#0d1b2e]" : "text-white"}`}
            onClick={() => setMenuOpen(true)}
            aria-label="Open menu"
          >
            <IconMenu className="w-6 h-6" />
          </button>
        </div>
      </nav>

      {/* ── HERO ───────────────────────────────────────────────────────────── */}
      <section id="hero" className="relative min-h-screen flex items-center overflow-hidden bg-[#0d1b2e]">
        {/* Dot bg */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(50)].map((_, i) => (
            <div key={i} className="absolute rounded-full bg-[#00AEEF]"
              style={{ width: Math.random()*7+2+"px", height: Math.random()*7+2+"px",
                left: Math.random()*100+"%", top: Math.random()*100+"%", opacity: Math.random()*0.12+0.04 }} />
          ))}
        </div>
        <div className="absolute top-1/3 left-1/4 w-64 sm:w-96 h-64 sm:h-96 bg-[#00AEEF] opacity-[0.07] rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-1/3 right-1/4 w-48 sm:w-72 h-48 sm:h-72 bg-[#EC1D8D] opacity-[0.07] rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-24 sm:pt-28 pb-16 sm:pb-20 w-full relative z-10">
          {/* Mobile: stacked. Desktop: two columns */}
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <div className="flex flex-col gap-5 sm:gap-7">
              {/* Badges */}
              <div className="flex flex-wrap gap-2">
                <span className="inline-flex items-center gap-2 bg-[#00AEEF]/15 border border-[#00AEEF]/30 rounded-full px-3 py-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#00AEEF] animate-pulse" />
                  <span className="text-[#00AEEF] text-xs font-bold tracking-wider uppercase">Zambian-Owned</span>
                </span>
                <span className="inline-flex items-center bg-[#EC1D8D]/15 border border-[#EC1D8D]/30 rounded-full px-3 py-1.5">
                  <span className="text-[#EC1D8D] text-xs font-bold tracking-wider uppercase">Est. 27 July 2025</span>
                </span>
              </div>

              {/* Headline — scales from 38px mobile to 72px desktop */}
              <h1 className="text-[2.4rem] sm:text-5xl md:text-6xl lg:text-7xl font-black text-white leading-[1.02] tracking-tight">
                Making Your<br />
                <span className="text-[#00AEEF]">Places</span>{" "}
                <span className="text-[#EC1D8D]">Better</span>
              </h1>

              <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-lg">
                Professional cleaning and reliable security services for homes, offices and businesses across Lusaka — with integrity, excellence, and care.
              </p>

              <div className="flex flex-col sm:flex-row gap-3">
                <button onClick={() => scrollTo("services")}
                  className="bg-[#00AEEF] hover:bg-[#0095cc] text-white font-bold px-7 py-4 rounded-full transition-colors shadow-lg shadow-[#00AEEF]/25 text-sm text-center">
                  Explore Services
                </button>
                <button onClick={() => scrollTo("contact")}
                  className="border-2 border-[#EC1D8D] text-[#EC1D8D] hover:bg-[#EC1D8D] hover:text-white font-bold px-7 py-4 rounded-full transition-all text-sm text-center">
                  Get a Free Quote
                </button>
              </div>

              <div className="flex flex-wrap gap-2">
                {["Reliable","Professional","Affordable","24/7 Security"].map((t) => (
                  <span key={t} className="flex items-center gap-1.5 text-xs font-bold text-white/65 bg-white/8 border border-white/10 px-3 py-1.5 rounded-full">
                    <IconCheck className="w-3 h-3 text-[#00AEEF]" /> {t}
                  </span>
                ))}
              </div>
            </div>

            {/* Hero card — hidden on mobile, shown lg+ */}
            <div className="hidden lg:block relative">
              <div className="bg-gradient-to-br from-[#0f2540]/90 to-[#1a3a5c]/90 rounded-3xl p-8 border border-[#00AEEF]/20 shadow-2xl">
                <div className="flex items-center gap-3 mb-6 pb-5 border-b border-white/10">
                  <OsidesLogo className="w-12 h-10" />
                  <div>
                    <p className="text-white font-black text-base tracking-widest uppercase">Osides Solutions Ltd</p>
                    <p className="text-[#00AEEF] text-xs font-bold tracking-widest mt-1">Making your places better</p>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-3 mb-5">
                  {[
                    { icon: IconBroom,    label: "Deep Cleaning", c:"text-[#00AEEF]", bg:"bg-[#00AEEF]/10" },
                    { icon: IconShield,   label: "Security",      c:"text-[#EC1D8D]", bg:"bg-[#EC1D8D]/10" },
                    { icon: IconBuilding, label: "Commercial",    c:"text-[#00AEEF]", bg:"bg-[#00AEEF]/10" },
                    { icon: IconLeaf,     label: "Landscaping",   c:"text-[#EC1D8D]", bg:"bg-[#EC1D8D]/10" },
                    { icon: IconCctv,     label: "CCTV Support",  c:"text-[#00AEEF]", bg:"bg-[#00AEEF]/10" },
                    { icon: IconCar,      label: "Car Tracking",  c:"text-[#EC1D8D]", bg:"bg-[#EC1D8D]/10" },
                  ].map(({ icon: Icon, label, c, bg }) => (
                    <div key={label} className={`${bg} rounded-xl p-3.5 flex items-center gap-2.5`}>
                      <Icon className={`w-5 h-5 ${c} flex-shrink-0`} />
                      <span className="text-white text-xs font-bold">{label}</span>
                    </div>
                  ))}
                </div>
                <div className="bg-[#EC1D8D]/10 border border-[#EC1D8D]/25 rounded-xl px-4 py-3 text-center">
                  <p className="text-white/50 text-xs font-bold tracking-widest uppercase mb-1">Deep cleaning starts from</p>
                  <p className="text-[#EC1D8D] text-4xl font-black">K700</p>
                </div>
              </div>
            </div>
          </div>

          {/* Mobile: mini service tiles shown below hero text */}
          <div className="grid grid-cols-2 gap-3 mt-8 lg:hidden">
            {[
              { icon: IconBroom,  label: "Cleaning",   c:"text-[#00AEEF]", bg:"bg-[#00AEEF]/10" },
              { icon: IconShield, label: "Security",   c:"text-[#EC1D8D]", bg:"bg-[#EC1D8D]/10" },
              { icon: IconCctv,   label: "CCTV",       c:"text-[#00AEEF]", bg:"bg-[#00AEEF]/10" },
              { icon: IconCar,    label: "Car Tracker", c:"text-[#EC1D8D]", bg:"bg-[#EC1D8D]/10" },
            ].map(({ icon: Icon, label, c, bg }) => (
              <div key={label} className={`${bg} rounded-2xl p-4 flex items-center gap-3 border border-white/5`}>
                <Icon className={`w-6 h-6 ${c} flex-shrink-0`} />
                <span className="text-white text-sm font-bold">{label}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 animate-bounce opacity-40">
          <div className="w-6 h-9 rounded-full border-2 border-white/30 flex items-start justify-center pt-1.5">
            <div className="w-1 h-2 rounded-full bg-white/60" />
          </div>
        </div>
      </section>

      {/* ── STATS ──────────────────────────────────────────────────────────── */}
      <div className="bg-[#00AEEF]">
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 divide-x divide-white/25">
          {[["500+","Happy Clients"],["24/7","Security Cover"],["2","Service Divisions"],["100%","Satisfaction"]].map(([n,l]) => (
            <div key={l} className="flex flex-col items-center py-5 sm:py-6 px-3">
              <span className="text-2xl sm:text-3xl md:text-4xl font-black text-white">{n}</span>
              <span className="text-white/70 text-xs font-bold mt-1 text-center uppercase tracking-wide leading-tight">{l}</span>
            </div>
          ))}
        </div>
      </div>

      {/* ── ABOUT ──────────────────────────────────────────────────────────── */}
      <section id="about" className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">

          {/* Overview */}
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center mb-16 sm:mb-24">
            <Reveal>
              <div className="flex items-center gap-2 mb-4">
                <div className="h-0.5 w-8 bg-[#EC1D8D] rounded-full" />
                <span className="text-[#EC1D8D] text-xs font-black tracking-widest uppercase">Company Overview</span>
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#0d1b2e] leading-tight tracking-tight mb-5">
                Zambia's Trusted Cleaning &amp; Security Partner
              </h2>
              <p className="text-slate-500 leading-relaxed mb-4 text-sm sm:text-base">
                Osides Solutions Limited is a <strong className="text-[#0d1b2e]">Zambian-owned company</strong> incorporated on <strong className="text-[#0d1b2e]">27th July 2025</strong>, founded to meet the growing demand for high-quality, trustworthy, and efficient service providers across the commercial and residential sectors.
              </p>
              <p className="text-slate-500 leading-relaxed mb-7 text-sm sm:text-base">
                We are dedicated to creating clean, safe, and secure environments that enhance the well-being of our clients while ensuring peace of mind.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {whyUs.map((item) => (
                  <div key={item} className="flex items-start gap-2.5 text-sm text-slate-600 font-medium">
                    <span className="mt-0.5 w-5 h-5 rounded-full bg-[#00AEEF]/10 flex items-center justify-center flex-shrink-0">
                      <IconCheck className="w-3 h-3 text-[#00AEEF]" />
                    </span>
                    {item}
                  </div>
                ))}
              </div>
            </Reveal>

            <Reveal delay={120}>
              <div className="flex flex-col gap-4">
                <div className="bg-gradient-to-br from-[#0d1b2e] to-[#0a2a50] rounded-2xl sm:rounded-3xl p-6 sm:p-8 text-white">
                  <OsidesLogo className="w-14 h-12 mb-4" />
                  <blockquote className="text-base sm:text-lg font-light leading-relaxed italic text-white/80 border-l-4 border-[#EC1D8D] pl-4 mb-5">
                    "We are dedicated to creating clean, safe, and secure environments that enhance the well-being of our clients while ensuring peace of mind."
                  </blockquote>
                  <p className="text-[#00AEEF] font-bold text-xs tracking-widest uppercase">— Osides Solutions Limited</p>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div className="bg-[#EC1D8D] rounded-2xl p-5 text-white text-center">
                    <IconBroom className="w-7 h-7 mx-auto mb-2 opacity-80" />
                    <p className="font-black text-sm">Cleaning</p>
                    <p className="text-white/70 text-xs mt-0.5">Homes · Offices · Sites</p>
                  </div>
                  <div className="bg-[#0d1b2e] rounded-2xl p-5 text-white text-center border border-[#00AEEF]/30">
                    <IconShield className="w-7 h-7 mx-auto mb-2 text-[#00AEEF]" />
                    <p className="font-black text-sm">Security</p>
                    <p className="text-white/50 text-xs mt-0.5">Guards · Patrol · CCTV</p>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Vision & Mission */}
          <div className="grid sm:grid-cols-2 gap-4 sm:gap-6 mb-16 sm:mb-20">
            <Reveal>
              <div className="bg-gradient-to-br from-[#00AEEF] to-[#0077C8] rounded-2xl sm:rounded-3xl p-6 sm:p-8 text-white h-full">
                <div className="w-11 h-11 bg-white/20 rounded-xl flex items-center justify-center mb-4">
                  <IconEye className="w-6 h-6" />
                </div>
                <p className="text-white/60 text-xs font-black tracking-widest uppercase mb-2">Our Vision</p>
                <p className="text-base sm:text-xl font-black leading-snug">
                  To be a leading service provider in cleaning and security solutions across Zambia, known for professionalism, reliability, and excellence.
                </p>
              </div>
            </Reveal>
            <Reveal delay={100}>
              <div className="bg-[#0d1b2e] rounded-2xl sm:rounded-3xl p-6 sm:p-8 text-white border border-[#EC1D8D]/20 h-full">
                <div className="w-11 h-11 bg-[#EC1D8D]/15 rounded-xl flex items-center justify-center mb-4">
                  <IconTarget className="w-6 h-6 text-[#EC1D8D]" />
                </div>
                <p className="text-white/50 text-xs font-black tracking-widest uppercase mb-2">Our Mission</p>
                <p className="text-base sm:text-xl font-black leading-snug text-white/90">
                  To deliver efficient, affordable, and customer-focused services in cleaning and security by leveraging skilled personnel, modern techniques, and a commitment to continuous improvement.
                </p>
              </div>
            </Reveal>
          </div>

          {/* Core Values */}
          <Reveal>
            <div className="text-center mb-10">
              <SectionLabel text="What Drives Us" />
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-[#0d1b2e] tracking-tight">Our Core Values</h2>
            </div>
          </Reveal>
          {/* 2-col on mobile, 5-col on large */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-5">
            {coreValues.map(({ icon: Icon, title, desc }, i) => (
              <Reveal key={title} delay={i * 60}>
                <div className="bg-slate-50 hover:bg-white border border-slate-100 hover:border-[#00AEEF]/30 hover:shadow-lg rounded-2xl p-4 sm:p-6 text-center flex flex-col items-center gap-3 transition-all h-full">
                  <div className="w-11 h-11 rounded-xl bg-[#00AEEF]/10 flex items-center justify-center">
                    <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-[#00AEEF]" />
                  </div>
                  <p className="font-black text-[#0d1b2e] text-sm">{title}</p>
                  <p className="text-slate-500 text-xs leading-relaxed hidden sm:block">{desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── SERVICES ───────────────────────────────────────────────────────── */}
      <section id="services" className="py-16 sm:py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <Reveal>
            <div className="text-center mb-10 sm:mb-16">
              <SectionLabel text="What We Offer" />
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#0d1b2e] tracking-tight">Our Services</h2>
              <p className="text-slate-500 mt-3 max-w-lg mx-auto text-sm sm:text-base leading-relaxed">
                Comprehensive, integrated cleaning and security solutions under one trusted roof.
              </p>
            </div>
          </Reveal>
          <div className="grid lg:grid-cols-2 gap-5 sm:gap-8">
            {/* Cleaning */}
            <Reveal>
              <div className="bg-white rounded-2xl sm:rounded-3xl border border-slate-100 overflow-hidden shadow-sm hover:shadow-xl transition-shadow h-full">
                <div className="bg-gradient-to-r from-[#00AEEF] to-[#0077C8] px-5 sm:px-7 py-4 sm:py-5 flex items-center gap-3 sm:gap-4">
                  <div className="w-10 h-10 sm:w-11 sm:h-11 bg-white/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <IconBroom className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-white font-black text-base sm:text-lg">Cleaning Services</h3>
                    <p className="text-white/70 text-xs">Professional · Thorough · Affordable</p>
                  </div>
                </div>
                <div className="p-4 sm:p-7 flex flex-col gap-1.5 sm:gap-2">
                  {cleaningServices.map(({ icon: Icon, text }) => (
                    <div key={text} className="flex items-center gap-3 p-2.5 sm:p-3 rounded-xl hover:bg-[#00AEEF]/5 transition-colors group">
                      <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-[#00AEEF]/10 flex items-center justify-center flex-shrink-0">
                        <Icon className="text-[#00AEEF]" style={{width:"17px",height:"17px"}} />
                      </div>
                      <span className="text-xs sm:text-sm font-semibold text-slate-700">{text}</span>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
            {/* Security */}
            <Reveal delay={100}>
              <div className="bg-white rounded-2xl sm:rounded-3xl border border-slate-100 overflow-hidden shadow-sm hover:shadow-xl transition-shadow h-full">
                <div className="bg-gradient-to-r from-[#EC1D8D] to-[#c4006e] px-5 sm:px-7 py-4 sm:py-5 flex items-center gap-3 sm:gap-4">
                  <div className="w-10 h-10 sm:w-11 sm:h-11 bg-white/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <IconShield className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-white font-black text-base sm:text-lg">Security Services</h3>
                    <p className="text-white/70 text-xs">Licensed · 24/7 · Professional</p>
                  </div>
                </div>
                <div className="p-4 sm:p-7 flex flex-col gap-1.5 sm:gap-2">
                  {securityServices.map(({ icon: Icon, text }) => (
                    <div key={text} className="flex items-center gap-3 p-2.5 sm:p-3 rounded-xl hover:bg-[#EC1D8D]/5 transition-colors group">
                      <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-[#EC1D8D]/10 flex items-center justify-center flex-shrink-0">
                        <Icon className="text-[#EC1D8D]" style={{width:"17px",height:"17px"}} />
                      </div>
                      <span className="text-xs sm:text-sm font-semibold text-slate-700">{text}</span>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── GALLERY ────────────────────────────────────────────────────────── */}
      <section id="gallery" className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <Reveal>
            <div className="text-center mb-8 sm:mb-12">
              <SectionLabel text="Our Work" color="pink" />
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#0d1b2e] tracking-tight">Gallery</h2>
              <p className="text-slate-400 text-xs sm:text-sm mt-2">Swipe or use arrows — replace with your own photos</p>
            </div>
          </Reveal>
          <Reveal delay={80}>
            <Carousel />
          </Reveal>
        </div>
      </section>

      {/* ── PRICING ────────────────────────────────────────────────────────── */}
      <section id="pricing" className="py-16 sm:py-24 bg-[#0d1b2e]">
        <div className="max-w-2xl mx-auto px-4 sm:px-6">
          <Reveal>
            <div className="text-center mb-10 sm:mb-14">
              <SectionLabel text="Transparent Rates" color="blue" />
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight">Deep Cleaning Prices</h2>
              <p className="text-slate-400 mt-3 max-w-sm mx-auto text-sm leading-relaxed">
                Clear, upfront pricing — no hidden fees.
              </p>
            </div>
          </Reveal>
          <Reveal delay={100}>
            <div className="bg-[#0f2540] rounded-2xl sm:rounded-3xl border border-[#00AEEF]/15 overflow-hidden">
              <div className="h-1 bg-gradient-to-r from-[#00AEEF] via-[#EC1D8D] to-[#00AEEF]" />
              <div className="p-4 sm:p-8 flex flex-col gap-2.5 sm:gap-3">
                <PriceRow label="1 Bedroom House"        price="K700"   />
                <PriceRow label="2 Bedroom House"        price="K900"   />
                <PriceRow label="3 Bedroom House"        price="K1,200" />
                <PriceRow label="4 Bedroom House"        price="K1,400" />
                <PriceRow label="Large 5+ Bedroom House" price="K2,000" highlight />
              </div>
              <div className="bg-[#060f1c] px-4 sm:px-8 py-4 sm:py-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                <div className="flex items-start gap-2.5 text-slate-400 text-xs sm:text-sm">
                  <IconSparkle className="w-4 h-4 text-[#EC1D8D] flex-shrink-0 mt-0.5" />
                  <span>Top-to-bottom cleaning included in every service</span>
                </div>
                <button onClick={() => document.getElementById("contact")?.scrollIntoView({behavior:"smooth"})}
                  className="w-full sm:w-auto bg-[#EC1D8D] hover:bg-[#c4006e] text-white font-bold px-6 py-3 rounded-full transition-colors text-sm whitespace-nowrap">
                  Book a Service
                </button>
              </div>
            </div>
            <p className="text-center text-slate-500 text-xs sm:text-sm mt-4">
              Need a quote for commercial or security services?{" "}
              <button onClick={() => document.getElementById("contact")?.scrollIntoView({behavior:"smooth"})} className="text-[#00AEEF] font-bold hover:underline">
                Contact us
              </button>
            </p>
          </Reveal>
        </div>
      </section>

      {/* ── WHY CHOOSE US ──────────────────────────────────────────────────── */}
      <section className="py-14 sm:py-20 bg-[#EC1D8D]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <Reveal>
            <div className="text-center mb-8 sm:mb-12">
              <p className="text-white/60 text-xs font-black tracking-widest uppercase mb-2">Why Clients Trust Us</p>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-white tracking-tight">Why Choose Osides Solutions?</h2>
            </div>
          </Reveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-5">
            {whyUs.map((item, i) => (
              <Reveal key={item} delay={i * 50}>
                <div className="flex items-center gap-3 bg-white/10 hover:bg-white/20 border border-white/15 rounded-2xl px-4 py-4 transition-all">
                  <div className="w-9 h-9 bg-white/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <IconCheck className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-white font-bold text-sm">{item}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── TEAM ───────────────────────────────────────────────────────────── */}
      <section id="team" className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <Reveal>
            <div className="text-center mb-10 sm:mb-16">
              <SectionLabel text="Leadership" />
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#0d1b2e] tracking-tight">Management &amp; Leadership</h2>
              <p className="text-slate-500 mt-3 max-w-md mx-auto text-sm leading-relaxed">
                A strong leadership team ensuring the highest standards of integrity and client satisfaction.
              </p>
            </div>
          </Reveal>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 sm:gap-7 max-w-3xl mx-auto">
            {management.map(({ name, role, initials, color }, i) => (
              <Reveal key={name} delay={i * 80}>
                <div className="bg-white rounded-2xl sm:rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all p-6 sm:p-8 flex flex-col items-center text-center gap-4">
                  <div className={`w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-gradient-to-br ${color} flex items-center justify-center text-white text-xl sm:text-2xl font-black shadow-lg`}>
                    {initials}
                  </div>
                  <div>
                    <h3 className="font-black text-[#0d1b2e] leading-snug text-sm sm:text-base">{name}</h3>
                    <p className="text-[#00AEEF] text-xs font-bold mt-1.5 tracking-wide uppercase">{role}</p>
                  </div>
                  <div className="w-10 h-0.5 bg-gradient-to-r from-[#00AEEF] to-[#EC1D8D] rounded-full" />
                  <p className="text-slate-400 text-xs leading-relaxed">
                    Committed to delivering excellence and maintaining the highest standards across all operations.
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ───────────────────────────────────────────────────── */}
      <section className="py-14 sm:py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <Reveal>
            <div className="text-center mb-8 sm:mb-12">
              <SectionLabel text="Client Reviews" color="pink" />
              <h2 className="text-3xl sm:text-4xl font-black text-[#0d1b2e] tracking-tight">What Clients Say</h2>
            </div>
          </Reveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {[
              { name:"Chanda Mwale",  role:"Homeowner, Chalala",    text:"Osides transformed my 3-bedroom home. The team was punctual, thorough, and incredibly professional. My floors shine like never before!", rating:5 },
              { name:"Bupe Kapasa",   role:"Office Manager, Lusaka", text:"We use Osides for weekly office cleaning. Consistent, reliable, and our workspace has never looked better. Highly recommended.", rating:5 },
              { name:"Mutale Banda",  role:"Property Developer",     text:"After our construction project, Osides did a fantastic post-construction clean. Every bit of dust and debris removed — truly exceptional.", rating:5 },
            ].map((t,i) => (
              <Reveal key={t.name} delay={i * 80}>
                <TestCard {...t} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── LEGAL & COMPLIANCE ─────────────────────────────────────────────── */}
      <section className="py-14 sm:py-20 bg-[#0d1b2e]">
        <div className="max-w-2xl mx-auto px-4 sm:px-6">
          <Reveal>
            <div className="text-center mb-8 sm:mb-12">
              <SectionLabel text="Verified & Registered" color="blue" />
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-white tracking-tight">Legal &amp; Compliance</h2>
              <p className="text-slate-400 mt-2 text-xs sm:text-sm">Fully registered and compliant with Zambian law</p>
            </div>
          </Reveal>
          <Reveal delay={80}>
            <div className="bg-[#0f2540] rounded-2xl sm:rounded-3xl border border-[#00AEEF]/15 overflow-hidden">
              <div className="h-1 bg-gradient-to-r from-[#00AEEF] via-[#EC1D8D] to-[#00AEEF]" />
              <div className="divide-y divide-white/5">
                {legalInfo.map(({ label, value }) => (
                  <div key={label} className="flex items-start sm:items-center justify-between px-4 sm:px-8 py-3.5 sm:py-4 hover:bg-white/3 gap-3">
                    <span className="text-slate-400 text-xs sm:text-sm font-bold flex-shrink-0">{label}</span>
                    <span className="text-white font-black text-xs sm:text-sm text-right">{value}</span>
                  </div>
                ))}
              </div>
              <div className="px-4 sm:px-8 py-4 sm:py-5 bg-[#060f1c] flex items-start gap-3">
                <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-[#00AEEF]/15 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <IconCheck className="w-4 h-4 sm:w-5 sm:h-5 text-[#00AEEF]" />
                </div>
                <p className="text-slate-400 text-xs leading-relaxed">
                  Registered under <span className="text-white font-bold">PACRA</span> and fully compliant with the <span className="text-white font-bold">Zambia Revenue Authority (ZRA)</span>.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── CONTACT ────────────────────────────────────────────────────────── */}
      <section id="contact" className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          <Reveal>
            <div className="flex flex-col gap-6 sm:gap-8">
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <div className="h-0.5 w-8 bg-[#00AEEF] rounded-full" />
                  <span className="text-[#00AEEF] text-xs font-black tracking-widest uppercase">Get In Touch</span>
                </div>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#0d1b2e] tracking-tight leading-tight">
                  Ready to Book<br />a Service?
                </h2>
                <p className="text-slate-500 mt-4 leading-relaxed text-sm sm:text-base">
                  Contact us for a free quote or to schedule your service. We respond quickly and are always happy to help.
                </p>
              </div>

              {/* Contact items — tap-friendly on mobile */}
              <div className="flex flex-col gap-3 sm:gap-4">
                {[
                  { icon: IconPin,      label: "Address",  value: "Plot 2664, Rockfield, Chalala, Lusaka", href: null },
                  { icon: IconPhone,    label: "Phone",    value: "0977 319 756", href: "tel:0977319756" },
                  { icon: IconWhatsapp, label: "WhatsApp", value: "0965 319 756", href: "https://wa.me/260965319756" },
                  { icon: IconMail,     label: "Email",    value: "osidessolutions@gmail.com", href: "mailto:osidessolutions@gmail.com" },
                ].map(({ icon: Icon, label, value, href }) => {
                  const inner = (
                    <>
                      <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-[#00AEEF]/10 flex items-center justify-center flex-shrink-0">
                        <Icon className="w-5 h-5 text-[#00AEEF]" />
                      </div>
                      <div>
                        <p className="text-xs font-black text-slate-400 uppercase tracking-widest">{label}</p>
                        <p className="font-bold text-[#0d1b2e] text-sm mt-0.5">{value}</p>
                      </div>
                    </>
                  );
                  return href ? (
                    <a key={label} href={href} className="flex items-center gap-3 sm:gap-4 active:opacity-70">{inner}</a>
                  ) : (
                    <div key={label} className="flex items-center gap-3 sm:gap-4">{inner}</div>
                  );
                })}
              </div>

              <a href="https://wa.me/260965319756" target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-bold px-6 py-4 rounded-2xl transition-colors shadow-lg shadow-green-200 w-full sm:w-fit">
                <IconWhatsapp className="w-6 h-6" />
                Chat on WhatsApp
              </a>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <div className="bg-slate-50 rounded-2xl sm:rounded-3xl border border-slate-100 p-5 sm:p-8 shadow-sm">
              <h3 className="text-lg sm:text-xl font-black text-[#0d1b2e] mb-5 sm:mb-6">Send Us a Message</h3>
              <div className="flex flex-col gap-4">
                {/* Name row — stacked on tiny screens */}
                <div className="grid grid-cols-2 gap-3 sm:gap-4">
                  <div>
                    <label className="text-xs font-bold text-slate-500 uppercase tracking-widest block mb-2">First Name</label>
                    <input type="text" placeholder="Chanda" className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white text-sm font-medium focus:outline-none focus:border-[#00AEEF] focus:ring-2 focus:ring-[#00AEEF]/20 transition-all" />
                  </div>
                  <div>
                    <label className="text-xs font-bold text-slate-500 uppercase tracking-widest block mb-2">Last Name</label>
                    <input type="text" placeholder="Mwale" className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white text-sm font-medium focus:outline-none focus:border-[#00AEEF] focus:ring-2 focus:ring-[#00AEEF]/20 transition-all" />
                  </div>
                </div>
                <div>
                  <label className="text-xs font-bold text-slate-500 uppercase tracking-widest block mb-2">Phone / WhatsApp</label>
                  <input type="tel" placeholder="0977 000 000" className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white text-sm font-medium focus:outline-none focus:border-[#00AEEF] focus:ring-2 focus:ring-[#00AEEF]/20 transition-all" />
                </div>
                <div>
                  <label className="text-xs font-bold text-slate-500 uppercase tracking-widest block mb-2">Service Needed</label>
                  <select className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white text-sm font-medium focus:outline-none focus:border-[#00AEEF] focus:ring-2 focus:ring-[#00AEEF]/20 transition-all">
                    <option value="">Select a service...</option>
                    <optgroup label="Cleaning Services">
                      <option>Home Deep Cleaning</option>
                      <option>Office / Commercial Cleaning</option>
                      <option>Industrial Cleaning</option>
                      <option>Post-Construction Cleaning</option>
                      <option>Floor Polishing</option>
                      <option>Landscaping &amp; Grounds Maintenance</option>
                      <option>Garbage Collection &amp; Disposal</option>
                      <option>Pest Control</option>
                    </optgroup>
                    <optgroup label="Security Services">
                      <option>Manned Guarding</option>
                      <option>Event Security</option>
                      <option>Mobile Patrol</option>
                      <option>CCTV Installation &amp; Monitoring</option>
                      <option>Access Control</option>
                      <option>Car Tracking &amp; Alarms</option>
                      <option>Risk Assessment / Consultancy</option>
                    </optgroup>
                    <option>Other / Not Sure</option>
                  </select>
                </div>
                <div>
                  <label className="text-xs font-bold text-slate-500 uppercase tracking-widest block mb-2">Message</label>
                  <textarea rows={4} placeholder="Tell us about your property and what you need..." className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white text-sm font-medium focus:outline-none focus:border-[#00AEEF] focus:ring-2 focus:ring-[#00AEEF]/20 transition-all resize-none" />
                </div>
                <button className="w-full bg-[#EC1D8D] hover:bg-[#c4006e] active:scale-[0.98] text-white font-black py-4 rounded-xl transition-all text-sm tracking-wide shadow-lg shadow-pink-100 mt-1">
                  Send Message
                </button>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── FOOTER ─────────────────────────────────────────────────────────── */}
      <footer className="bg-[#0d1b2e] border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10 sm:py-14">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 sm:gap-10 mb-8 sm:mb-10">
            {/* Brand */}
            <div className="sm:col-span-2 flex flex-col gap-4">
              <div className="flex items-center gap-3">
                <OsidesLogo className="w-12 h-10" />
                <div>
                  <p className="font-black text-white text-sm tracking-widest uppercase leading-none">Osides Solutions Limited</p>
                  <p className="text-[9px] text-[#00AEEF] font-bold tracking-widest uppercase mt-1">Making your places better</p>
                </div>
              </div>
              <p className="text-slate-400 text-sm leading-relaxed max-w-xs">
                A Zambian-owned company delivering professional cleaning and reliable security services across Lusaka. Est. 27 July 2025.
              </p>
              <div className="flex flex-wrap gap-2">
                {["PACRA Registered","ZRA Compliant","Zambian-Owned"].map((t) => (
                  <span key={t} className="text-xs text-[#00AEEF] bg-[#00AEEF]/10 border border-[#00AEEF]/20 px-3 py-1 rounded-full font-bold">{t}</span>
                ))}
              </div>
            </div>
            {/* Quick Links */}
            <div>
              <p className="text-xs font-black tracking-widest text-slate-500 uppercase mb-4 sm:mb-5">Quick Links</p>
              <div className="grid grid-cols-2 sm:grid-cols-1 gap-y-3 gap-x-4">
                {navLinks.map((l) => (
                  <button key={l.id} onClick={() => scrollTo(l.id)} className="text-slate-400 hover:text-[#00AEEF] text-sm font-medium transition-colors text-left">{l.label}</button>
                ))}
              </div>
            </div>
            {/* Contact */}
            <div>
              <p className="text-xs font-black tracking-widest text-slate-500 uppercase mb-4 sm:mb-5">Contact</p>
              <div className="flex flex-col gap-3">
                {[
                  { icon: IconPin,   v: "Plot 2664, Rockfield, Chalala, Lusaka", href: null },
                  { icon: IconPhone, v: "0977 319 756", href: "tel:0977319756" },
                  { icon: IconPhone, v: "0965 319 756", href: "tel:0965319756" },
                  { icon: IconMail,  v: "osidessolutions@gmail.com", href: "mailto:osidessolutions@gmail.com" },
                ].map(({ icon: Icon, v, href }) => {
                  const content = (
                    <>
                      <Icon className="w-4 h-4 text-[#00AEEF] mt-0.5 flex-shrink-0" />
                      <span className="text-slate-400 text-sm font-medium break-all">{v}</span>
                    </>
                  );
                  return href ? (
                    <a key={v} href={href} className="flex items-start gap-2.5 hover:text-[#00AEEF] active:opacity-70">{content}</a>
                  ) : (
                    <div key={v} className="flex items-start gap-2.5">{content}</div>
                  );
                })}
              </div>
            </div>
          </div>

          <div className="pt-6 sm:pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4 text-center sm:text-left">
            <p className="text-slate-500 text-xs">
              © {new Date().getFullYear()} <span className="text-white/60 font-bold">Osides Solutions Limited</span>. All rights reserved.
            </p>
            <div className="flex items-center gap-2">
              {["Reliable","Professional","Affordable"].map((t, i) => (
                <span key={t}>
                  <span className="text-xs text-slate-500 font-bold">{t}</span>
                  {i < 2 && <span className="text-[#EC1D8D] mx-1.5 text-xs">•</span>}
                </span>
              ))}
            </div>
          </div>
        </div>
      </footer>

    </div>
  );
}