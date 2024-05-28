import { ReactNode ,useRef } from 'react'
import sentenceTrans from "./SentenceTranslate.module.css"

import { motion, useInView } from 'framer-motion'

import { translateAnimation } from './anim'

interface PropsSentence{
  velocity: number,
  sentence: string
}

export const SenteceTranslate = ({ velocity, sentence }: PropsSentence) => {
  const body = useRef(null);
  const isInView = useInView(body, {once: true, margin: "10%"})

  const chars: ReactNode[] = []
  sentence.split(" ").forEach((char, index) => {
    chars.push(
      <span ref={body} className={sentenceTrans.containerSpan}>
        <motion.span custom={index*(Number(velocity)/100)} key={`c_${index}`}
          variants={translateAnimation}
          initial="initial"
          animate={isInView ? "open" : ""}
        >
          {char}
        </motion.span>
      </span>
    )

    if(index < sentence.length - 1){
      chars.push(
        <>{" "}</>
      )
    }
  })

  return chars
}
