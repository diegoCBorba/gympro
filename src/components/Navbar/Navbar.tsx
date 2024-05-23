import navbar from "./Navbar.module.css"

import { useState } from "react"
import { motion, useScroll, useMotionValueEvent, easeInOut } from "framer-motion"

import { Link } from "react-router-dom"
import { ListItem } from "./division/ListItem"
import { HamburgerNav } from "../HamburgerNav/HamburgerNav"

export const Navbar = () => {
  const { scrollY } = useScroll()

  const [hidden, setHidden] = useState(false)

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0
    if(latest > previous && latest > 96) {
      setHidden(true)
    }else{
      setHidden(false)
    }
  })

  return (
    <motion.div className={navbar.container}
      variants={{
        visible: { y: 0 },
        hidden: { y: "-100%" },
      }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.35, ease: easeInOut }}
    >
      <div className={navbar.logo}>
        <Link to="/">gympro</Link>
      </div>

      <ListItem/>
      <HamburgerNav hidden={hidden}/>
    </motion.div>
  )
}
