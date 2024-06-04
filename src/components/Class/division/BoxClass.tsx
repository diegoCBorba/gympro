import { useRef } from "react"
import style from "../MobileClass.module.css"
import { motion, useScroll, useTransform } from "framer-motion"

interface PropsBoxClass{
  item: {
    src: string,
    class: string,
    description: string,
  },
  index: number
}

export const BoxClass = ({ item, index }: PropsBoxClass) => {
  const container = useRef(null)
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["end start", "start end"],
  })

  const top = useTransform(scrollYProgress, [0, 1], ["0%", "-50%"])
  const width = useTransform(scrollYProgress, [0, 1], ["100%", "20%"])

  return (
    <div key={index} className={style.boxClass}>
      <div ref={container} className={style.boxImage}>
        <motion.img style={{top}} src={item.src} alt="" />
      </div>
      <motion.span style={{width}}/>
      <div className={style.boxDescription}>
        <h2>{item.class}</h2>
        <p>{item.description}</p>
      </div>
    </div>
  )
}
