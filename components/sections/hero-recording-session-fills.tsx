"use client";

/* Pixel-perfect interior fills for the BW recording-session doodle.
   Static instant fills — only ink TRACE_D animates.
   Shapes derived from public/hero/options/hero-doodle-v2-a-recording-session-bw-simplified.png
   (1280x720, same as viewBox) via flood-fill of white interiors + 1px
   bleed under the 3-4px ink, so edges hide under TRACE_D with zero spill.
   Singer / engineer trousers are open in the ink (legs never close), so those
   fills are inset polygons of the body — hoodie hem, hip, seat/calf — never
   the booth frames, desk side, or chair. Walker legs are closed masks.
   Black gear uses exact closed hair masks + inset ellipses.
   TRACE_D untouched. */

const MAROON = "#7c2128";
const NAVY = "#1e3a8a";
const GEAR = "#161616";

export function HeroRecordingSessionFills() {
  return (
    <g data-part="recording-session-fills" stroke="none">
      {/* walker torso + sleeve (closed mask) */}
      <path
        d="M122,219 L109,231 L97,263 L84,311 L86,332 L122,379 L139,393 L145,392 L155,384 L160,375 L154,367 L153,353 L130,323 L131,316 L118,311 L130,311 L143,261 L143,273 L133,309 L133,323 L156,353 L157,367 L161,373 L183,388 L200,391 L201,378 L206,367 L206,353 L199,325 L192,245 L168,243 L161,236 L157,226 L141,218 Z"
        fill={MAROON}
        stroke="none"
      />
      {/* walker legs (closed masks, diagonal, not boxes) */}
      <path
        d="M122,421 L104,490 L92,505 L57,569 L71,583 L90,590 L98,589 L101,577 L107,573 L143,511 L156,480 Z"
        fill={NAVY}
        stroke="none"
      />
      <path
        d="M162,380 L157,393 L146,404 L142,404 L142,398 L134,391 L116,397 L117,404 L175,506 L185,544 L205,591 L204,599 L211,614 L216,614 L250,596 L250,582 L243,575 L216,481 L187,410 L188,407 L194,415 L196,394 L183,391 Z"
        fill={NAVY}
        stroke="none"
      />
      {/* walker hair (closed mask, face stays white) */}
      <path
        d="M222,96 L202,94 L201,87 L189,89 L167,87 L154,93 L146,106 L142,106 L141,110 L135,111 L135,117 L127,131 L131,132 L132,144 L137,155 L150,169 L153,169 L147,158 L148,142 L157,135 L172,138 L178,131 L183,116 L197,117 L204,114 L210,108 L214,108 L220,114 L222,110 L226,110 L225,107 L219,104 Z"
        fill={GEAR}
        stroke="none"
      />
      {/* walker headphone stays white (line art) — no fill */}

      {/* singer trousers first so the maroon hem tucks over the top edge.
          Open ink: no closed legs. Hug outer leg strokes (left 456,
          right inner+1, 1px bleed under 3-4px ink) like walker — diagonal,
          not boxes. Right edge follows leg outward (560->566), not inward,
          so no white gap at lower right. Top tucks under maroon (y=469),
          bottom follows leg tips diagonally (574 left -> 554 right),
          crotch tick draws over blue. Never the booth frames or floor. */}
      <path
        d="M455,468 L560,468 L562,490 L563,500 L564,510 L565,520 L566,530 L567,542 L567,556 L531,563 L501,568 L471,573 L455,576 Z"
        fill={NAVY}
        stroke="none"
      />
      {/* singer upper torso + sleeve (closed mask) */}
      <path
        d="M480,219 L464,220 L456,225 L455,237 L446,247 L447,259 L450,260 L462,252 L475,251 L509,266 L479,255 L460,256 L444,270 L435,301 L434,372 L442,392 L458,400 L495,393 L539,368 L531,356 L531,338 L517,343 L505,342 L475,353 L473,350 L458,351 L466,347 L480,348 L480,297 L483,346 L509,338 L520,339 L531,334 L536,336 L558,313 L558,290 L561,308 L569,304 L564,277 L557,264 L548,259 L541,266 L547,256 L547,247 L540,238 L533,238 L531,246 L534,256 L527,268 L503,245 L469,227 L474,225 L477,229 L491,234 L494,222 Z"
        fill={MAROON}
        stroke="none"
      />
      {/* singer waistband / lower belly (closed mask) */}
      <path
        d="M600,376 L593,376 L592,373 L577,367 L573,350 L570,350 L556,361 L543,364 L540,371 L527,376 L521,383 L503,393 L468,403 L449,401 L448,437 L458,447 L454,448 L453,461 L467,467 L495,471 L534,469 L560,461 L560,445 L565,436 L561,363 L564,365 L566,402 L572,407 L597,409 L592,403 L591,393 Z"
        fill={MAROON}
        stroke="none"
      />
      {/* singer hair east (closed mask, pixel-perfect) */}
      <path
        d="M497,161 L503,162 L514,169 L517,159 L526,152 L533,142 L538,143 L538,150 L540,150 L544,140 L548,140 L552,145 L554,145 L556,140 L559,140 L568,146 L577,148 L568,136 L568,132 L574,130 L574,128 L556,124 L557,116 L521,116 L513,120 L504,130 L498,145 Z"
        fill={GEAR}
        stroke="none"
      />
      {/* singer headphone stays white (line art) — no fill */}

      {/* mic stays white (line art) — no fill */}

      {/* engineer trousers first so the maroon hem tucks over the lap.
          Open ink: desk side is never trousers. Whole trousers like
          walker/singer — diagonal, not boxes, 1px bleed under ink:
          lap hugs thigh-top diagonal, then hip ink down to the butt
          (560->592), curves with the chair back (1189/1196/1185) to the
          seat, and back along the seat (629->635) to the knee. Knee spans
          the full shin width (941-1018, seat lines draw over it), calf
          hugs shins below (662->691). Chair stays white right of the leg. */}
      <path
        d="M948,601 L970,592 L1000,584 L1030,577 L1060,569 L1085,563 L1100,560 L1110,564 L1120,571 L1130,577 L1140,581 L1150,585 L1160,588 L1170,590 L1180,592 L1189,605 L1196,615 L1185,625 L1180,629 L1170,631 L1160,634 L944,635 Z"
        fill={NAVY}
        stroke="none"
      />
      <path
        d="M941,633 L1016,633 L1018,664 L946,664 Z"
        fill={NAVY}
        stroke="none"
      />
      <path
        d="M947,662 L1016,662 L1025,691 L954,691 Z"
        fill={NAVY}
        stroke="none"
      />
      {/* engineer shirt + thinking arm (closed mask, fist stays white) */}
      <path
        d="M1148,334 L1115,355 L1092,379 L1089,375 L1086,376 L1079,402 L1055,434 L1056,459 L1050,414 L1030,419 L1011,415 L1008,476 L1015,496 L1029,506 L1035,489 L1051,478 L1093,387 L1105,374 L1089,401 L1069,450 L1049,487 L1044,484 L1035,494 L1032,505 L1034,520 L1043,531 L1051,535 L1069,536 L1080,532 L1107,501 L1146,439 L1137,459 L1108,503 L1114,538 L1108,559 L1126,572 L1148,582 L1186,589 L1194,514 L1209,430 L1200,400 L1183,365 L1167,346 Z"
        fill={MAROON}
        stroke="none"
      />
      {/* engineer hair (open outline -> small inset blob, no spill/face) */}
      <ellipse cx={1055} cy={208} rx={16} ry={9} fill={GEAR} stroke="none" />
    </g>
  );
}
