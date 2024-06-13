import { useRef } from "react"
import trainer from "../Trainers.module.css"

import { motion, useScroll, useTransform } from "framer-motion"

interface PropsBoxTrainer{
  index: number,
  trainers: {
    name: string;
    specialization: string;
    src: string;
  },
}

export const BoxTrainer = ({ index, trainers }: PropsBoxTrainer) => {
  const container = useRef(null)
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["end start", "start end"]
  })
  
  const top = useTransform(scrollYProgress, [0, 1], ["0", "-20%"]) 

  return (
    <div key={index} className={trainer.boxTrainer}>
      <div ref={container} className={trainer.boxImage}>
          <motion.img src={trainers.src} alt="" style={{top}}/>
      </div>
      <div className={trainer.boxDescription}>
        <h2>{trainers.name}</h2>
        <p>{trainers.specialization}</p>
      </div>
    </div>
  )
}
