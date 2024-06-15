import footer from "./Footer.module.css" 

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
import { BottomFooter } from "./division/BottomFooter"
import { TopFooter } from "./division/TopFooter"

export const Footer = () => {
  const container = useRef(null)
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end end"]
  })

  const height = useTransform(scrollYProgress, [0, 1], ["60%", "0vh"])

  return (
    <section ref={container} id="footer" className={footer.containerMaster}>
      <motion.div style={{ height }} className={footer.stickyFooter}/>
      <TopFooter scrollYProgress={scrollYProgress}/>
      <BottomFooter/>
    </section>
  )
}
