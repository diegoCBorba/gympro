import { motion } from "framer-motion"
import header from "../Header.module.css"

interface PropsText{
  primary: string,
  secondary: string,
  secondClass?: boolean,
  direction: boolean,
}

import { CharTranslate } from "../../SentenceTranslate/CharTranslate"

export const Text3d = ({primary, secondary, secondClass, direction}: PropsText) => {
  return (
      <motion.div className={`${header.containerText}
        ${secondClass? header.second : ""}
      `}>
          <p className={header.primary}>
            <CharTranslate velocity={2} word={primary} direction={direction}/>
          </p>
          <p className={header.secondary}>
            <CharTranslate velocity={2} word={secondary} direction={direction}/>
          </p>
      </motion.div>
  )
}
