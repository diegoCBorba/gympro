import contact from "../Contact.module.css"

import { MotionValue, motion, useTransform } from "framer-motion"
import { SenteceTranslate } from "../../SentenceTranslate/SentenceTranslate"

interface PropsSubtitleContact{
  scrollYProgress: MotionValue<number>,
}

export const SubtitleContact = ({ scrollYProgress }: PropsSubtitleContact) => {
  const top = useTransform(scrollYProgress, [0, 1], ["0", "2rem"])

  return (
    <motion.div style={{top}} className={contact.subtitleBackground}>
      <h2>
        <SenteceTranslate sentence="Conecte-se com" velocity={0}/>
      </h2>
      <h2>
        <SenteceTranslate sentence="o seu" velocity={0}/>
        <span className={contact.color}>
        <SenteceTranslate sentence=" futuro" velocity={0}/>
        </span>
      </h2>
    </motion.div>
  )
}
