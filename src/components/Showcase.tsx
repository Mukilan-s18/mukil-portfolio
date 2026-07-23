import { useState, useRef, useCallback, useEffect } from "react";
import { techStack, projects, certificates, honours } from "../data/portfolioData";

const GithubIcon = () => (
  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
  </svg>
);

const DownloadIcon = () => (
  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 16l4-5h-3V4h-2v7H8l4 5zm-8 4h16v-2H4v2z" />
  </svg>
);

const Spinner = () => (
  <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
    <path
      d="M12 2v4m0 12v4m10-10h-4M6 12H2"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    />
  </svg>
);

function ProjectCard({ item }: { item: typeof projects[0] }) {
  const [imgSrc, setImgSrc] = useState(item.thumbnail);
  const fallback = "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?q=80&w=2070&auto=format&fit=crop";

  return (
    <div
      className="group relative rounded-2xl border border-white/15 overflow-hidden bg-white/[0.06]
      hover:border-white/25 transition-all duration-500
      hover:-translate-y-2 hover:shadow-2xl hover:shadow-white/10 backdrop-blur-md"
      style={{ backdropFilter: "blur(20px)" }}
    >
      <div className="relative h-48 overflow-hidden bg-white/5">
        <img
          src={imgSrc}
          alt={item.title}
          onError={() => setImgSrc(fallback)}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
        <div className="absolute bottom-4 left-4 right-4">
          <p className="text-white font-semibold text-sm leading-snug line-clamp-2">{item.title}</p>
        </div>
      </div>
      <div className="px-5 py-4 flex items-center justify-between">
        <span className="text-[10px] uppercase tracking-[0.25em] text-white/40 font-mono">
          {item.tech}
        </span>
        <a
          href={item.github}
          target="_blank"
          rel="noopener noreferrer"
          className="w-8 h-8 rounded-full border border-white/20 bg-white/10 flex items-center justify-center
          text-white/60 hover:text-white hover:border-white/40 transition-colors"
        >
          <GithubIcon />
        </a>
      </div>
    </div>
  );
}

