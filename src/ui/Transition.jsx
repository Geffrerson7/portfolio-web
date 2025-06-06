"use client";

import { motion } from "framer-motion";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(useGSAP, ScrollTrigger);

import { cn } from "../utils/cn";

export const SlideIn = ({
  className,
  initial,
  whileInView,
  transition,
  viewport,
  ...rest
}) => {
  const init = initial || { opacity: 0, y: "100%" };
  const inView = whileInView || { opacity: 1, y: 0 };
  const trans = transition || { duration: 0.5, delay: 0.3 };

  return (
    <motion.span
      initial={init}
      whileInView={inView}
      transition={trans}
      viewport={viewport || { once: true }}
      className={cn("inline-block overflow-hidden", className)}
      {...rest}
    />
  );
};

export const Transition = ({ initial, whileInView, transition, ...rest }) => {
  const init = initial || { opacity: 0 };
  const inView = whileInView || { opacity: 1 };
  const trans = transition || { duration: 0.8, delay: 0.4 };

  return (
    <motion.div
      initial={init}
      whileInView={inView}
      transition={trans}
      {...rest}
    />
  );
};

export const OpacityTextReveal = (props) => {
  const textRef = useRef(null);

  useGSAP(
    () => {
      gsap.to(textRef.current, {
        backgroundPositionX: 0,
        ease: "none",
        scrollTrigger: {
          trigger: textRef.current,
          scrub: 1,
          start: "top bottom",
          end: "bottom center",
        },
      });
    },
    { revertOnUpdate: true }
  );

  return (
    <span
      {...props}
      ref={textRef}
      className={cn("text-reveal", props.className)}
    />
  );
};

export const OpacityTransition = ({ children }) => {
  return (
    <div className="overflow-hidden">
      {children.split("").map((char, i) => (
        <motion.span
          initial={{ opacity: 0.1 }}
          animate={{ opacity: 1 }}
          layout
          transition={{ delay: i * 0.03, ease: [0.215, 0.61, 0.355, 1] }}
          exit={{
            y: 0,
            transition: { delay: i * 0.02, ease: [0.215, 0.61, 0.355, 1] },
          }}
          key={i}
          className="inline-block"
        >
          {char}
        </motion.span>
      ))}
    </div>
  );
};
