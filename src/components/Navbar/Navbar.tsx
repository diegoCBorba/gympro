import navbar from "./Navbar.module.css"

import { useEffect, useState } from "react"
import { motion, useScroll, useMotionValueEvent, easeInOut, AnimatePresence } from "framer-motion"

import { Link } from "react-router-dom"
import { HamburgerNav } from "../HamburgerNav/HamburgerNav"
import { SocialIcons } from "./division/SocialIcons"
import { NavLinks } from "./division/NavLinks"

/*
Componente geral da NavBar
Controla a abertura do Menu e Hidden quando scrolla para baixo
*/

export const Navbar = () => {
  const { scrollY } = useScroll()

  const [isActive, setIsActive] = useState(false)
  const [hidden, setHidden] = useState(false)

  function handleChange(){
    setIsActive(!isActive)
  }

  useEffect(() => {
    if (hidden) {
      setIsActive(false);
    }
  }, [hidden]);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0
    if(latest > previous && latest > 70) {
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
      <div className={navbar.boxNav}>
        <div className={navbar.logo}>
          <Link to="/">gympro</Link>
        </div>
        <HamburgerNav isActive={isActive} onClick={handleChange}/>
        <SocialIcons isNav={true} isActive={isActive}/>
      </div>

      <AnimatePresence mode="wait">
        {isActive && <NavLinks setIsActive={setIsActive}/>}
      </AnimatePresence>
    </motion.div>
  )
}
