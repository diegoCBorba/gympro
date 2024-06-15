import { MotionValue, motion, useTransform } from "framer-motion"
import style from "../Class.module.css"

interface PropsImage{
  data: {
    class: string,
    description: string,
    src: string,
  },
  scrollYProgress: MotionValue<number>
}

export const ImageClass = ({ data, scrollYProgress }: PropsImage) => {
  const bottom = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);

  return (
    <div className={style.containerImage}>
      <div className={style.boxImage}>
        <motion.img
        style={{bottom}}
        src={data.src}
        alt={`foto de ${data.class}`}/>
      </div>
    </div>
  )
}
