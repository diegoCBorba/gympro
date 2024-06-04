import style from "./Class.module.css"

import gymImg from "../../../public/home/class/class-gym.jpg"
import yogaImg from "../../../public/home/class/class-yoga.jpg"
import swimImg from "../../../public/home/class/class-swim.jpg"
import crossfitImg from "../../../public/home/class/class-crossfit.jpg"

import { FullSizeClass } from "./division/FullSizeClass"
import { MobileClass } from "./division/MobileClass"
import { useEffect, useState } from "react"

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
  const [shouldLoadComponent, setShouldLoadComponent] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      setShouldLoadComponent(width >= 800);
    };

    window.addEventListener('resize', handleResize);
    handleResize(); // Chamada inicial para definir o estado com base na largura inicial

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <section id="class" className={style.containerMaster}>
      {shouldLoadComponent? <FullSizeClass dataClasses={dataClasses}/> : <MobileClass dataClasses={dataClasses}/>}
    </section>
  )
}
