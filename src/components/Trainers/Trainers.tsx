import trainer from "./Trainers.module.css"

import imgTrainer1 from "../../../public/home/trainers/trainer-1.jpg"
import imgTrainer2 from "../../../public/home/trainers/trainer-2.jpg"
import imgTrainer3 from "../../../public/home/trainers/trainer-3.jpg"
import { CharTranslate } from "../SentenceTranslate/CharTranslate"
import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"

const dataTrainers = [
  {
    name: "Marcos Silva",
    specialization: "Musculação e Treinamento de Força",
    src: imgTrainer2
  },
  {
    name: "Ana Paula",
    specialization: "Yoga e Flexibilidade",
    src: imgTrainer3
  },
  {
    name: "Julia Pereira",
    specialization: "Crossfit e Treinamento Funcional",
    src: imgTrainer1
  },
]

export const Trainers = () => {
  const container = useRef(null)
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["end start", "start end"]
  })

  const top = useTransform(scrollYProgress, [0, 1], ["0", "-10%"]) 

  return (
    <>
    <section id="trainers" className={trainer.containerMaster}>
      <div className="container-section">
        <div className={trainer.titleTrainer}>
          <h1>Nosso <span>Time</span></h1>
          <p>Conheça Nossos Treinadores Especializados e Alcance Seus Objetivos com os Melhores Profissionais!</p>
        </div>
        <div className={trainer.containerTrainers}>
          {dataTrainers.map((trainers, index) => (
            <div key={index} className={trainer.boxTrainer}>
              <div ref={container} className={trainer.boxImage}>
                  <motion.img src={trainers.src} alt="" style={{top}}/>
              </div>
              <div className={trainer.boxDescription}>
                <h2>{trainers.name}</h2>
                <p>{trainers.specialization}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
    <div className={trainer.teste}></div>
    </>
  )
}
