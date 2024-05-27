import header from "./Header.module.css" 

import { useRef } from "react"
import { useScroll } from "framer-motion"

import { BackgroundHeader } from "./division/BackgroundHeader"
import { TopHeader } from "./division/TopHeader"

export const Header = () => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
      target: container,
      offset: ['start start', 'end start']
  })

  return (
    <section ref={container} id="header" className={header.containerMaster}>
      <div className={header.containerRef}>
        <BackgroundHeader scrollYProgress={scrollYProgress}/>
        <TopHeader scrollYProgress={scrollYProgress}/>
      </div>
    </section>
  )
}
