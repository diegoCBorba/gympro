import { ReactNode, useRef } from 'react'
import charTrans from "./CharTranslate.module.css"

import { motion, useInView } from 'framer-motion'

const transition = {duration: 0.7, ease: [0.76, 0, 0.24, 1]}

const translateAnimation = {
  initial: {
    y: "100%"
  },
  open: (i: number) => ({
    y: 0,
    transition: {...transition, delay: i}
  }),
}

export const CharTranslate = (title: string, velocity: number) => {
  const body = useRef(null);
  const isInView = useInView(body, {once: true, margin: "10%"})

  const chars: ReactNode[] = []
  title.split(" ").forEach((char, index) => {
    chars.push(
      <span ref={body} className={charTrans.containerSpan}>
        <motion.span custom={index*(velocity/100)} key={`c_${index}`}
          variants={translateAnimation}
          initial="initial"
          animate={isInView ? "open" : ""}
        >
          {char}
        </motion.span>
      </span>
    )

    if(index < title.length - 1){
      chars.push(
        <>{" "}</>
      )
    }
  })

  return chars
}
