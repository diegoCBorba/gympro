import style from "./PreLoader.module.css"

import { motion } from "framer-motion"
import { slideUp, textGradient, topText } from "./anim";

export const PreLoader = () => {
  const columns = Array(4).fill(0);

  return (
    <div className={style.containerMaster}>
      {columns.map((_, index) => (
        <motion.div 
          key={index}
          custom={index}
          className={style.column}
          variants={slideUp}
          initial="initial"
          exit="exit"
        />
      ))}
      <div className={style.containerTitle}>
        <motion.div className={style.boxTitle}
          variants={topText}
          initial="initial"
          exit="exit"
        >
          <span
          >GYMPRO</span>
          <motion.span
            variants={textGradient}
            initial="initial"
            animate="enter"
          >GYMPRO</motion.span>
        </motion.div>
      </div>
    </div>
  )
}
