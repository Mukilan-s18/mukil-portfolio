import { Menu, X, ArrowUpRight } from "lucide-react";
import { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";
import favicon from "/favicon.png";

import heroEye from "@/assets/hero-portrait.png";

import WelcomeScreen from "@/components/WelcomeScreen";
import FrontendDeveloperSection from "@/components/FrontendDeveloperSection";
import Showcase from "./components/Showcase";
import ContactSection from "@/components/ContactSection";
import { Routes, Route } from "react-router-dom";
import About from "./pages/About";

const scrollTo = (id: string) =>
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

export default function App() {
  const [showWelcome, setShowWelcome] = useState(true);
  const [time, setTime] = useState("");
  const [mobileMenu, setMobileMenu] = useState(false);

  /* — typing effect for hero name — */
  const heroName = "MUKILAN";
  const [displayed, setDisplayed] = useState("");

  useEffect(() => {
    const timer = setTimeout(() => setShowWelcome(false), 5000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (showWelcome || mobileMenu) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => { document.body.style.overflow = "auto"; };
  }, [showWelcome, mobileMenu]);

  /* live clock */
  useEffect(() => {
    const update = () =>
      setTime(new Date().toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit", hour12: true }));
    update();
    const id = setInterval(update, 1000);
    return () => clearInterval(id);
  }, []);

  /* typing effect */
  useEffect(() => {
    let i = 0;
    setDisplayed("");
    const type = () => {
      setDisplayed(heroName.slice(0, i + 1));
      i++;
      if (i < heroName.length) setTimeout(type, 140);
    };
    type();
  }, []);

  const navLinks = [
    { label: "HOME", id: "Home" },
    { label: "ABOUT", id: "about" },
    { label: "SHOWCASE", id: "showcase" },
    { label: "CONTACT", id: "contact" },
  ];

  return (
    <Routes>
      <Route
        path="/"
        element={
          <div className="min-h-screen bg-black text-white overflow-x-hidden" style={{ fontFamily: "Poppins, sans-serif" }}>

            {/* ── WELCOME SCREEN ── */}
            <AnimatePresence>{showWelcome && <WelcomeScreen />}</AnimatePresence>

            {/* ══════════════════════════════════════════════
                NAV — exact replica of Prince Singh template
            ══════════════════════════════════════════════ */}
            <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-10 py-4 bg-black/80 backdrop-blur-md border-b border-white/[0.06]">

              {/* Logo */}
              <div className="flex items-center gap-2 cursor-pointer" onClick={() => scrollTo("Home")}>
                <img src={favicon} alt="Logo" className="w-7 h-7 rounded-full object-cover" />
                <span className="text-[11px] tracking-[0.28em] text-white/70 uppercase font-semibold font-mono">
                  MUKILAN · AI/ML
                </span>
              </div>

              {/* Desktop nav */}
              <ul className="hidden md:flex items-center gap-9 text-[11px] tracking-[0.22em] text-white/60 uppercase font-mono">
                {navLinks.map(({ label, id }) => (
                  <li
                    key={id}
                    onClick={() => scrollTo(id)}
                    className="relative cursor-pointer hover:text-white transition-colors duration-200 after:absolute after:left-0 after:-bottom-1 after:h-[1px] after:w-0 after:bg-white after:transition-all after:duration-300 hover:after:w-full"
                  >
                    {label}
                  </li>
                ))}
              </ul>

              {/* Clock (desktop) */}
              <div className="hidden md:block text-[11px] tracking-[0.28em] text-white/50 uppercase font-mono">
                {time}
              </div>

              {/* Mobile hamburger */}
              <button onClick={() => setMobileMenu(!mobileMenu)} className="md:hidden text-white z-50">
                {mobileMenu ? <X size={22} /> : <Menu size={22} />}
              </button>
            </nav>

            {/* Mobile Menu */}
            {mobileMenu && (
              <div className="fixed inset-0 z-40 bg-black/98 backdrop-blur-xl flex flex-col items-center justify-center gap-9 text-white uppercase tracking-[0.3em] text-sm font-mono md:hidden">
                <div className="absolute top-24 text-center">
                  <p className="text-[10px] text-white/30 tracking-[0.3em] mb-1">TIME</p>
                  <h2 className="text-xl tracking-widest font-semibold">{time}</h2>
                </div>
                {navLinks.map(({ label, id }) => (
                  <button
                    key={id}
                    onClick={() => { scrollTo(id); setMobileMenu(false); }}
                    className="relative after:absolute after:left-0 after:-bottom-2 after:h-[1px] after:w-0 after:bg-white after:transition-all hover:after:w-full hover:text-white/80 transition-colors"
                  >
                    {label}
                  </button>
                ))}
              </div>
            )}

            {/* ══════════════════════════════════════════════
                HERO — Giant name + portrait + tagline right
            ══════════════════════════════════════════════ */}
            <section id="Home" className="relative w-full h-screen min-h-[640px] overflow-hidden bg-black">

              {/* Portrait — centered, full-bleed, fades into black */}
              <div className="absolute inset-0 flex items-center justify-center">
                <img
                  src={heroEye}
                  alt="Mukilan portrait"
                  className="h-full w-full object-cover object-center"
                  style={{
                    maskImage: "radial-gradient(ellipse 60% 80% at 50% 50%, black 40%, transparent 100%)",
                    WebkitMaskImage: "radial-gradient(ellipse 60% 80% at 50% 50%, black 40%, transparent 100%)",
                  }}
                />
              </div>

              {/* Blue vignette edges matching template */}
              <div className="pointer-events-none absolute inset-0">
                <div className="absolute left-0 top-0 bottom-0 w-1/3 bg-gradient-to-r from-black to-transparent" />
                <div className="absolute right-0 top-0 bottom-0 w-1/3 bg-gradient-to-l from-black to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-black to-transparent" />
                <div className="absolute top-0 left-0 right-0 h-1/4 bg-gradient-to-b from-black to-transparent" />
              </div>

              {/* Content overlay */}
              <div className="relative z-10 w-full h-full flex flex-col justify-between px-6 md:px-10 pt-24 pb-10">

                {/* Top-left: Giant name (Anton font like template) */}
                <h1
                  className="uppercase leading-[0.82] tracking-[-0.02em] select-none"
                  style={{
                    fontFamily: "Anton, Impact, Arial Black, sans-serif",
                    fontSize: "clamp(100px, 18vw, 230px)",
                    background: "linear-gradient(to bottom, rgba(255,255,255,0.95) 0%, rgba(255,255,255,0.4) 70%, transparent 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  {displayed || "\u00A0"}
                </h1>

                {/* Top-right: Bold serif tagline */}
                <p
                  className="absolute top-28 right-8 md:right-12 text-right leading-[1.1] max-w-xs md:max-w-sm font-bold"
                  style={{
                    fontFamily: "Poppins, sans-serif",
                    fontSize: "clamp(22px, 3.5vw, 48px)",
                    color: "rgba(255,255,255,0.9)",
                  }}
                >
                  Building AI<br />That Feels<br />Intelligent.
                </p>

                {/* Bottom row: tagline left + GitHub button right */}
                <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mt-auto">
                  <p
                    className="text-sm md:text-base lg:text-lg leading-relaxed max-w-sm"
                    style={{ color: "rgba(255,255,255,0.65)", fontFamily: "Poppins, sans-serif" }}
                  >
                    Turning complex data into intelligent models and{" "}
                    <em className="not-italic text-white font-semibold">
                      high-quality applications.
                    </em>
                  </p>

                  <a
                    href="https://github.com/Mukilan-s18"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <button
                      className="inline-flex items-center gap-2 border text-white px-6 py-3 text-[11px] tracking-[0.22em] uppercase font-semibold hover:bg-white hover:text-black transition-all duration-300 rounded-full font-mono"
                      style={{ borderColor: "rgba(255,255,255,0.35)" }}
                    >
                      GITHUB
                      <ArrowUpRight size={14} />
                    </button>
                  </a>
                </div>
              </div>
            </section>

            {/* ── MARQUEE TICKER ── */}
            <div className="bg-black border-t border-b border-white/[0.07] py-4 overflow-hidden">
              <div className="flex items-center gap-14 animate-marquee whitespace-nowrap">
                {[...Array(6)].flatMap(() =>
                  ["MUKILAN", "AI/ML", "FULL-STACK", "PYTORCH", "FASTAPI", "LANGGRAPH", "NEXT.JS", "DOCKER"].map((t, i) => (
                    <span key={`${t}-${i}`} className="text-white/30 text-[10px] tracking-[0.35em] uppercase font-mono">
                      {t}
                    </span>
                  ))
                )}
              </div>
            </div>

            {/* ── SECTIONS ── */}
            <section id="about">
              <FrontendDeveloperSection />
            </section>
            <section id="showcase">
              <Showcase />
            </section>
            <section id="contact">
              <ContactSection />
            </section>
          </div>
        }
      />
      <Route path="/about" element={<About />} />
    </Routes>
  );
}