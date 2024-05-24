import React from "react"
import navbar from "../Navbar.module.css"

import { motion } from "framer-motion"
import { translateAnimation } from "../anim"
import { blur } from "../anim"

interface PropsListItem{
  links: {
    title: string,
    href: string,
    description: string,
  }[],
  selectedLink: {
    isActive: boolean, 
    index: number
  },
  setSelectedLink: React.Dispatch<React.SetStateAction<{
    isActive: boolean;
    index: number;
  }>>,
  setIsActive: React.Dispatch<React.SetStateAction<boolean>>,
}

/*
  Componente utilizado para fazer as animações dos links
*/

export const ListItem = ({links, selectedLink, setSelectedLink, setIsActive}: PropsListItem) => {

  const getChar = (title: string): React.ReactNode[] => {
    const chars: React.ReactNode[] = []
    title.split("").forEach((char, index) => {
      chars.push(
        <motion.span custom={[index*0.02, (title.length - index) * 0.01]} key={`c_${index}`}
          variants={translateAnimation}
          initial="initial"
          animate="open"  
          exit="closed"
        >
          {char}
        </motion.span>
      )
    })
    return chars
  }

  return (
    <ul className={navbar.listNavbar}>
      {
        links.map((link, index) => {
          const { title, href } = link;
          return <li key={`l_${index}`}
            onMouseOver={() => {setSelectedLink({isActive: true, index})}}
            onMouseLeave={() => {setSelectedLink({isActive: false, index})}}
            onClick={() => {setIsActive(false)}}
          >
            <a href={href}>
              <motion.p
                variants={blur}
                initial="initial"
                animate={selectedLink.isActive && selectedLink.index !== index ? "open": "closed"}
              >{getChar(title)}</motion.p>
            </a>
          </li>
        })
      }
    </ul>
  )
}
