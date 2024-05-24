import navbar from "../Navbar.module.css"

import { motion} from "framer-motion"
import { ListItem } from "./ListItem"
import { FooterNav } from "./FooterNav"
import { DescriptionNav } from "./DescriptionNav"
import { height } from "../anim"
import { useState } from "react"

const links = [
  {
    title: "Sobre",
    href: "#about",
    description: "Conheça mais sobre o funcionamento da nossa academia e nossa missão de transformar vidas."
  },
  {
    title: "Modalidades",
    href: "#class",
    description: "Descubra as diversas modalidades que oferecemos para todos os níveis e objetivos."
  },
  {
    title: "Planos",
    href: "#price",
    description: "Explore nossos planos de assinatura flexíveis e escolha o que melhor se adapta a você."
  },
  {
    title: "Treinadores",
    href: "#trainers",
    description: "Conheça nossa equipe de treinadores especializados e prontos para te ajudar a alcançar seus objetivos."
  },
  {
    title: "Contato",
    href: "#contact",
    description: "Entre em contato conosco para tirar dúvidas ou agendar uma visita à nossa academia."
  },
]

interface PropsNavLinks{
  setIsActive: React.Dispatch<React.SetStateAction<boolean>>,
}

/*
  Coponente que serve como auxiliador para passar qual link está com o hover selecionado, 
  ajuda na descrição do link e no blur dos links.
*/

export const NavLinks = ({setIsActive}: PropsNavLinks) => {
  const [selectedLink, setSelectedLink] = useState({isActive: false, index: 0})

  return (
    <motion.div className={navbar.navLinks}
      variants={height} 
      initial="initial"
      animate="open"
      exit="closed"
    >
      <div className={navbar.wrapper}>
        <div className={navbar.boxNavLinks}>
          <ListItem links={links} selectedLink={selectedLink} setSelectedLink={setSelectedLink} setIsActive={setIsActive}/>
          <FooterNav/>
        </div>

        <DescriptionNav description={links[selectedLink.index].description} isActive={selectedLink.isActive}/>
      </div>  
    </motion.div>
  )
}
