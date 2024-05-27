import about from "./About.module.css"


import { useRef } from "react"
import { useScroll } from "framer-motion"

import { PictureAbout } from "./division/PictureAbout"
import { DescriptionAbout } from "./division/DescriptionAbout"

export const About = () => {
  const container = useRef(null)
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start end', 'end start']
  })



  return (
    <>
    <section ref={container} id="about" className={about.containerMaster}>
      <div className="container-section">
        <PictureAbout scrollYProgress={scrollYProgress}/>
        <DescriptionAbout scrollYProgress={scrollYProgress}/>
      </div>
    </section>
    <div className={about.teste}>

    </div>
    </>
  )
}

