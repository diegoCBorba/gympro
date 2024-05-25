import header from "../Header.module.css"

import { motion, useTransform, MotionValue } from "framer-motion"

interface PropsApresentation{
  scrollYProgress: MotionValue<number>,
}

export const Apresetation = ({scrollYProgress}: PropsApresentation) => {

  const edit = useTransform(scrollYProgress, [0, 1], ["20%", "70%"]);
  const edit2 = useTransform(scrollYProgress, [0, 1], ["50%", "100%"]);
  const edit3 = useTransform(scrollYProgress, [0, 1], ["-20", "60%"]);

  return (
    <div className={header.containerApresetation}>
      <motion.div style={{bottom: edit}} className={header.firstTation}>
        <p>Oferecemos <span>planos customizáveis</span> que se adaptam perfeitamente às suas necessidades e objetivos pessoais.</p>
      </motion.div>
      <motion.div style={{bottom: edit2}} className={header.secondTation}>
        <p>Oferecemos mais de 6 <span>modalidades</span> de treino para todos os gostos.</p>
      </motion.div>
      <motion.div style={{bottom: edit3}} className={header.secondTation}>
        <p>Nossa equipe de <span>profissionais qualificados</span> está aqui para te apoiar.</p>
      </motion.div>
    </div>
  )
}
