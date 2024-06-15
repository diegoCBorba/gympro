import {  motion, useInView } from "framer-motion";
import { ReactNode, useRef } from "react";

import charTrans from "./SentenceTranslate.module.css"

import { translateAnimation } from "./anim";

interface PropsChar {
  velocity: number,
  word: string,
  direction: boolean
  delay ?: number
}

export const CharTranslate = ({ velocity, word, direction, delay = 0 }: PropsChar) => {
  const body = useRef(null);
  const isInView = useInView(body, { once: true, margin: "10%" });

  const chars: ReactNode[] = [];
  word.split("").forEach((char, index) => {
    chars.push(
      <span ref={body} className={charTrans.containerSpan} key={`span_${index}`}>
        <motion.span
          custom={
            direction ?
            delay + (index * (Number(velocity)/100))
            :
            delay + ((word.length - index) * (Number(velocity)/100))
          }
          key={`c_${index}`}
          variants={translateAnimation}
          initial="initial"
          animate={isInView ? "open" : ""}>
          {char === " " ? "\u00A0" : char}
        </motion.span>
      </span>
    );
  });

  return <>{chars}</>;
}
