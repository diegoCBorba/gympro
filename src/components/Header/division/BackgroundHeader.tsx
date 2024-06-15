import header from "../Header.module.css"

import { motion, MotionValue, useTransform } from "framer-motion"

import imageHeader from "../../../../public/home/header/header-photo.jpg"

interface PropsBackground{
  scrollYProgress: MotionValue<number>,
}

export const BackgroundHeader = ({scrollYProgress}: PropsBackground) => {
  const height = useTransform(scrollYProgress, [0, 1], ["100%", "105%"]);
  const bottom = useTransform(scrollYProgress, [0, 1], ["0%", "-15%"]);

  return (
    <motion.div className={header.boxImageHeader}
      initial={{height: "102%"}}
      animate={{height: "100%"}}
      transition={{duration: 0.8, delay: 3}}
      style={{backgroundImage: `url(${imageHeader})`, height, bottom}}
    />
  )
}
