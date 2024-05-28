import { ButtonMagnetic } from "../../ButtonMagnetic/ButtonMagnetic"
import { SenteceTranslate } from "../../SentenceTranslate/SentenceTranslate"
import about from "../About.module.css"

import { motion, MotionValue, useTransform } from "framer-motion"

interface propsDescription{
  scrollYProgress: MotionValue<number>,
}

export const DescriptionAbout = ({ scrollYProgress }: propsDescription) => {
  const bottom = useTransform(scrollYProgress, [0, 1], ["-20%", "15%"])

  return (
    <div className={about.containerAbout}>
      <h1>
        <SenteceTranslate velocity={5} sentence="Por que nos escolher?"/>
      </h1>
      <p>
        <SenteceTranslate velocity={2} sentence="Na GymPro, oferecemos uma variedade de modalidades de treino, desde musculação até aulas de alta intensidade. Nossos planos customizáveis são projetados para atender às suas necessidades específicas. Com equipamentos modernos e uma equipe dedicada, garantimos que você alcance seus objetivos fitness."/>
      </p>

      <motion.div style={{bottom}} className={about.containerButtonContact}>
        <ButtonMagnetic>
          <a href="#contact" className={about.buttonContact}>
            <span>contato</span>
            <span>clique</span>
          </a>
        </ButtonMagnetic>
      </motion.div>
    </div>
  )
}
