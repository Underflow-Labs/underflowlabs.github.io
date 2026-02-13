import { Link } from "react-router-dom";
import { PointerEventHandler, useEffect, useRef, useState } from "react";
import {
  motion,
  useMotionValue,
  useReducedMotion,
  useScroll,
  useSpring,
} from "framer-motion";
import { BOOK_CALL_URL } from "../../config/links";
import { HeroFlowVisual } from "../ui/HeroFlowVisual";

const primaryCtaClasses =
  "signal-sweep inline-flex items-center justify-center rounded-xl bg-accent-primary px-5 py-3 text-sm font-semibold tracking-wide text-bg-primary shadow-signal transition-all duration-200 hover:-translate-y-0.5";

const secondaryCtaClasses =
  "inline-flex items-center justify-center rounded-xl border border-border-base bg-transparent px-5 py-3 text-sm font-semibold tracking-wide text-text-primary transition-all duration-200 hover:border-border-hover hover:bg-bg-surface";

export function HomeHeroSection() {
  const heroRef = useRef<HTMLElement | null>(null);
  const prefersReducedMotion = useReducedMotion();
  const [hasFinePointer, setHasFinePointer] = useState(false);

  const pointerXRaw = useMotionValue(0);
  const pointerYRaw = useMotionValue(0);
  const pointerX = useSpring(pointerXRaw, { stiffness: 90, damping: 20, mass: 0.5 });
  const pointerY = useSpring(pointerYRaw, { stiffness: 90, damping: 20, mass: 0.5 });

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  useEffect(() => {
    if (typeof window === "undefined") return;

    const media = window.matchMedia("(pointer: fine)");
    const apply = () => setHasFinePointer(media.matches);

    apply();
    media.addEventListener("change", apply);
    return () => media.removeEventListener("change", apply);
  }, []);

  const easing: [number, number, number, number] = [0.22, 1, 0.36, 1];
  const getTransition = (delay = 0) =>
    prefersReducedMotion
      ? { duration: 0 }
      : { duration: 0.52, delay, ease: easing };

  const handlePointerMove: PointerEventHandler<HTMLElement> = (event) => {
    if (prefersReducedMotion || !hasFinePointer || event.pointerType !== "mouse") return;

    const rect = event.currentTarget.getBoundingClientRect();
    const nextX = ((event.clientX - rect.left) / rect.width) * 2 - 1;
    const nextY = ((event.clientY - rect.top) / rect.height) * 2 - 1;
    pointerXRaw.set(Math.max(-1, Math.min(1, nextX)));
    pointerYRaw.set(Math.max(-1, Math.min(1, nextY)));
  };

  const handlePointerLeave = () => {
    pointerXRaw.set(0);
    pointerYRaw.set(0);
  };

  return (
    <section
      ref={heroRef}
      className="hero-surface relative flex min-h-[62vh] items-center overflow-hidden border-b border-border-base/80 lg:min-h-[72vh]"
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
    >
      <HeroFlowVisual
        className="scale-[1.02] md:scale-100"
        animate={!prefersReducedMotion}
        intensity="medium"
        pointerX={pointerX}
        pointerY={pointerY}
        scrollYProgress={scrollYProgress}
        reducedMotion={Boolean(prefersReducedMotion)}
      />

      <div className="hero-readability-mask absolute inset-0" aria-hidden="true" />
      <div className="hero-readability-vignette absolute inset-0" aria-hidden="true" />

      <div className="site-container relative z-10 py-20 sm:py-24">
        <motion.div
          initial={prefersReducedMotion ? false : { opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={getTransition()}
        >
          <h1 className="max-w-4xl font-heading text-4xl leading-tight sm:text-6xl">
            Ingeniería digital para empresas que quieren crecer en serio.
          </h1>
        </motion.div>

        <motion.div
          initial={prefersReducedMotion ? false : { opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={getTransition(0.08)}
        >
          <p className="mt-5 max-w-3xl text-base leading-relaxed text-text-secondary sm:text-lg">
            Diseñamos websites que convierten, automatizamos procesos y desarrollamos software a medida para que tu
            empresa venda más y opere mejor.
          </p>
        </motion.div>

        <motion.div
          initial={prefersReducedMotion ? false : { opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={getTransition(0.16)}
          className="mt-8 flex flex-wrap gap-3"
        >
          <Link to={BOOK_CALL_URL} className={primaryCtaClasses} aria-label="Agendar diagnóstico gratuito">
            Agendar diagnóstico gratuito
          </Link>
          <a href="#que-hacemos" className={secondaryCtaClasses} aria-label="Ver servicios">
            Ver servicios
          </a>
        </motion.div>
      </div>
    </section>
  );
}
