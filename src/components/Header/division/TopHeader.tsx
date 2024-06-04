import header from "../Header.module.css"

import { MotionValue, motion, useTransform } from "framer-motion"
import { CharTranslate } from "../../SentenceTranslate/CharTranslate";

interface PropsTop{
  scrollYProgress: MotionValue<number>,
}

export const TopHeader = ({ scrollYProgress }: PropsTop) => {
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

  return (
    <div className={header.containerHigher}>
      <motion.div style={{ y }} className={header.boxLogoHeader}>
        <p>
          <CharTranslate velocity={2} word="seja parte" direction={true}/>
        </p>
        <p>
          <CharTranslate velocity={2} word="viva fitness" direction={false}/>
        </p>
      </motion.div>
    </div>
  )
}
