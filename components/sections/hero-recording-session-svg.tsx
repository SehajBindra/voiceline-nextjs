"use client";

import { motion, useInView, useReducedMotion, type Variants } from "motion/react";
import { useEffect, useRef, type ReactNode } from "react";

/* Hand-drawn recording session: the pen draws the scene in story order
   (booth -> walk-in -> singer -> mic -> waveform -> window -> console ->
   engineer -> chair), then a gentle "boil" (feTurbulence seed shuffle, after
   Camillo Visini) keeps the ink alive. Each character group carries its own
   idle loop (bob / sway / talk / nod / pulse) so every performer animates
   independently. Loops pause offscreen; reduced motion gets the finished
   frame instantly with no filter. */

const INK = "#1e40af";
const CORE = "#1e3a8a";
const MID = "#3b82f6";
const WASH = "#d1e0fb";
const PAPER = "#ffffff";

const EASE_DRAW = [0.5, 0, 0.15, 1] as const;
const BOIL_SEEDS = [7, 13, 29, 44];

/* Ink-line style (unlike solid-silhouette art): the stroke IS the finished
   artwork, so it stays at full opacity after the pen draws it. */
const draw: Variants = {
  hidden: { pathLength: 0, fillOpacity: 0, strokeOpacity: 0 },
  show: (cfg: { dur: number }) => ({
    pathLength: 1,
    fillOpacity: [0, 0, 1],
    strokeOpacity: [0, 1, 1],
    transition: {
      pathLength: { duration: cfg.dur, ease: EASE_DRAW },
      fillOpacity: { duration: cfg.dur, times: [0, 0.68, 1], ease: "easeOut" },
      strokeOpacity: { duration: cfg.dur, times: [0, 0.12, 1], ease: "easeOut" },
    },
  }),
};

const groupVar: Variants = {
  hidden: {},
  show: (cfg: { delay: number; stagger: number }) => ({
    transition: { delayChildren: cfg.delay, staggerChildren: cfg.stagger },
  }),
};

/* Idle-loop wrapper: entrance is handled by draw variants on the inner
   group; this outer group adds a perpetual character motion once drawn. */
function Idle({
  children,
  on,
  animate,
  transition,
  origin,
}: {
  children: ReactNode;
  on: boolean;
  animate: Record<string, number[]>;
  transition: Record<string, number | string | boolean | number[]>;
  origin?: string;
}) {
  return (
    <motion.g
      animate={on ? animate : undefined}
      transition={transition}
      style={origin ? { transformBox: "fill-box", transformOrigin: origin } : undefined}
    >
      {children}
    </motion.g>
  );
}

const P = {
  round: { strokeLinejoin: "round", strokeLinecap: "round" } as const,
};

