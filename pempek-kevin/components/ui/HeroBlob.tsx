"use client";

import { motion, useReducedMotion } from "framer-motion";

type HeroBlobProps = {
  className?: string;
};

export default function HeroBlob({ className = "" }: HeroBlobProps) {
  const reduce = useReducedMotion();

  return (
    <motion.svg
      viewBox="0 0 800 600"
      aria-hidden="true"
      focusable="false"
      className={`pointer-events-none absolute z-0 ${className}`}
      initial={reduce ? false : { scale: 0.96, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
    >
      <path
        fill="#FFB000"
        d="M 148 146 C 218 42 424 12 588 66 C 726 112 794 246 764 388 C 734 522 572 592 392 572 C 218 554 70 470 40 332 C 18 236 82 180 148 146 Z"
      />
      <path
        fill="#FF8A00"
        opacity="0.55"
        d="M 58 306 C 38 214 106 132 208 98 C 296 68 384 84 442 118 C 332 104 198 148 138 250 C 108 302 84 336 58 306 Z"
      />
      <path
        fill="#FFC847"
        opacity="0.7"
        d="M 508 74 C 604 78 694 136 730 220 C 654 168 566 142 480 150 C 452 152 438 128 456 108 C 470 92 488 78 508 74 Z"
      />
      <path
        fill="#C4262E"
        d="M 512 500 C 592 448 700 466 744 528 C 782 582 724 626 642 636 C 560 646 466 612 446 560 C 434 532 468 520 512 500 Z"
      />
      <path
        fill="#FF7A00"
        d="M 602 518 C 664 492 722 508 746 544 C 704 528 644 542 602 574 C 572 598 542 604 522 594 C 548 574 568 538 602 518 Z"
      />
      <path
        fill="#FFB000"
        d="M 92 388 C 68 366 60 342 68 320 C 82 302 106 298 126 312 C 112 338 102 364 92 388 Z"
      />
      <path
        fill="#FFB000"
        d="M 116 446 C 98 430 92 412 98 394 C 112 382 132 382 148 394 C 138 412 128 430 116 446 Z"
      />
    </motion.svg>
  );
}
