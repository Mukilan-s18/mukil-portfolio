import { useEffect, useRef, useState, lazy, Suspense } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";

const BandCard = lazy(() => import("./BandCard"));

export default function FrontendDeveloperSection() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { amount: 0.3 });

  const [showCard, setShowCard] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [goAbout, setGoAbout] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    setMounted(true);
    // Preload 3D Card chunk and texture in background so clicking "Show Card" opens instantly
    import("./BandCard");
    const img = new Image();
    img.src = "/assets/id-card.png";
  }, []);

  useEffect(() => {
    if (goAbout) {
      const t = setTimeout(() => navigate("/about"), 1800);
      return () => clearTimeout(t);
    }
  }, [goAbout, navigate]);

  return (
    <motion.section
      ref={ref}
      id="frontend"
      initial={{ x: 0, scale: 1, opacity: 1, filter: "blur(0px)" }}
      animate={
        goAbout
          ? { x: "-40vw", scale: 0.92, opacity: 0, filter: "blur(8px)" }
          : { x: 0, scale: 1, opacity: 1, filter: "blur(0px)" }
      }
      transition={{ duration: 1.8, ease: [0.16, 1, 0.3, 1] }}
      className="relative w-full min-h-screen bg-black text-white overflow-hidden flex items-start px-6 md:px-20 pt-20 md:pt-32 pb-20 select-none"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[40vw] h-[70vh] bg-blue-700/10 blur-[120px] rounded-full" />
      </div>

      <div className="relative z-10 max-w-2xl">

        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="flex items-center gap-2 mb-8"
        >
          <motion.span
            animate={{ width: ["0ch", "22ch", "22ch", "0ch"] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", times: [0, 0.3, 0.8, 1] }}
            className="inline-block overflow-hidden whitespace-nowrap text-[11px] tracking-[0.3em] uppercase text-white/60 font-mono"
          >
            ✦ Available for work
          </motion.span>
          <motion.span
            animate={{ opacity: [1, 0, 1] }}
            transition={{ duration: 0.8, repeat: Infinity }}
            className="text-white/60 font-mono"
          >|</motion.span>
        </motion.div>

        <div>
          <motion.h1
            initial={{ opacity: 0, y: 60 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="font-extrabold leading-[1.0] tracking-tight text-white"
            style={{
              fontFamily: "Poppins, sans-serif",
              fontSize: "clamp(52px, 8vw, 110px)",
            }}
          >
            AI/ML &
          </motion.h1>

          <motion.h1
            initial={{ opacity: 0, x: -80 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="font-extrabold leading-[1.0] tracking-tight mb-8"
            style={{
              fontFamily: "Poppins, sans-serif",
              fontSize: "clamp(52px, 8vw, 110px)",
              color: "rgba(255,255,255,0.45)",
            }}
          >
            Developer
          </motion.h1>
        </div>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, delay: 0.4 }}
          className="text-base md:text-lg leading-relaxed max-w-md mb-7"
          style={{ color: "rgba(255,255,255,0.6)", fontFamily: "Poppins, sans-serif" }}
        >
          Building production-ready ML models &amp; intelligent full-stack apps.
          From edge AI to agentic pipelines - turning complex data into real solutions.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, delay: 0.55 }}
          className="flex flex-wrap gap-3 mb-9"
        >
          {["Python", "PyTorch", "FastAPI", "LangGraph", "Next.js"].map((tech) => (
            <span
              key={tech}
              className="px-5 py-2 rounded-full text-sm font-medium text-white/90 border border-white/15 bg-white/5 hover:border-white/30 hover:bg-white/10 transition-all duration-200 cursor-default"
              style={{ fontFamily: "Poppins, sans-serif" }}
            >
              {tech}
            </span>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, delay: 0.7 }}
          className="flex flex-wrap gap-4"
        >
          <button
            onClick={() => setShowCard((s) => !s)}
            className="px-7 py-3 rounded-full text-xs font-bold uppercase tracking-[0.2em] transition-all duration-200"
            style={{
              border: "1.5px solid #f97316",
              color: "#f97316",
              background: "transparent",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLButtonElement).style.background = "#f97316";
              (e.currentTarget as HTMLButtonElement).style.color = "#000";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLButtonElement).style.background = "transparent";
              (e.currentTarget as HTMLButtonElement).style.color = "#f97316";
            }}
          >
            {showCard ? "Hide Card" : "Show Card"}
          </button>

          <button
            onClick={() => setGoAbout(true)}
            className="px-7 py-3 rounded-full text-xs font-bold uppercase tracking-[0.2em] border border-white/30 text-white hover:bg-white hover:text-black transition-all duration-200"
            style={{ fontFamily: "Poppins, sans-serif" }}
          >
            About Me
          </button>
        </motion.div>
      </div>

      <AnimatePresence>
        {showCard && mounted && (
          <motion.div
            initial={{ y: "-100%", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: "-100%", opacity: 0 }}
            transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
            className="absolute inset-0 z-[5] pointer-events-none"
          >
            <Suspense fallback={null}>
              <BandCard />
            </Suspense>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.section>
  );
}