import { ReactNode, useEffect, useRef } from "react";
import { motion, useAnimation, useInView, useReducedMotion, Variant } from "framer-motion";

type ScrollRevealVariant = "fade" | "slide" | "scale";

type ScrollRevealProps = {
  children: ReactNode;
  width?: "fit-content" | "100%";
  className?: string;
  variant?: ScrollRevealVariant;
  delay?: number;
  disabled?: boolean;
  amount?: number;
};

const variants: Record<ScrollRevealVariant, { hidden: Variant; visible: Variant }> = {
  fade: {
    hidden: { opacity: 0, y: 16 },
    visible: { opacity: 1, y: 0 },
  },
  slide: {
    hidden: { opacity: 0, x: -18 },
    visible: { opacity: 1, x: 0 },
  },
  scale: {
    hidden: { opacity: 0, scale: 0.97 },
    visible: { opacity: 1, scale: 1 },
  },
};

export function ScrollReveal({
  children,
  width = "fit-content",
  className = "",
  variant = "fade",
  delay = 0,
  disabled = false,
  amount = 0.2,
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(ref, { once: true, amount, margin: "-40px 0px" });
  const controls = useAnimation();
  const prefersReducedMotion = useReducedMotion();
  const skipAnimation = disabled || prefersReducedMotion;

  useEffect(() => {
    if (isInView && !skipAnimation) {
      controls.start("visible");
    }
  }, [controls, isInView, skipAnimation]);

  if (skipAnimation) {
    return (
      <div ref={ref} style={{ position: "relative", width }} className={className}>
        {children}
      </div>
    );
  }

  return (
    <div ref={ref} style={{ position: "relative", width }} className={className}>
      <motion.div
        variants={variants[variant]}
        initial="hidden"
        animate={controls}
        transition={{ duration: 0.48, delay, ease: [0.22, 1, 0.36, 1] }}
      >
        {children}
      </motion.div>
    </div>
  );
}