function HonourCard({ item }: { item: typeof honours[0] }) {
  const [downloading, setDownloading] = useState(false);

  const handleDownload = () => {
    setDownloading(true);
    const link = document.createElement("a");
    link.href = item.fileUrl;
    link.download = `${item.title.replace(/[^a-zA-Z0-9]/g, "_")}.jpg`;
    link.target = "_blank";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    setTimeout(() => setDownloading(false), 500);
  };

  return (
    <div
      className="group relative rounded-2xl border border-amber-500/30 overflow-hidden bg-gradient-to-b from-amber-500/10 via-white/[0.05] to-black/60
      hover:border-amber-400/50 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-amber-500/20 backdrop-blur-md"
      style={{ backdropFilter: "blur(20px)" }}
    >
      <div className="relative h-64 overflow-hidden bg-black/40">
        <img
          src={item.thumbnail}
          alt={item.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
        <div className="absolute top-3 left-3 bg-amber-400/20 border border-amber-400/40 backdrop-blur-md text-amber-300 text-[11px] font-semibold px-3 py-1 rounded-full flex items-center gap-1.5 shadow-lg">
          <span>🏆</span>
          <span>{item.award}</span>
        </div>
        <div className="absolute bottom-4 left-4 right-4">
          <p className="text-amber-200 text-xs font-mono mb-1">{item.issuer} • {item.date}</p>
          <p className="text-white font-bold text-base leading-snug">{item.title}</p>
        </div>
      </div>
      <div className="px-5 py-4 flex items-center justify-between gap-4">
        <p className="text-xs text-white/60 line-clamp-2 leading-relaxed">{item.description}</p>
        <button
          onClick={handleDownload}
          disabled={downloading}
          className="w-9 h-9 shrink-0 rounded-full border border-amber-400/30 bg-amber-500/20 flex items-center justify-center
          text-amber-200 hover:text-white hover:bg-amber-500/40 hover:border-amber-400 transition-colors"
          title="Download Certificate"
        >
          {downloading ? <Spinner /> : <DownloadIcon />}
        </button>
      </div>
    </div>
  );
}

function CertCard({ item }: { item: typeof certificates[0] }) {
  const [downloading, setDownloading] = useState(false);

  const handleDownload = () => {
    setDownloading(true);
    const link = document.createElement("a");
    link.href = item.fileUrl;
    link.download = `${item.title.replace(/[^a-zA-Z0-9]/g, "_")}.jpg`;
    link.target = "_blank";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    setTimeout(() => setDownloading(false), 500);
  };

  return (
    <div
      className="group relative rounded-2xl border border-white/15 overflow-hidden bg-white/[0.06]
      hover:border-white/25 transition-all duration-500
      hover:-translate-y-2 hover:shadow-2xl hover:shadow-white/10 backdrop-blur-md"
      style={{ backdropFilter: "blur(20px)" }}
    >
      <div className="relative h-48 overflow-hidden bg-white/5">
        <img
          src={item.thumbnail}
          alt={item.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
        <div className="absolute bottom-4 left-4 right-4">
          <p className="text-white font-semibold text-sm leading-snug line-clamp-2">{item.title}</p>
        </div>
      </div>
      <div className="px-5 py-4 flex items-center justify-between">
        <span className="text-[10px] uppercase tracking-[0.25em] text-white/40 font-mono">
          {item.tech}
        </span>
        <button
          onClick={handleDownload}
          disabled={downloading}
          className="w-8 h-8 rounded-full border border-white/20 bg-white/10 flex items-center justify-center
          text-white/60 hover:text-white hover:border-white/40 transition-colors"
        >
          {downloading ? <Spinner /> : <DownloadIcon />}
        </button>
      </div>
    </div>
  );
}

function TechGrid() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [rotX, setRotX] = useState(-0.1);
  const [rotY, setRotY] = useState(0);
  const isDragging = useRef(false);
  const lastMouse = useRef({ x: 0, y: 0 });
  const velX = useRef(0);
  const velY = useRef(0.004);
  const rotXRef = useRef(-0.1);
  const rotYRef = useRef(0);
  const itemEls = useRef<(HTMLDivElement | null)[]>([]);

  const RADIUS = 150;
  const n = techStack.length;

  const positions = useRef<{ x: number; y: number; z: number }[]>([]);
  useEffect(() => {
    const goldenAngle = Math.PI * (3 - Math.sqrt(5));
    positions.current = Array.from({ length: n }, (_, i) => {
      const y = 1 - (i / (n - 1)) * 2;
      const r = Math.sqrt(1 - y * y);
      const theta = goldenAngle * i;
      return { x: Math.cos(theta) * r, y, z: Math.sin(theta) * r };
    });
  }, []);

  function project(pos: { x: number; y: number; z: number }, rx: number, ry: number) {
    const cosY = Math.cos(ry), sinY = Math.sin(ry);
    const x1 = pos.x * cosY - pos.z * sinY;
    const z1 = pos.x * sinY + pos.z * cosY;
    const cosX = Math.cos(rx), sinX = Math.sin(rx);
    const y2 = pos.y * cosX - z1 * sinX;
    const z2 = pos.y * sinX + z1 * cosX;
    return { x: x1, y: y2, z: z2 };
  }

  useEffect(() => {
    const els = itemEls.current;

    function render() {
      if (!isDragging.current) {
        rotYRef.current += velY.current;
        rotXRef.current += velX.current;
        velX.current *= 0.97;
        velY.current = velY.current * 0.99 + 0.004 * 0.01;
        if (rotXRef.current > 0.6) velX.current -= 0.0005;
        if (rotXRef.current < -0.1) velX.current += 0.0005;
      }

      const projected = positions.current.map((pos, i) => ({
        el: els[i],
        p: project(pos, rotXRef.current, rotYRef.current),
      }));

      projected
        .slice()
        .sort((a, b) => a.p.z - b.p.z)
        .forEach(({ el, p }, idx) => {
          if (!el) return;
          const x = p.x * RADIUS + 210 - 36;
          const y = p.y * RADIUS + 210 - 36;
          const depth = (p.z + 1) / 2;
          const opacity = 0.25 + depth * 0.75;
          const scale = 0.55 + depth * 0.55;

          el.style.transform = `translate3d(${x}px, ${y}px, 0px) scale(${scale})`;
          el.style.opacity = String(opacity);
          el.style.zIndex = String(Math.floor(depth * 100));
        });

      requestAnimationFrame(render);
    }

    const animId = requestAnimationFrame(render);
    return () => cancelAnimationFrame(animId);
  }, []);

  const handlePointerDown = (e: React.PointerEvent) => {
    isDragging.current = true;
    lastMouse.current = { x: e.clientX, y: e.clientY };
    (e.target as HTMLElement).setPointerCapture?.(e.pointerId);
  };

  const handlePointerMove = (e: React.PointerEvent) => {
    if (!isDragging.current) return;
    const dx = e.clientX - lastMouse.current.x;
    const dy = e.clientY - lastMouse.current.y;
    lastMouse.current = { x: e.clientX, y: e.clientY };

    const vx = -dy * 0.005;
    const vy = dx * 0.005;

    rotXRef.current = Math.max(-0.8, Math.min(0.8, rotXRef.current + vx));
    rotYRef.current += vy;

    velX.current = vx;
    velY.current = vy;
  };

  const handlePointerUp = (e: React.PointerEvent) => {
    isDragging.current = false;
  };

  return (
    <div className="w-full flex flex-col items-center">
      <div
        ref={containerRef}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        className="relative w-[420px] h-[420px] cursor-grab active:cursor-grabbing touch-none flex items-center justify-center select-none"
      >
        <div className="absolute w-[300px] h-[300px] rounded-full border border-white/5 bg-white/[0.01] pointer-events-none" />
        <div className="absolute w-[200px] h-[200px] rounded-full border border-white/10 pointer-events-none" />

        {techStack.map((tech, i) => (
          <div
            key={i}
            ref={(el) => { itemEls.current[i] = el; }}
            className="absolute top-0 left-0 w-18 h-18 rounded-2xl border border-white/20 bg-white/10
            backdrop-blur-md flex flex-col items-center justify-center gap-1.5 p-2 shadow-xl shadow-black/40
            hover:border-white/50 transition-colors pointer-events-auto"
            title={tech.name}
          >
            <img src={tech.icon} alt={tech.name} className="w-7 h-7 object-contain" />
            <span className="text-[10px] font-medium text-white/80 leading-none text-center truncate max-w-full">
              {tech.name}
            </span>
          </div>
        ))}
      </div>
      <p className="text-[11px] text-white/30 uppercase tracking-[0.25em] font-mono -mt-4">
        Drag to rotate sphere
      </p>
    </div>
  );
}

type TabId = "projects" | "honours" | "certificates" | "tech";

const tabs: { id: TabId; label: string }[] = [
  { id: "projects", label: "Projects" },
  { id: "honours", label: "Honours & Awards" },
  { id: "certificates", label: "Certifications" },
  { id: "tech", label: "Tech Stack" },
];

export default function ShowcaseSection() {
  const [active, setActive] = useState<TabId>("projects");
  const [animKey, setAnimKey] = useState(0);
  const touchStartX = useRef<number | null>(null);

  const switchTab = useCallback(
    (id: TabId) => {
      if (id === active) return;
      setActive(id);
      setAnimKey((k) => k + 1);
    },
    [active]
  );

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const dx = e.changedTouches[0].clientX - touchStartX.current;
    if (Math.abs(dx) < 50) return;
    const order = tabs.map((t) => t.id);
    const idx = order.indexOf(active);
    if (dx < 0 && idx < order.length - 1) switchTab(order[idx + 1]);
    if (dx > 0 && idx > 0) switchTab(order[idx - 1]);
    touchStartX.current = null;
  };

  const activePillLeft =
    active === "projects"
      ? "6px"
      : active === "honours"
      ? "calc(25% + 4px)"
      : active === "certificates"
      ? "calc(50% + 2px)"
      : "calc(75% + 0px)";

  return (
    <section className="relative w-full min-h-[85vh] md:min-h-screen bg-black overflow-hidden text-white px-4 sm:px-8 md:px-16 lg:px-24 py-0 md:py-12 -mt-16 sm:mt-0 md:mt-12">
      <div className="relative z-10 flex flex-col items-center max-w-6xl mx-auto">
        <div className="relative flex items-center justify-center gap-4 mb-5 opacity-0 animate-[fadeSlideDown_0.8s_ease_forwards]">
          <div className="relative overflow-hidden">
            <div className="w-10 h-px bg-white/20" />
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/80 to-transparent animate-[lineMove_2s_linear_infinite]" />
          </div>
          <span className="text-[10px] uppercase tracking-[0.45em] text-white/35 font-mono">
            Showcase
          </span>
          <div className="relative overflow-hidden">
            <div className="w-10 h-px bg-white/20" />
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/80 to-transparent animate-[lineMove_2s_linear_infinite]" />
          </div>
        </div>

        <div className="relative overflow-hidden mb-12">
          <h1
            className="text-center font-black tracking-tight leading-none drop-shadow-[0_0_25px_rgba(255,255,255,0.15)] text-white opacity-0 whitespace-nowrap animate-[headingReveal_1s_cubic-bezier(0.22,1,0.36,1)_0.15s_forwards]"
            style={{ fontSize: "clamp(32px,6vw,80px)" }}
          >
            <span className="inline-block bg-gradient-to-b from-white via-white to-white/45 bg-clip-text text-transparent">
              Portfolio Showcase
            </span>
          </h1>
        </div>

        <div
          className="relative flex items-center p-1.5 rounded-full border border-white/20 bg-white/[0.08] mb-14 w-full max-w-xl opacity-0 animate-[fadeSlideUp_0.6s_ease_0.3s_forwards] shadow-2xl shadow-black/40 overflow-x-auto sm:overflow-visible"
          style={{ backdropFilter: "blur(30px)" }}
        >
          <div
            className="absolute top-1.5 bottom-1.5 rounded-full bg-white/20 border border-white/40 transition-[left] duration-300 ease-out shadow-xl shadow-white/10"
            style={{
              width: "calc(25% - 4px)",
              left: activePillLeft,
              backdropFilter: "blur(15px)",
            }}
          />
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => switchTab(tab.id)}
              className="relative z-10 flex-1 h-12 rounded-full text-xs font-medium tracking-wide transition-colors duration-200"
            >
              <span
                className={
                  active === tab.id
                    ? "text-white font-semibold"
                    : "text-white/35 hover:text-white/60"
                }
              >
                {tab.label}
              </span>
            </button>
          ))}
        </div>

        <div
          key={animKey}
          className="w-full opacity-0 animate-[contentIn_0.5s_cubic-bezier(0.22,1,0.36,1)_forwards]"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          {active === "projects" && (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
              {projects.map((item, i) => (
                <div
                  key={i}
                  className="opacity-0"
                  style={{ animation: `fadeSlideUp 0.5s ease ${i * 0.08}s forwards` }}
                >
                  <ProjectCard item={item} />
                </div>
              ))}
            </div>
          )}

          {active === "honours" && (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {honours.map((item, i) => (
                <div
                  key={i}
                  className="opacity-0"
                  style={{ animation: `fadeSlideUp 0.5s ease ${i * 0.08}s forwards` }}
                >
                  <HonourCard item={item} />
                </div>
              ))}
            </div>
          )}

          {active === "certificates" && (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
              {certificates.map((item, i) => (
                <div
                  key={i}
                  className="opacity-0"
                  style={{ animation: `fadeSlideUp 0.5s ease ${i * 0.08}s forwards` }}
                >
                  <CertCard item={item} />
                </div>
              ))}
            </div>
          )}

          {active === "tech" && (
            <div
              className="opacity-0"
              style={{ animation: "fadeSlideUp 0.5s ease forwards" }}
            >
              <TechGrid />
            </div>
          )}
        </div>
      </div>

      <style>{`
        @keyframes fadeSlideDown {
          from { opacity: 0; transform: translateY(-16px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeSlideUp {
          from { opacity: 0; transform: translateY(24px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes contentIn {
          from { opacity: 0; transform: translateY(32px) scale(0.98); }
          to   { opacity: 1; transform: translateY(0) scale(1); }
        }
        @keyframes headingReveal {
          from { opacity: 0; transform: translateY(20px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes lineMove {
          from { transform: translateX(-100%); }
          to   { transform: translateX(100%); }
        }
      `}</style>
    </section>
  );
}
