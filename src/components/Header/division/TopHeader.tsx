import header from "../Header.module.css"

import { Text3d } from "./Text3d"
import { MotionValue, motion, useTransform } from "framer-motion"

interface PropsTop{
  scrollYProgress: MotionValue<number>,
}

export const TopHeader = ({ scrollYProgress }: PropsTop) => {
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

  return (
    <div className={header.containerHigher}>
      <motion.div style={{ y }} className={header.boxLogoHeader}>
        <Text3d primary="faça parte" secondary="faça parte"/>
        <Text3d primary="viva fitness" secondary="viva fitness" secondClass={true}/>
      </motion.div>
    </div>
  )
}
