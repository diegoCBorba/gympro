import header from "../Header.module.css"

import { motion, MotionValue, useTransform } from "framer-motion"

import imageHeader from "../../../../public/home/header/header-man.png"

interface PropsBackground{
  scrollYProgress: MotionValue<number>,
}

export const BackgroundHeader = ({scrollYProgress}: PropsBackground) => {
  const height = useTransform(scrollYProgress, [0, 1], ["90%", "80%"]);
  const bottom = useTransform(scrollYProgress, [0, 1], ["0%", "-15%"]);

  return (
    <div className={header.boxImageHeader}>
      <motion.img style={{bottom, height}} src={imageHeader} alt="Homem Forte"/>
    </div>
  )
}
