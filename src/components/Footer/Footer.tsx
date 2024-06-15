import footer from "./Footer.module.css" 

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
import { ButtonMagnetic } from "../ButtonMagnetic/ButtonMagnetic"

export const Footer = () => {
  const container = useRef(null)
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end end"]
  })

  const height = useTransform(scrollYProgress, [0, 1], ["60%", "0vh"])

  const right = useTransform(scrollYProgress, [0, 1], ["10%", "20%"])

  return (
    <section ref={container} id="footer" className={footer.containerMaster}>
      <motion.div style={{ height }} className={footer.stickyFooter}/>
      <div className={footer.topContainer}>
        <div className={footer.containerDescription}>
          <div className={footer.logoBox}>
            <p>Só se vive uma vez, então viva</p>
            <h1>GYMPRO</h1>
          </div>
        </div>
        <div className={footer.row}>
          <motion.div style={{right}} className={footer.boxMagnetic}>
            <ButtonMagnetic>
              <div className={footer.magneticButton}>
                <a href="">contato</a>
              </div>
            </ButtonMagnetic>
          </motion.div>
        </div>
        <div className={footer.contactContainer}>
          <ButtonMagnetic>
            <a href="">gympro@gmail.com</a>
          </ButtonMagnetic>
          <ButtonMagnetic>
            <a href="">(xx) xxxxx-xxxx</a>
          </ButtonMagnetic>
        </div>
      </div>
      <div className={footer.containerBottom}>
        <div>
          <h2>Localização</h2>
          <p>Rua das Palmeiras, 123, em Belo Horizonte</p>
        </div>
        <div className={footer.row}/>
        <div className={footer.creditsContainer}>
          <p>2024 &copy; Gympro</p>
          <a href="https://diegocardoso.vercel.app/" target="_blank">Diego Cardoso</a>
        </div>
      </div>
    </section>
  )
}
