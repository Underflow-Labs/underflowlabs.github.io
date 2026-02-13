import { MotionValue, motion, useTransform } from "framer-motion";
import { cn } from "../../lib/cn";

type HeroFlowVisualProps = {
  className?: string;
  animate?: boolean;
  intensity?: "low" | "medium";
  pointerX: MotionValue<number>;
  pointerY: MotionValue<number>;
  scrollYProgress: MotionValue<number>;
  reducedMotion: boolean;
};

const intensityMap = {
  low: "opacity-48",
  medium: "opacity-72",
} satisfies Record<NonNullable<HeroFlowVisualProps["intensity"]>, string>;

export function HeroFlowVisual({
  className,
  animate = true,
  intensity = "medium",
  pointerX,
  pointerY,
  scrollYProgress,
  reducedMotion,
}: HeroFlowVisualProps) {
  const shouldLoop = animate && !reducedMotion;

  const depth1X = useTransform(pointerX, [-1, 1], [-6, 6]);
  const depth2X = useTransform(pointerX, [-1, 1], [-12, 12]);
  const depth3X = useTransform(pointerX, [-1, 1], [-20, 20]);

  const depth1YPointer = useTransform(pointerY, [-1, 1], [-6, 6]);
  const depth2YPointer = useTransform(pointerY, [-1, 1], [-12, 12]);
  const depth3YPointer = useTransform(pointerY, [-1, 1], [-20, 20]);

  const depth1YScroll = useTransform(scrollYProgress, [0, 1], [0, -18]);
  const depth2YScroll = useTransform(scrollYProgress, [0, 1], [0, -42]);
  const depth3YScroll = useTransform(scrollYProgress, [0, 1], [0, -72]);

  const depth1Y = useTransform([depth1YPointer, depth1YScroll], (latest) => Number(latest[0]) + Number(latest[1]));
  const depth2Y = useTransform([depth2YPointer, depth2YScroll], (latest) => Number(latest[0]) + Number(latest[1]));
  const depth3Y = useTransform([depth3YPointer, depth3YScroll], (latest) => Number(latest[0]) + Number(latest[1]));

  const depth1Style = reducedMotion ? undefined : { x: depth1X, y: depth1Y };
  const depth2Style = reducedMotion ? undefined : { x: depth2X, y: depth2Y };
  const depth3Style = reducedMotion ? undefined : { x: depth3X, y: depth3Y };

  return (
    <div
      className={cn("pointer-events-none absolute inset-0 select-none", intensityMap[intensity], className)}
      aria-hidden="true"
    >
      <motion.div className="hero-depth-layer hero-depth-layer-1" style={depth1Style}>
        <div className="hero-depth-glow hero-depth-glow-primary" />
        <div className="hero-depth-glow hero-depth-glow-secondary" />
      </motion.div>

      <motion.svg
        className="hero-depth-layer hero-depth-layer-2 h-full w-full"
        viewBox="0 0 1200 680"
        preserveAspectRatio="xMidYMid slice"
        style={depth2Style}
        role="presentation"
      >
        <path className="hero-blueprint-line" d="M-140 548C64 462 262 598 468 524C674 450 784 298 992 328C1160 352 1280 438 1360 504" />
        <path className="hero-blueprint-line" d="M-120 308C100 278 264 358 454 320C648 282 748 154 920 160C1080 166 1240 248 1340 296" />
        <path className="hero-blueprint-projection" d="M530 640L970 18" />
        <path className="hero-blueprint-projection" d="M856 640L1138 82" />
      </motion.svg>

      <motion.div className="hero-depth-layer hero-depth-layer-3" style={depth3Style}>
        <div
          className={cn(
            "hero-signal-sweep absolute inset-y-0 left-[-42%] w-[46%]",
            shouldLoop && "hero-signal-sweep-animate"
          )}
        />

        <svg className="h-full w-full" viewBox="0 0 1200 680" preserveAspectRatio="xMidYMid slice" role="presentation">
          <defs>
            <linearGradient id="hero-route-gradient-v3" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="rgba(89, 184, 255, 0)" />
              <stop offset="24%" stopColor="rgba(89, 184, 255, 0.72)" />
              <stop offset="56%" stopColor="rgba(232, 255, 89, 0.74)" />
              <stop offset="100%" stopColor="rgba(232, 255, 89, 0)" />
            </linearGradient>
          </defs>

          <path
            className="hero-route-track"
            d="M-80 430C148 394 270 514 474 430C676 346 786 216 980 238C1138 256 1254 346 1340 412"
          />
          <path
            className={cn("hero-route-line", shouldLoop && "hero-route-pulse")}
            d="M-80 430C148 394 270 514 474 430C676 346 786 216 980 238C1138 256 1254 346 1340 412"
          />

          <circle className="hero-route-node" cx="972" cy="238" r="4.4" />
          <circle className="hero-route-node" cx="1142" cy="301" r="3.7" />
        </svg>
      </motion.div>
    </div>
  );
}
