import style from "./Class.module.css"

import gymImg from "../../../public/home/class/class-gym.jpg"
import yogaImg from "../../../public/home/class/class-yoga.jpg"
import swimImg from "../../../public/home/class/class-swim.jpg"
import crossfitImg from "../../../public/home/class/class-crossfit.jpg"

import { useRef, useState } from "react"
import { motion, useTransform, useScroll } from "framer-motion"
import { titleAnimation } from "./anim"
import { opacity } from "../Navbar/anim"

import { CharTranslate } from "../SentenceTranslate/CharTranslate"

interface PropsDataClasses{
  class: string,
  description: string,
  src: string,
}

const dataClasses: PropsDataClasses[] = [
  {
    class: "musculação",
    description: "Na Gympro, oferecemos musculação com equipamentos modernos e orientação profissional para aumentar sua força e massa muscular. Nosso ambiente é projetado para proporcionar um treino eficiente e seguro, ajudando você a alcançar seus objetivos de fitness.",
    src: gymImg,
  },
  {
    class: "yoga",
    description: "Nossa yoga proporciona relaxamento e autoconhecimento, com foco na flexibilidade e equilíbrio. As aulas são conduzidas por instrutores experientes, criando um espaço tranquilo para aliviar o estresse e melhorar seu bem-estar.",
    src: yogaImg,
  },
  {
    class: "natação",
    description: "Experimente a natação na Gympro, com uma piscina moderna e instrutores qualificados. Este treino completo melhora a resistência cardiovascular e trabalha todo o corpo, proporcionando uma atividade refrescante e eficiente.",
    src: swimImg,
  },
  {
    class: "crossfit",
    description: "Na Gympro, o crossfit combina exercícios de alta intensidade e movimentos funcionais para desenvolver força e agilidade. Nossa abordagem dinâmica e envolvente mantém você motivado e desafiado em cada sessão.",
    src: crossfitImg,
  },
]


export const Class = () => {
  const container = useRef(null)
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["end start" , "start end"]
  })

  const[onHover, setOnHover] = useState<boolean>(false)
  const[indexData, setIndexData] = useState<number>(0)

  const handleIndex = (index: number) => {
    setIndexData(index)
    setOnHover(true)
  }

  const handleHover = () =>{
    setOnHover(!onHover)
  }

  const bottom = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);

  return (
    <section id="class" className={style.containerMaster}>
      <div ref={container} className="container-section">
        <div className={style.containerImage}>
          <div className={style.boxImage}>
            <motion.img 
            style={{bottom}} 
            src={dataClasses[indexData].src}
            alt={`foto de ${dataClasses[indexData].class}`}/>
          </div>
        </div>
        <div className={style.containerContent}>
          <div className={style.containerDescription}>
            <motion.h1
            variants={titleAnimation}
            initial="initial"
            animate={onHover ? "open" : "initial"}
            >
              <CharTranslate word="Nossas Modalidades" direction={true} velocity={2}/>
            </motion.h1>
            <motion.p variants={opacity}
              initial="initial"
              animate={onHover? "open" : "closed"}
            >
              {onHover ? 
              dataClasses[indexData].description 
              : 
              ""}
            </motion.p>
          </div>
          <div className={style.containerList}>
            <ul className={style.listClasses}
            onMouseLeave={() => handleHover()}>
              {dataClasses.map((item, index) => (
                <motion.li key={index}
                  whileHover={{paddingLeft: "2rem"}}
                  onMouseEnter={() => handleIndex(index)}
                >
                  {item.class}
                </motion.li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className={style.teste}>

      </div>
    </section>
  )
}
