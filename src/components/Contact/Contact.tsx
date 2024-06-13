import { useRef } from "react"
import contact from "./Contact.module.css"
import { useScroll } from "framer-motion"
import { SubtitleContact } from "./division/SubtitleContact"
import { BoxContact } from "./division/BoxContact"

export const Contact = () => {
  const container = useRef(null)
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"]
  })

  return (
    <>
    <section ref={container} id="contact" className={contact.containerMaster}>
      <div className="container-section">
        <SubtitleContact/>
        <BoxContact scrollYProgress={scrollYProgress}/>
      </div>
    </section>
    <div className={contact.teste}></div>
    </>
  )
}
