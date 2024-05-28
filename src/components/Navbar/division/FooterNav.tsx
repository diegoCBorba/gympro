import navbar from "../Navbar.module.css"

import { motion } from "framer-motion"
import { translateAnimation } from "../anim"
import { SocialIcons } from "./SocialIcons"

/*
  Componente responsável por fazer as animações do footer da navbar
*/

export const FooterNav = () => {
  return (
    <div className={navbar.boxCrypt}>
      <motion.div
        custom={[0.2, 0]}
        variants={translateAnimation}
        initial="initial"
        animate="open"
        exit="closed"
      >
        <SocialIcons isNav={false} isActive={false} />
      </motion.div>
      <motion.p
        custom={[0.2, 0]}
        variants={translateAnimation}
        initial="initial"
        animate="open"
        exit="closed"
      >
        <span>created by</span> <a href="https://diegocardoso.vercel.app/" target="_blank">diego cardoso</a>
      </motion.p>
    </div>
  )
}
