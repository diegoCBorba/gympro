import { motion } from "framer-motion"
import style from "../Class.module.css"

import { titleAnimation } from "../anim"
import { opacity } from "../../Navbar/anim"
import { CharTranslate } from "../../SentenceTranslate/CharTranslate"

interface PropsDescription{
  data: {
    class: string,
    description: string,
    src: string,
  },
  onHover: boolean
}

export const DescriptionClass = ({ data, onHover }: PropsDescription) => {
  return (
    <div className={style.containerDescription}>
      <motion.h1
      variants={titleAnimation}
      initial="initial"
      animate={onHover ? "open" : "initial"}
      >
        <CharTranslate word="Nossas Modalidades" direction={true} velocity={2}/>
      </motion.h1>
      <motion.p variants={opacity}
        initial="initial"
        animate={onHover? "open" : "closed"}
      >
        {onHover ? 
        data.description 
        : 
        ""}
      </motion.p>
    </div>
  )
}
