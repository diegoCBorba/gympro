import { ButtonMagnetic } from "../../ButtonMagnetic/ButtonMagnetic"
import { CharTranslate } from "../../CharTranslate/CharTranslate"
import about from "../About.module.css"

import { motion, MotionValue, useTransform } from "framer-motion"

interface propsDescription{
  scrollYProgress: MotionValue<number>,
}

export const DescriptionAbout = ({ scrollYProgress }: propsDescription) => {
  const bottom = useTransform(scrollYProgress, [0, 1], ["-20%", "15%"])

  return (
    <div className={about.containerAbout}>
      <h1>{CharTranslate("Por que nos escolher?", 5)}</h1>
      <p>{CharTranslate("Na GymPro, oferecemos uma variedade de modalidades de treino, desde musculação até aulas de alta intensidade. Nossos planos customizáveis são projetados para atender às suas necessidades específicas. Com equipamentos modernos e uma equipe dedicada, garantimos que você alcance seus objetivos fitness.", 2)}</p>

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
