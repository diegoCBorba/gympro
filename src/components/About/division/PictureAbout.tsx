import about from "../About.module.css"

import aboutMan from "../../../../public/home/about/about-man.jpg"
import aboutHalter from "../../../../public/home/about/about-halter.jpg"

import { motion, MotionValue, useTransform } from "framer-motion"

interface propsPicture{
  scrollYProgress: MotionValue<number>,
}

export const PictureAbout = ({ scrollYProgress }: propsPicture) => {
  const top = useTransform(scrollYProgress, [0, 1], ["0%", "-15%"])
  const bottom = useTransform(scrollYProgress, [0, 1], ["-20%", "15%"])

  return (
    <div className={about.containerPictures}>
    <motion.div style={{top}} className={about.pictureOne}><img src={aboutHalter} alt="Homem Forte"/></motion.div>
    <motion.div style={{bottom}} className={about.pictureTwo}><img src={aboutMan} alt="Halteres" /></motion.div>
  </div>
  )
}
