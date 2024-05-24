import navbar from "../Navbar.module.css"

import { motion } from "framer-motion"
import { opacity } from "../anim"

interface PropsDescriptionNav{
  description: string,
  isActive: boolean
}

/*
  Componente utilizado para a animação e visualização da descrição dos links
*/

export const DescriptionNav = ({description, isActive}: PropsDescriptionNav) => {
  return (
    <motion.div className={navbar.boxTextLinks}
      variants={opacity}
      initial="initial"
      animate={isActive? "open": "closed"}
    >
      <p>
        {description}
      </p>
    </motion.div>
  )
}