export function HeroRecordingSessionSvg({ className }: { className?: string }) {
  const reduce = Boolean(useReducedMotion());
  const ref = useRef<HTMLDivElement | null>(null);
  const entered = useInView(ref, { once: true, margin: "-100px" });
  const live = useInView(ref, { margin: "-64px" });
  const noiseRef = useRef<SVGFETurbulenceElement | null>(null);
  const idle = (entered || reduce) && !reduce;

  /* Boil: shuffle the turbulence seed ~7x/sec while visible. */
  useEffect(() => {
    if (reduce || !live) return;
    let i = 0;
    const id = window.setInterval(() => {
      i = (i + 1) % BOIL_SEEDS.length;
      noiseRef.current?.setAttribute("seed", String(BOIL_SEEDS[i]));
    }, 150);
    return () => window.clearInterval(id);
  }, [reduce, live]);

  return (
    <div ref={ref} className="relative mx-auto w-full overflow-hidden rounded-lg md:rounded-xl">
      <motion.svg
        viewBox="0 0 1280 720"
        role="img"
        aria-label="Recording session: walking in, performing in the booth, and mixing the take"
        className={className ?? "block h-auto w-full"}
        preserveAspectRatio="xMidYMid meet"
        initial="hidden"
        animate={entered || reduce ? "show" : "hidden"}
      >
        <defs>
          <filter id="vl-hand" x="-5%" y="-5%" width="110%" height="110%">
            <feTurbulence
              ref={noiseRef}
              type="fractalNoise"
              baseFrequency="0.012"
              numOctaves="2"
              seed="7"
              result="noise"
            />
            <feDisplacementMap
              in="SourceGraphic"
              in2="noise"
              scale={6}
              xChannelSelector="R"
              yChannelSelector="G"
            />
          </filter>
        </defs>
        <rect width="1280" height="720" fill={PAPER} />
        <g filter={reduce ? undefined : "url(#vl-hand)"}>
        {/* ============ BOOTH ARCHITECTURE ============ */}
        <motion.g
          variants={groupVar}
          custom={{ delay: reduce ? 0 : 0.15, stagger: reduce ? 0 : 0.04 }}
          data-part="booth"
        >
            <motion.path d="M338,48 C460,70 600,92 782,88" fill="none" stroke={INK} strokeWidth={2.4} {...P.round} variants={draw} custom={{ dur: reduce ? 0.01 : 0.55 }} />
            <motion.path d="M340,598 C480,576 620,572 738,575" fill="none" stroke={INK} strokeWidth={2.4} {...P.round} variants={draw} custom={{ dur: reduce ? 0.01 : 0.55 }} />
            <motion.path d="M475,78 L472,584" fill="none" stroke={INK} strokeWidth={1.5} opacity={0.4} {...P.round} variants={draw} custom={{ dur: reduce ? 0.01 : 0.4 }} />
            <motion.path d="M605,90 L604,578" fill="none" stroke={INK} strokeWidth={1.5} opacity={0.4} {...P.round} variants={draw} custom={{ dur: reduce ? 0.01 : 0.4 }} />
            <motion.path d="M705,91 L706,576" fill="none" stroke={INK} strokeWidth={1.5} opacity={0.4} {...P.round} variants={draw} custom={{ dur: reduce ? 0.01 : 0.4 }} />
            <motion.path d="M392,118 L452,90" fill="none" stroke={MID} strokeWidth={1.2} opacity={0.5} {...P.round} variants={draw} custom={{ dur: reduce ? 0.01 : 0.3 }} />
            <motion.path d="M642,128 L702,103" fill="none" stroke={MID} strokeWidth={1.2} opacity={0.5} {...P.round} variants={draw} custom={{ dur: reduce ? 0.01 : 0.3 }} />
            <motion.path d="M206,606 L206,168 C206,88 232,40 284,28 L340,22 L340,602" fill={PAPER} stroke={INK} strokeWidth={3.1} {...P.round} variants={draw} custom={{ dur: reduce ? 0.01 : 0.7 }} />
            <motion.path d="M220,600 L220,170 C220,100 242,58 288,44 L326,40 L326,596" fill="none" stroke={INK} strokeWidth={2} opacity={0.8} {...P.round} variants={draw} custom={{ dur: reduce ? 0.01 : 0.6 }} />
            <motion.path d="M248,592 L248,176 C248,118 263,82 294,73 L312,70 L312,590 Z" fill={WASH} stroke={INK} strokeWidth={2.2} {...P.round} variants={draw} custom={{ dur: reduce ? 0.01 : 0.6 }} />
            <motion.path d="M260,584 L260,158 C260,120 274,94 298,88 L320,86 L320,582 C300,588 278,588 260,584 Z" fill={PAPER} stroke={INK} strokeWidth={2.6} {...P.round} variants={draw} custom={{ dur: reduce ? 0.01 : 0.6 }} />
            <motion.path d="M272,570 L272,150" fill="none" stroke={INK} strokeWidth={1.3} opacity={0.45} {...P.round} variants={draw} custom={{ dur: reduce ? 0.01 : 0.4 }} />
            <motion.path d="M292,346 L307,346 L307,406 L292,406 Z" fill={PAPER} stroke={INK} strokeWidth={2.4} {...P.round} variants={draw} custom={{ dur: reduce ? 0.01 : 0.4 }} />
            <motion.path d="M292,372 L266,377" fill="none" stroke={INK} strokeWidth={2.6} {...P.round} variants={draw} custom={{ dur: reduce ? 0.01 : 0.35 }} />
            <motion.circle cx={292} cy={372} r={3} fill={INK} stroke={INK} strokeWidth={1.5} variants={draw} custom={{ dur: reduce ? 0.01 : 0.3 }} />
        </motion.g>
        {/* ============ FLOOR ============ */}
        <motion.g
          variants={groupVar}
          custom={{ delay: reduce ? 0 : 0.2, stagger: reduce ? 0 : 0.03 }}
          data-part="floor"
        >
            <motion.path d="M18,622 C70,614 150,613 210,621" fill="none" stroke={INK} strokeWidth={2} opacity={0.7} {...P.round} variants={draw} custom={{ dur: reduce ? 0.01 : 0.4 }} />
            <motion.path d="M26,632 C85,624 160,623 212,630" fill="none" stroke={INK} strokeWidth={2} opacity={0.5} {...P.round} variants={draw} custom={{ dur: reduce ? 0.01 : 0.4 }} />
            <motion.path d="M352,606 C470,596 600,592 710,599" fill="none" stroke={INK} strokeWidth={2} opacity={0.7} {...P.round} variants={draw} custom={{ dur: reduce ? 0.01 : 0.4 }} />
            <motion.path d="M690,636 C800,626 960,624 1080,634" fill="none" stroke={INK} strokeWidth={2} opacity={0.55} {...P.round} variants={draw} custom={{ dur: reduce ? 0.01 : 0.4 }} />
            <motion.path d="M298,600 C500,585 700,580 890,586" fill="none" stroke={INK} strokeWidth={2} opacity={0.35} {...P.round} variants={draw} custom={{ dur: reduce ? 0.01 : 0.4 }} />
        </motion.g>
        {/* ============ CHARACTER 1 : WALK IN ============ */}
        <Idle on={idle} animate={{ y: [0, -7, 0] }} transition={{ duration: 1.7, repeat: Infinity, ease: "easeInOut" }}>
        <motion.g
          variants={groupVar}
          custom={{ delay: reduce ? 0 : 0.8, stagger: reduce ? 0 : 0.05 }}
          data-character="walk-in"
        >
            <motion.path d="M112,378 L148,382 L118,540 L108,566 L72,560 L84,528 L100,440 Z" fill={PAPER} stroke={INK} strokeWidth={3} {...P.round} variants={draw} custom={{ dur: reduce ? 0.01 : 0.6 }} />
            <motion.path d="M148,380 L186,386 L218,530 L232,566 L196,574 L180,536 L150,430 Z" fill={PAPER} stroke={INK} strokeWidth={3} {...P.round} variants={draw} custom={{ dur: reduce ? 0.01 : 0.6 }} />
            <motion.path d="M102,430 L132,425" fill="none" stroke={INK} strokeWidth={1.2} opacity={0.5} {...P.round} variants={draw} custom={{ dur: reduce ? 0.01 : 0.28 }} />
            <motion.path d="M96,458 L128,452" fill="none" stroke={INK} strokeWidth={1.2} opacity={0.5} {...P.round} variants={draw} custom={{ dur: reduce ? 0.01 : 0.28 }} />
            <motion.path d="M162,442 L190,438" fill="none" stroke={INK} strokeWidth={1.2} opacity={0.5} {...P.round} variants={draw} custom={{ dur: reduce ? 0.01 : 0.28 }} />
            <motion.path d="M172,472 L200,467" fill="none" stroke={INK} strokeWidth={1.2} opacity={0.5} {...P.round} variants={draw} custom={{ dur: reduce ? 0.01 : 0.28 }} />
            <motion.path d="M72,560 L100,566 L96,582 C94,593 84,600 66,599 L42,596 C28,594 23,584 29,574 L38,566 Z" fill={PAPER} stroke={INK} strokeWidth={2.8} {...P.round} variants={draw} custom={{ dur: reduce ? 0.01 : 0.5 }} />
            <motion.path d="M196,568 L244,556 L257,566 C262,576 256,588 240,594 L216,602 C200,606 190,600 190,588 Z" fill={PAPER} stroke={INK} strokeWidth={2.8} {...P.round} variants={draw} custom={{ dur: reduce ? 0.01 : 0.5 }} />
            <motion.path d="M36,580 L80,586" fill="none" stroke={INK} strokeWidth={1.4} opacity={0.65} {...P.round} variants={draw} custom={{ dur: reduce ? 0.01 : 0.28 }} />
            <motion.path d="M200,580 L244,568" fill="none" stroke={INK} strokeWidth={1.4} opacity={0.65} {...P.round} variants={draw} custom={{ dur: reduce ? 0.01 : 0.28 }} />
            <motion.path d="M104,208 C90,240 78,292 74,342 C72,374 80,398 100,404 L164,412 C186,414 194,396 192,364 L188,268 C186,232 166,208 138,204 Z" fill={PAPER} stroke={INK} strokeWidth={3} {...P.round} variants={draw} custom={{ dur: reduce ? 0.01 : 0.7 }} />
            <motion.path d="M104,208 C90,198 76,194 68,206 C60,220 72,238 92,244" fill={PAPER} stroke={INK} strokeWidth={2.7} {...P.round} variants={draw} custom={{ dur: reduce ? 0.01 : 0.45 }} />
            <motion.path d="M112,336 L172,344 L168,394 L108,386 Z" fill={PAPER} stroke={INK} strokeWidth={2.2} {...P.round} variants={draw} custom={{ dur: reduce ? 0.01 : 0.45 }} />
            <motion.path d="M92,246 C82,284 76,322 82,358" fill="none" stroke={INK} strokeWidth={2.6} {...P.round} variants={draw} custom={{ dur: reduce ? 0.01 : 0.45 }} />
            <motion.path d="M170,246 C180,284 186,324 184,362" fill="none" stroke={INK} strokeWidth={2.4} opacity={0.85} {...P.round} variants={draw} custom={{ dur: reduce ? 0.01 : 0.45 }} />
            <motion.path d="M132,234 L130,294" fill="none" stroke={INK} strokeWidth={2} {...P.round} variants={draw} custom={{ dur: reduce ? 0.01 : 0.35 }} />
            <motion.path d="M150,235 L152,291" fill="none" stroke={INK} strokeWidth={2} {...P.round} variants={draw} custom={{ dur: reduce ? 0.01 : 0.35 }} />
            <motion.circle cx={130} cy={299} r={3.4} fill="none" stroke={INK} strokeWidth={1.7} variants={draw} custom={{ dur: reduce ? 0.01 : 0.3 }} />
            <motion.circle cx={152} cy={296} r={3.4} fill="none" stroke={INK} strokeWidth={1.7} variants={draw} custom={{ dur: reduce ? 0.01 : 0.3 }} />
            <motion.path d="M96,270 L120,265" fill="none" stroke={INK} strokeWidth={1.2} opacity={0.45} {...P.round} variants={draw} custom={{ dur: reduce ? 0.01 : 0.28 }} />
            <motion.path d="M158,300 L182,295" fill="none" stroke={INK} strokeWidth={1.2} opacity={0.45} {...P.round} variants={draw} custom={{ dur: reduce ? 0.01 : 0.28 }} />
            <motion.path d="M114,188 C114,210 126,226 148,229" fill="none" stroke={CORE} strokeWidth={5} {...P.round} variants={draw} custom={{ dur: reduce ? 0.01 : 0.4 }} />
            <motion.ellipse cx={142} cy={206} rx={19} ry={25} fill={CORE} stroke={CORE} strokeWidth={2} variants={draw} custom={{ dur: reduce ? 0.01 : 0.45 }} />
            <motion.path d="M135,196 C135,188 139,182 144,182" fill="none" stroke={PAPER} strokeWidth={1.6} opacity={0.7} {...P.round} variants={draw} custom={{ dur: reduce ? 0.01 : 0.3 }} />
            <motion.path d="M122,122 L122,186" fill="none" stroke={INK} strokeWidth={2.7} {...P.round} variants={draw} custom={{ dur: reduce ? 0.01 : 0.4 }} />
            <motion.ellipse cx={151} cy={138} rx={33} ry={39} fill={PAPER} stroke={INK} strokeWidth={3} variants={draw} custom={{ dur: reduce ? 0.01 : 0.6 }} />
            <motion.path d="M182,136 L189,147 L182,153" fill="none" stroke={INK} strokeWidth={2.2} {...P.round} variants={draw} custom={{ dur: reduce ? 0.01 : 0.35 }} />
            <motion.path d="M170,167 C177,171 184,170 187,166" fill="none" stroke={INK} strokeWidth={2.2} {...P.round} variants={draw} custom={{ dur: reduce ? 0.01 : 0.35 }} />
            <motion.circle cx={166} cy={136} r={2.7} fill={INK} stroke="none" variants={draw} custom={{ dur: reduce ? 0.01 : 0.3 }} />
            <motion.path d="M134,146 C130,151 130,159 136,162" fill="none" stroke={INK} strokeWidth={1.8} {...P.round} variants={draw} custom={{ dur: reduce ? 0.01 : 0.3 }} />
            <motion.path d="M118,128 L112,104 L126,110 L130,92 L140,108 L150,90 L156,108 L170,96 L170,112 L186,108 L178,122 C184,136 180,150 171,156 L166,140 L158,152 L150,136 L142,150 L134,138 Z" fill={CORE} stroke={CORE} strokeWidth={2} strokeLinejoin="round" variants={draw} custom={{ dur: reduce ? 0.01 : 0.55 }} />
        </motion.g>
        </Idle>
        {/* ============ CHARACTER 2 : SINGER ============ */}
        <Idle on={idle} animate={{ y: [0, -5, 0] }} transition={{ duration: 2.3, repeat: Infinity, ease: "easeInOut", delay: 0.3 }}>
        <motion.g
          variants={groupVar}
          custom={{ delay: reduce ? 0 : 1.6, stagger: reduce ? 0 : 0.05 }}
          data-character="singer"
        >
            <motion.path d="M420,470 L458,472 L456,584 L424,584 Z" fill={PAPER} stroke={INK} strokeWidth={3} {...P.round} variants={draw} custom={{ dur: reduce ? 0.01 : 0.55 }} />
            <motion.path d="M458,472 L496,474 L502,582 L462,582 Z" fill={PAPER} stroke={INK} strokeWidth={3} {...P.round} variants={draw} custom={{ dur: reduce ? 0.01 : 0.55 }} />
            <motion.path d="M426,505 L454,504" fill="none" stroke={INK} strokeWidth={1.2} opacity={0.45} {...P.round} variants={draw} custom={{ dur: reduce ? 0.01 : 0.28 }} />
            <motion.path d="M466,536 L496,535" fill="none" stroke={INK} strokeWidth={1.2} opacity={0.45} {...P.round} variants={draw} custom={{ dur: reduce ? 0.01 : 0.28 }} />
            <motion.path d="M402,248 C388,286 382,344 386,402 C388,444 400,472 418,478 L488,480 C504,479 512,460 510,426 L504,298 C502,264 478,242 444,240 Z" fill={PAPER} stroke={INK} strokeWidth={3} {...P.round} variants={draw} custom={{ dur: reduce ? 0.01 : 0.7 }} />
            <motion.path d="M402,248 C392,238 382,230 376,239 C370,250 380,265 398,270" fill={PAPER} stroke={INK} strokeWidth={2.6} {...P.round} variants={draw} custom={{ dur: reduce ? 0.01 : 0.45 }} />
            <motion.path d="M428,274 L426,336" fill="none" stroke={INK} strokeWidth={2} {...P.round} variants={draw} custom={{ dur: reduce ? 0.01 : 0.35 }} />
            <motion.path d="M450,275 L452,333" fill="none" stroke={INK} strokeWidth={2} {...P.round} variants={draw} custom={{ dur: reduce ? 0.01 : 0.35 }} />
            <motion.path d="M398,318 L424,313" fill="none" stroke={INK} strokeWidth={1.2} opacity={0.5} {...P.round} variants={draw} custom={{ dur: reduce ? 0.01 : 0.28 }} />
            <motion.path d="M414,420 L458,418" fill="none" stroke={INK} strokeWidth={1.2} opacity={0.5} {...P.round} variants={draw} custom={{ dur: reduce ? 0.01 : 0.28 }} />
            <motion.path d="M398,278 C382,304 378,336 390,366 L420,382 L432,362 L410,348 C403,328 406,304 416,286 Z" fill={PAPER} stroke={INK} strokeWidth={2.7} {...P.round} variants={draw} custom={{ dur: reduce ? 0.01 : 0.55 }} />
            <motion.path d="M420,362 C436,355 452,351 466,352 L464,362 C452,361 440,364 428,370 Z" fill={PAPER} stroke={INK} strokeWidth={2.2} {...P.round} variants={draw} custom={{ dur: reduce ? 0.01 : 0.4 }} />
            <motion.path d="M466,352 L480,346" fill="none" stroke={INK} strokeWidth={1.8} {...P.round} variants={draw} custom={{ dur: reduce ? 0.01 : 0.3 }} />
            <motion.path d="M465,358 L481,356" fill="none" stroke={INK} strokeWidth={1.8} {...P.round} variants={draw} custom={{ dur: reduce ? 0.01 : 0.3 }} />
            <Idle on={idle} animate={{ rotate: [0, -10, 0] }} transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }} origin="0% 50%">
            <motion.g variants={groupVar} custom={{ delay: reduce ? 0 : 2.0, stagger: reduce ? 0 : 0.04 }} data-subpart="singer-hand">
              <motion.path d="M504,330 L526,342 L534,368 L512,362 L500,344 Z" fill={PAPER} stroke={INK} strokeWidth={2.5} {...P.round} variants={draw} custom={{ dur: reduce ? 0.01 : 0.45 }} />
              <motion.path d="M534,368 L548,372" fill="none" stroke={INK} strokeWidth={1.9} {...P.round} variants={draw} custom={{ dur: reduce ? 0.01 : 0.3 }} />
              <motion.path d="M532,360 L548,360" fill="none" stroke={INK} strokeWidth={1.9} {...P.round} variants={draw} custom={{ dur: reduce ? 0.01 : 0.3 }} />
              <motion.path d="M530,352 L544,348" fill="none" stroke={INK} strokeWidth={1.9} {...P.round} variants={draw} custom={{ dur: reduce ? 0.01 : 0.3 }} />
              <motion.path d="M526,344 L538,336" fill="none" stroke={INK} strokeWidth={1.9} {...P.round} variants={draw} custom={{ dur: reduce ? 0.01 : 0.3 }} />
            </motion.g>
            </Idle>
            <motion.path d="M430,198 L430,242" fill="none" stroke={INK} strokeWidth={2.7} {...P.round} variants={draw} custom={{ dur: reduce ? 0.01 : 0.4 }} />
            <motion.ellipse cx={459} cy={166} rx={37} ry={43} fill={PAPER} stroke={INK} strokeWidth={3} variants={draw} custom={{ dur: reduce ? 0.01 : 0.6 }} />
            <motion.circle cx={450} cy={163} r={3} fill={INK} stroke="none" variants={draw} custom={{ dur: reduce ? 0.01 : 0.3 }} />
            <motion.circle cx={473} cy={162} r={3} fill={INK} stroke="none" variants={draw} custom={{ dur: reduce ? 0.01 : 0.3 }} />
            <motion.path d="M461,174 L466,184 L459,186" fill="none" stroke={INK} strokeWidth={1.8} {...P.round} variants={draw} custom={{ dur: reduce ? 0.01 : 0.3 }} />
            <Idle on={idle} animate={{ scaleY: [1, 0.4, 1] }} transition={{ duration: 0.9, repeat: Infinity, ease: "easeInOut" }} origin="50% 0%">
              <motion.path d="M456,196 C460,208 471,211 478,202 C481,195 476,190 466,190 C460,190 455,192 456,196 Z" fill={CORE} stroke={INK} strokeWidth={2.2} {...P.round} variants={draw} custom={{ dur: reduce ? 0.01 : 0.4 }} />
            </Idle>
            <motion.path d="M422,153 L418,126 L431,132 L436,110 L444,128 L454,106 L458,126 L472,112 L474,128 L490,124 L484,138 C491,154 487,172 479,181 L475,164 L468,178 L462,160 L454,175 L448,158 L439,170 Z" fill={CORE} stroke={CORE} strokeWidth={2} strokeLinejoin="round" variants={draw} custom={{ dur: reduce ? 0.01 : 0.55 }} />
            <motion.path d="M424,148 C424,116 443,99 465,99 C486,99 499,116 499,144" fill="none" stroke={CORE} strokeWidth={5} {...P.round} variants={draw} custom={{ dur: reduce ? 0.01 : 0.45 }} />
            <motion.ellipse cx={426} cy={168} rx={17} ry={27} fill={CORE} stroke={CORE} strokeWidth={2} variants={draw} custom={{ dur: reduce ? 0.01 : 0.45 }} />
            <motion.ellipse cx={497} cy={166} rx={7} ry={15} fill={CORE} stroke="none" variants={draw} custom={{ dur: reduce ? 0.01 : 0.35 }} />
        </motion.g>
        </Idle>
        {/* ============ MIC RIG ============ */}
        <motion.g
          variants={groupVar}
          custom={{ delay: reduce ? 0 : 2.3, stagger: reduce ? 0 : 0.05 }}
          data-part="mic"
        >
            <motion.path d="M656,158 L656,618" fill="none" stroke={INK} strokeWidth={3.1} {...P.round} variants={draw} custom={{ dur: reduce ? 0.01 : 0.6 }} />
            <motion.path d="M656,158 C670,158 680,166 681,182 L681,208" fill="none" stroke={INK} strokeWidth={2.7} {...P.round} variants={draw} custom={{ dur: reduce ? 0.01 : 0.45 }} />
            <motion.path d="M648,120 L672,120 L672,158 L648,158 Z" fill={PAPER} stroke={INK} strokeWidth={2.6} {...P.round} variants={draw} custom={{ dur: reduce ? 0.01 : 0.4 }} />
            <motion.circle cx={660} cy={113} r={7} fill="none" stroke={INK} strokeWidth={2.4} variants={draw} custom={{ dur: reduce ? 0.01 : 0.35 }} />
            <motion.path d="M602,248 L644,286 M644,248 L602,286" fill="none" stroke={INK} strokeWidth={2.3} {...P.round} variants={draw} custom={{ dur: reduce ? 0.01 : 0.4 }} />
            <motion.ellipse cx={623} cy={267} rx={24} ry={9} fill={PAPER} stroke={INK} strokeWidth={2} variants={draw} custom={{ dur: reduce ? 0.01 : 0.4 }} />
            <motion.path d="M603,204 C603,194 610,186 620,186 L626,186 C636,186 643,194 643,204 L643,252 C643,262 636,270 626,270 L620,270 C610,270 603,262 603,252 Z" fill={PAPER} stroke={INK} strokeWidth={3} {...P.round} variants={draw} custom={{ dur: reduce ? 0.01 : 0.6 }} />
            <motion.path d="M608,196 L638,196" fill="none" stroke={MID} strokeWidth={1.6} {...P.round} variants={draw} custom={{ dur: reduce ? 0.01 : 0.3 }} />
            <motion.path d="M608,204 L638,204" fill="none" stroke={MID} strokeWidth={1.6} {...P.round} variants={draw} custom={{ dur: reduce ? 0.01 : 0.3 }} />
            <motion.path d="M603,230 L643,230" fill="none" stroke={INK} strokeWidth={2} {...P.round} variants={draw} custom={{ dur: reduce ? 0.01 : 0.3 }} />
            <motion.path d="M613,270 L633,270 L633,300 L613,300 Z" fill={PAPER} stroke={INK} strokeWidth={2.4} {...P.round} variants={draw} custom={{ dur: reduce ? 0.01 : 0.4 }} />
            <motion.circle cx={623} cy={308} r={5} fill={INK} stroke="none" variants={draw} custom={{ dur: reduce ? 0.01 : 0.3 }} />
            <motion.path d="M606,272 C596,246 593,216 601,188" fill="none" stroke={INK} strokeWidth={2.4} {...P.round} variants={draw} custom={{ dur: reduce ? 0.01 : 0.4 }} />
            <motion.ellipse cx={576} cy={206} rx={24} ry={41} fill={PAPER} stroke={INK} strokeWidth={3} variants={draw} custom={{ dur: reduce ? 0.01 : 0.55 }} />
            <motion.ellipse cx={576} cy={206} rx={15} ry={31} fill={WASH} stroke={INK} strokeWidth={1.6} opacity={0.9} variants={draw} custom={{ dur: reduce ? 0.01 : 0.45 }} />
            <motion.path d="M623,313 C618,344 632,368 652,383 C667,393 670,414 664,440" fill="none" stroke={INK} strokeWidth={2.2} {...P.round} variants={draw} custom={{ dur: reduce ? 0.01 : 0.45 }} />
            <motion.path d="M647,268 L665,268 L665,283 L647,283 Z" fill={PAPER} stroke={INK} strokeWidth={2.2} {...P.round} variants={draw} custom={{ dur: reduce ? 0.01 : 0.35 }} />
            <motion.path d="M647,380 L665,380 L665,395 L647,395 Z" fill={PAPER} stroke={INK} strokeWidth={2.2} {...P.round} variants={draw} custom={{ dur: reduce ? 0.01 : 0.35 }} />
            <motion.ellipse cx={656} cy={630} rx={40} ry={15} fill={PAPER} stroke={INK} strokeWidth={2.8} variants={draw} custom={{ dur: reduce ? 0.01 : 0.5 }} />
        </motion.g>
        {/* ============ WAVEFORM ============ */}
        <Idle on={idle} animate={{ scaleX: [1, 1.045, 1], opacity: [0.9, 1, 0.9] }} transition={{ duration: 1.2, repeat: Infinity, ease: "easeInOut" }} origin="0% 50%">
        <motion.g
          variants={groupVar}
          custom={{ delay: reduce ? 0 : 2.8, stagger: reduce ? 0 : 0.03 }}
          data-part="waveform"
        >
            <motion.path d="M676,270 L998,270" fill="none" stroke={INK} strokeWidth={1.4} opacity={0.45} {...P.round} variants={draw} custom={{ dur: reduce ? 0.01 : 0.4 }} />
            <motion.path d="M694,270 L697,252 L700,288 L703,240 L706,300 L709,270" fill="none" stroke={INK} strokeWidth={2.6} {...P.round} variants={draw} custom={{ dur: reduce ? 0.01 : 0.3 }} />
            <motion.path d="M715,270 L718,232 L721,308 L724,248 L727,292 L730,270" fill="none" stroke={INK} strokeWidth={2.6} {...P.round} variants={draw} custom={{ dur: reduce ? 0.01 : 0.3 }} />
            <motion.path d="M736,270 L739,222 L742,318 L745,244 L748,296 L751,238 L754,302 L757,270" fill="none" stroke={INK} strokeWidth={2.6} {...P.round} variants={draw} custom={{ dur: reduce ? 0.01 : 0.3 }} />
            <motion.path d="M763,270 L768,258 L773,282 L778,200 L783,340 L788,224 L793,316 L798,270" fill="none" stroke={INK} strokeWidth={2.8} {...P.round} variants={draw} custom={{ dur: reduce ? 0.01 : 0.32 }} />
            <motion.path d="M804,270 L809,242 L814,298 L819,252 L824,288 L829,216 L834,324 L839,270" fill="none" stroke={INK} strokeWidth={2.8} {...P.round} variants={draw} custom={{ dur: reduce ? 0.01 : 0.32 }} />
            <motion.path d="M845,270 L850,250 L855,290 L860,244 L865,296 L870,256 L875,284 L880,270" fill="none" stroke={INK} strokeWidth={2.6} {...P.round} variants={draw} custom={{ dur: reduce ? 0.01 : 0.3 }} />
            <motion.path d="M886,270 L891,232 L896,308 L901,246 L906,294 L911,254 L916,286 L921,270" fill="none" stroke={INK} strokeWidth={2.6} {...P.round} variants={draw} custom={{ dur: reduce ? 0.01 : 0.3 }} />
            <motion.path d="M927,270 L932,244 L937,296 L942,256 L947,284 L954,262 L962,278 L998,270" fill="none" stroke={INK} strokeWidth={2.6} {...P.round} variants={draw} custom={{ dur: reduce ? 0.01 : 0.32 }} />
            <motion.circle cx={678} cy={270} r={3.6} fill={INK} stroke="none" variants={draw} custom={{ dur: reduce ? 0.01 : 0.3 }} />
            <motion.circle cx={998} cy={270} r={2.6} fill={INK} opacity={0.6} stroke="none" variants={draw} custom={{ dur: reduce ? 0.01 : 0.3 }} />
        </motion.g>
        </Idle>
        {/* ============ STUDIO WINDOW ============ */}
        <motion.g
          variants={groupVar}
          custom={{ delay: reduce ? 0 : 3.1, stagger: reduce ? 0 : 0.03 }}
          data-part="window"
        >
            <motion.path d="M802,104 L1148,62 L1148,396 L802,438 Z" fill={PAPER} stroke={INK} strokeWidth={3.1} {...P.round} variants={draw} custom={{ dur: reduce ? 0.01 : 0.65 }} />
            <motion.path d="M820,118 L1130,80 L1130,382 L820,420 Z" fill="none" stroke={INK} strokeWidth={2.1} opacity={0.9} {...P.round} variants={draw} custom={{ dur: reduce ? 0.01 : 0.55 }} />
            <motion.path d="M858,122 L842,414" fill="none" stroke={INK} strokeWidth={1.1} opacity={0.3} {...P.round} variants={draw} custom={{ dur: reduce ? 0.01 : 0.3 }} />
            <motion.path d="M888,119 L872,410" fill="none" stroke={INK} strokeWidth={1.1} opacity={0.3} {...P.round} variants={draw} custom={{ dur: reduce ? 0.01 : 0.3 }} />
            <motion.path d="M918,115 L902,406" fill="none" stroke={INK} strokeWidth={1.1} opacity={0.3} {...P.round} variants={draw} custom={{ dur: reduce ? 0.01 : 0.3 }} />
            <motion.path d="M948,111 L932,402" fill="none" stroke={INK} strokeWidth={1.1} opacity={0.3} {...P.round} variants={draw} custom={{ dur: reduce ? 0.01 : 0.3 }} />
            <motion.path d="M978,107 L962,398" fill="none" stroke={INK} strokeWidth={1.1} opacity={0.3} {...P.round} variants={draw} custom={{ dur: reduce ? 0.01 : 0.3 }} />
            <motion.path d="M1008,103 L992,394" fill="none" stroke={INK} strokeWidth={1.1} opacity={0.3} {...P.round} variants={draw} custom={{ dur: reduce ? 0.01 : 0.3 }} />
            <motion.path d="M1038,99 L1022,390" fill="none" stroke={INK} strokeWidth={1.1} opacity={0.3} {...P.round} variants={draw} custom={{ dur: reduce ? 0.01 : 0.3 }} />
            <motion.path d="M1068,95 L1052,386" fill="none" stroke={INK} strokeWidth={1.1} opacity={0.3} {...P.round} variants={draw} custom={{ dur: reduce ? 0.01 : 0.3 }} />
            <motion.path d="M823,180 L950,140" fill="none" stroke={INK} strokeWidth={1} opacity={0.22} {...P.round} variants={draw} custom={{ dur: reduce ? 0.01 : 0.28 }} />
            <motion.path d="M821,260 L1000,205" fill="none" stroke={INK} strokeWidth={1} opacity={0.22} {...P.round} variants={draw} custom={{ dur: reduce ? 0.01 : 0.28 }} />
            <motion.path d="M821,340 L1050,271" fill="none" stroke={INK} strokeWidth={1} opacity={0.22} {...P.round} variants={draw} custom={{ dur: reduce ? 0.01 : 0.28 }} />
            <motion.path d="M872,126 L858,408" fill="none" stroke={WASH} strokeWidth={3} opacity={0.8} {...P.round} variants={draw} custom={{ dur: reduce ? 0.01 : 0.3 }} />
        </motion.g>
        {/* ============ CONSOLE DESK ============ */}
        <motion.g
          variants={groupVar}
          custom={{ delay: reduce ? 0 : 3.4, stagger: reduce ? 0 : 0.035 }}
          data-part="console"
        >
            <motion.path d="M664,498 L944,428 L1090,468 L772,572 Z" fill={PAPER} stroke={INK} strokeWidth={3.1} {...P.round} variants={draw} custom={{ dur: reduce ? 0.01 : 0.65 }} />
            <motion.path d="M664,498 L664,560 L772,644 L772,572 Z" fill={WASH} stroke={INK} strokeWidth={3} {...P.round} variants={draw} custom={{ dur: reduce ? 0.01 : 0.55 }} />
            <motion.path d="M772,572 L772,644 L1090,548 L1090,468 Z" fill={PAPER} stroke={INK} strokeWidth={3} {...P.round} variants={draw} custom={{ dur: reduce ? 0.01 : 0.55 }} />
            <motion.path d="M680,520 L700,610" fill="none" stroke={INK} strokeWidth={1.1} opacity={0.5} {...P.round} variants={draw} custom={{ dur: reduce ? 0.01 : 0.3 }} />
            <motion.path d="M700,515 L720,608" fill="none" stroke={INK} strokeWidth={1.1} opacity={0.5} {...P.round} variants={draw} custom={{ dur: reduce ? 0.01 : 0.3 }} />
            <motion.path d="M692,500 L942,438 L1052,470 L782,560 Z" fill="none" stroke={INK} strokeWidth={2.3} {...P.round} variants={draw} custom={{ dur: reduce ? 0.01 : 0.5 }} />
            <motion.path d="M862,446 L934,433 L966,441 L894,455 Z" fill={PAPER} stroke={INK} strokeWidth={2.2} {...P.round} variants={draw} custom={{ dur: reduce ? 0.01 : 0.4 }} />
            <Idle on={idle} animate={{ opacity: [1, 0.5, 1] }} transition={{ duration: 0.7, repeat: Infinity, ease: "easeInOut" }}>
              <motion.path d="M940,434 L959,434 L959,447 L940,447 Z" fill={INK} opacity={0.85} stroke="none" variants={draw} custom={{ dur: reduce ? 0.01 : 0.35 }} />
            </Idle>
            <motion.path d="M716,500 L738,495 L739,508 L717,513 Z" fill={PAPER} stroke={INK} strokeWidth={1.7} {...P.round} variants={draw} custom={{ dur: reduce ? 0.01 : 0.3 }} />
            <motion.path d="M746,493 L768,488 L769,501 L747,506 Z" fill={PAPER} stroke={INK} strokeWidth={1.7} {...P.round} variants={draw} custom={{ dur: reduce ? 0.01 : 0.3 }} />
            <motion.path d="M776,486 L798,481 L799,494 L777,499 Z" fill={PAPER} stroke={INK} strokeWidth={1.7} {...P.round} variants={draw} custom={{ dur: reduce ? 0.01 : 0.3 }} />
            <motion.path d="M806,479 L828,474 L829,487 L807,492 Z" fill={PAPER} stroke={INK} strokeWidth={1.7} {...P.round} variants={draw} custom={{ dur: reduce ? 0.01 : 0.3 }} />
            <motion.path d="M836,472 L858,467 L859,480 L837,485 Z" fill={PAPER} stroke={INK} strokeWidth={1.7} {...P.round} variants={draw} custom={{ dur: reduce ? 0.01 : 0.3 }} />
            <motion.path d="M728,540 L772,527" fill="none" stroke={INK} strokeWidth={1.8} {...P.round} variants={draw} custom={{ dur: reduce ? 0.01 : 0.3 }} />
            <motion.path d="M760,548 L804,535" fill="none" stroke={INK} strokeWidth={1.8} {...P.round} variants={draw} custom={{ dur: reduce ? 0.01 : 0.3 }} />
            <motion.path d="M792,556 L836,543" fill="none" stroke={INK} strokeWidth={1.8} {...P.round} variants={draw} custom={{ dur: reduce ? 0.01 : 0.3 }} />
            <motion.path d="M824,564 L868,551" fill="none" stroke={INK} strokeWidth={1.8} {...P.round} variants={draw} custom={{ dur: reduce ? 0.01 : 0.3 }} />
            <motion.path d="M856,571 L900,558" fill="none" stroke={INK} strokeWidth={1.8} {...P.round} variants={draw} custom={{ dur: reduce ? 0.01 : 0.3 }} />
            <motion.path d="M888,578 L932,565" fill="none" stroke={INK} strokeWidth={1.8} {...P.round} variants={draw} custom={{ dur: reduce ? 0.01 : 0.3 }} />
            <motion.path d="M920,584 L964,571" fill="none" stroke={INK} strokeWidth={1.8} {...P.round} variants={draw} custom={{ dur: reduce ? 0.01 : 0.3 }} />
            <motion.path d="M952,588 L996,575" fill="none" stroke={INK} strokeWidth={1.8} {...P.round} variants={draw} custom={{ dur: reduce ? 0.01 : 0.3 }} />
            {[
              { d: "M742,527 L766,522 L767,535 L743,540 Z", f: MID },
              { d: "M774,533 L798,528 L799,541 L775,546 Z", f: MID },
              { d: "M804,540 L828,535 L829,548 L805,553 Z", f: PAPER },
              { d: "M836,546 L860,541 L861,554 L837,559 Z", f: PAPER },
              { d: "M868,552 L892,547 L893,560 L869,565 Z", f: PAPER },
              { d: "M900,558 L924,553 L925,566 L901,571 Z", f: PAPER },
              { d: "M932,563 L956,558 L957,571 L933,576 Z", f: PAPER },
              { d: "M964,567 L988,562 L989,575 L965,580 Z", f: PAPER },
            ].map((cap, i) => (
              <Idle key={cap.d} on={idle} animate={{ y: [0, -3, 0] }} transition={{ duration: 1.4, repeat: Infinity, ease: "easeInOut", delay: i * 0.12 }}>
                <motion.path d={cap.d} fill={cap.f} stroke={INK} strokeWidth={2} {...P.round} variants={draw} custom={{ dur: reduce ? 0.01 : 0.3 }} />
              </Idle>
            ))}
        </motion.g>
        {/* ============ CHARACTER 3 : ENGINEER ============ */}
        <Idle on={idle} animate={{ y: [0, 4, 0] }} transition={{ duration: 2.8, repeat: Infinity, ease: "easeInOut", delay: 0.6 }}>
        <motion.g
          variants={groupVar}
          custom={{ delay: reduce ? 0 : 4.0, stagger: reduce ? 0 : 0.05 }}
          data-character="engineer"
        >
            <motion.path d="M992,536 C1022,546 1052,557 1078,572 L1078,642 L1042,642 L1038,580 L1000,568 Z" fill={PAPER} stroke={INK} strokeWidth={3} {...P.round} variants={draw} custom={{ dur: reduce ? 0.01 : 0.55 }} />
            <motion.path d="M986,562 C1014,572 1042,582 1066,594 L1064,646 L1032,646 L1028,596 Z" fill={PAPER} stroke={INK} strokeWidth={2.7} opacity={0.95} {...P.round} variants={draw} custom={{ dur: reduce ? 0.01 : 0.5 }} />
            <motion.path d="M1002,552 L1030,560" fill="none" stroke={INK} strokeWidth={1.2} opacity={0.45} {...P.round} variants={draw} custom={{ dur: reduce ? 0.01 : 0.28 }} />
            <motion.path d="M992,358 C982,400 977,452 987,502 C990,527 1003,542 1024,547 L1074,557 C1090,560 1100,549 1097,529 L1085,430 C1081,394 1064,364 1038,354 L1006,348 Z" fill={PAPER} stroke={INK} strokeWidth={3} {...P.round} variants={draw} custom={{ dur: reduce ? 0.01 : 0.7 }} />
            <motion.path d="M1038,354 L1060,348 L1066,368 L1044,374 Z" fill={PAPER} stroke={INK} strokeWidth={2.2} {...P.round} variants={draw} custom={{ dur: reduce ? 0.01 : 0.4 }} />
            <motion.path d="M1052,374 L1050,430" fill="none" stroke={INK} strokeWidth={1.5} opacity={0.5} {...P.round} variants={draw} custom={{ dur: reduce ? 0.01 : 0.3 }} />
            <motion.path d="M1000,398 L1028,393" fill="none" stroke={INK} strokeWidth={1.2} opacity={0.5} {...P.round} variants={draw} custom={{ dur: reduce ? 0.01 : 0.28 }} />
            <motion.path d="M1000,458 L1038,452" fill="none" stroke={INK} strokeWidth={1.2} opacity={0.5} {...P.round} variants={draw} custom={{ dur: reduce ? 0.01 : 0.28 }} />
            <motion.path d="M992,368 C977,394 972,426 980,456 L1008,451 C1002,426 1004,400 1014,380 Z" fill={PAPER} stroke={INK} strokeWidth={2.6} {...P.round} variants={draw} custom={{ dur: reduce ? 0.01 : 0.5 }} />
            <motion.path d="M1000,380 C994,410 994,438 1005,462 L1022,457 C1013,436 1013,411 1017,388 Z" fill={PAPER} stroke={INK} strokeWidth={2.6} {...P.round} variants={draw} custom={{ dur: reduce ? 0.01 : 0.5 }} />
            <motion.path d="M1005,338 C1000,350 1002,363 1013,369 L1030,373 L1028,360 L1018,354 Z" fill={PAPER} stroke={INK} strokeWidth={2.4} {...P.round} variants={draw} custom={{ dur: reduce ? 0.01 : 0.4 }} />
            <motion.path d="M1012,328 L1010,347" fill="none" stroke={INK} strokeWidth={1.9} {...P.round} variants={draw} custom={{ dur: reduce ? 0.01 : 0.3 }} />
            <motion.path d="M1019,326 L1019,345" fill="none" stroke={INK} strokeWidth={1.9} {...P.round} variants={draw} custom={{ dur: reduce ? 0.01 : 0.3 }} />
            <motion.path d="M1062,430 L1084,435 L1072,470 L1050,465 Z" fill={PAPER} stroke={INK} strokeWidth={2.4} {...P.round} variants={draw} custom={{ dur: reduce ? 0.01 : 0.45 }} />
            <motion.path d="M1062,430 C1052,465 1042,496 1032,521" fill="none" stroke={INK} strokeWidth={2.8} {...P.round} variants={draw} custom={{ dur: reduce ? 0.01 : 0.45 }} />
            <motion.path d="M1084,435 C1074,468 1064,499 1056,523" fill="none" stroke={INK} strokeWidth={2.8} {...P.round} variants={draw} custom={{ dur: reduce ? 0.01 : 0.45 }} />
            <motion.path d="M1032,521 L1056,523 L1054,537 L1030,535 Z" fill={PAPER} stroke={INK} strokeWidth={2.2} {...P.round} variants={draw} custom={{ dur: reduce ? 0.01 : 0.35 }} />
            <Idle on={idle} animate={{ rotate: [0, 3, 0] }} transition={{ duration: 2.8, repeat: Infinity, ease: "easeInOut", delay: 0.6 }} origin="50% 85%">
            <motion.g variants={groupVar} custom={{ delay: reduce ? 0 : 4.3, stagger: reduce ? 0 : 0.04 }} data-subpart="engineer-head">
              <motion.path d="M1040,298 L1035,352" fill="none" stroke={INK} strokeWidth={2.7} {...P.round} variants={draw} custom={{ dur: reduce ? 0.01 : 0.4 }} />
              <motion.path d="M1033,256 C1024,279 1026,307 1044,323 L1073,334 C1090,337 1101,329 1103,313 L1106,269 C1107,242 1089,224 1065,223 L1048,225 C1039,227 1035,240 1033,256 Z" fill={PAPER} stroke={INK} strokeWidth={3} {...P.round} variants={draw} custom={{ dur: reduce ? 0.01 : 0.6 }} />
              <motion.path d="M1033,266 L1023,280 L1033,285" fill="none" stroke={INK} strokeWidth={2.2} {...P.round} variants={draw} custom={{ dur: reduce ? 0.01 : 0.35 }} />
              <motion.path d="M1031,294 C1035,297 1041,297 1044,295" fill="none" stroke={INK} strokeWidth={2} {...P.round} variants={draw} custom={{ dur: reduce ? 0.01 : 0.3 }} />
              <motion.circle cx={1052} cy={264} r={3} fill={INK} stroke="none" variants={draw} custom={{ dur: reduce ? 0.01 : 0.3 }} />
              <motion.path d="M1040,231 L1035,209 L1048,214 L1052,196 L1060,212 L1070,198 L1074,214 L1088,206 L1088,220 L1104,218 L1098,232 C1105,248 1101,266 1094,278 L1089,258 L1082,274 L1076,256 L1068,272 L1062,254 L1052,266 C1048,254 1044,242 1040,231 Z" fill={CORE} stroke={CORE} strokeWidth={2} strokeLinejoin="round" variants={draw} custom={{ dur: reduce ? 0.01 : 0.55 }} />
              <motion.path d="M1062,197 C1088,197 1105,213 1108,241" fill="none" stroke={CORE} strokeWidth={5} {...P.round} variants={draw} custom={{ dur: reduce ? 0.01 : 0.4 }} />
              <motion.ellipse cx={1105} cy={269} rx={21} ry={31} fill={CORE} stroke={CORE} strokeWidth={2} variants={draw} custom={{ dur: reduce ? 0.01 : 0.45 }} />
              <motion.path d="M1098,254 C1098,244 1103,238 1108,238" fill="none" stroke={PAPER} strokeWidth={1.6} opacity={0.7} {...P.round} variants={draw} custom={{ dur: reduce ? 0.01 : 0.3 }} />
            </motion.g>
            </Idle>
        </motion.g>
        </Idle>
        {/* ============ CHAIR ============ */}
        <motion.g
          variants={groupVar}
          custom={{ delay: reduce ? 0 : 4.5, stagger: reduce ? 0 : 0.05 }}
          data-part="chair"
        >
            <motion.path d="M1104,418 C1126,412 1152,410 1170,417 L1180,548 C1182,588 1168,624 1146,644" fill={PAPER} stroke={INK} strokeWidth={3.1} {...P.round} variants={draw} custom={{ dur: reduce ? 0.01 : 0.6 }} />
            <motion.path d="M1112,428 C1130,423 1152,422 1166,427 L1173,545 C1170,580 1160,610 1146,628" fill="none" stroke={INK} strokeWidth={2} opacity={0.7} {...P.round} variants={draw} custom={{ dur: reduce ? 0.01 : 0.5 }} />
            <motion.path d="M1124,430 L1128,540" fill="none" stroke={INK} strokeWidth={1.2} opacity={0.4} {...P.round} variants={draw} custom={{ dur: reduce ? 0.01 : 0.3 }} />
            <motion.path d="M1138,429 L1142,542" fill="none" stroke={INK} strokeWidth={1.2} opacity={0.4} {...P.round} variants={draw} custom={{ dur: reduce ? 0.01 : 0.3 }} />
            <motion.path d="M1152,429 L1156,544" fill="none" stroke={INK} strokeWidth={1.2} opacity={0.4} {...P.round} variants={draw} custom={{ dur: reduce ? 0.01 : 0.3 }} />
            <motion.path d="M1030,544 L1100,537 L1110,551 L1038,559 Z" fill={PAPER} stroke={INK} strokeWidth={2.8} {...P.round} variants={draw} custom={{ dur: reduce ? 0.01 : 0.45 }} />
            <motion.path d="M1038,559 L1038,584" fill="none" stroke={INK} strokeWidth={2.6} {...P.round} variants={draw} custom={{ dur: reduce ? 0.01 : 0.35 }} />
            <motion.path d="M1028,574 L1126,564 L1142,584 L1044,596 Z" fill={PAPER} stroke={INK} strokeWidth={2.8} {...P.round} variants={draw} custom={{ dur: reduce ? 0.01 : 0.45 }} />
            <motion.path d="M1074,596 L1074,648" fill="none" stroke={INK} strokeWidth={2.8} {...P.round} variants={draw} custom={{ dur: reduce ? 0.01 : 0.4 }} />
            <motion.path d="M1042,648 L1110,648" fill="none" stroke={INK} strokeWidth={2.8} {...P.round} variants={draw} custom={{ dur: reduce ? 0.01 : 0.4 }} />
            <motion.circle cx={1042} cy={654} r={5} fill={INK} stroke="none" variants={draw} custom={{ dur: reduce ? 0.01 : 0.3 }} />
            <motion.circle cx={1110} cy={654} r={5} fill={INK} stroke="none" variants={draw} custom={{ dur: reduce ? 0.01 : 0.3 }} />
            <motion.path d="M1022,660 L1124,648" fill="none" stroke={INK} strokeWidth={1.2} opacity={0.4} {...P.round} variants={draw} custom={{ dur: reduce ? 0.01 : 0.3 }} />
        </motion.g>
        </g>
      </motion.svg>
    </div>
  );
}
