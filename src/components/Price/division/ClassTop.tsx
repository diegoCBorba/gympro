import price from "../Price.module.css"
import { motion } from "framer-motion"

interface PropsClassTop{
  toggleSwitch: boolean,
  setToggleSwitch: React.Dispatch<React.SetStateAction<boolean>>,
}

export const ClassTop = ({ setToggleSwitch, toggleSwitch }: PropsClassTop) => {
  
  function handleToggle(){
    setToggleSwitch(!toggleSwitch)
  }

  return (
    <div className={price.containerTop}>
      <div className={price.containerTitle}>
        <h1>Encontre o <span>Plano Perfeito</span> para Você</h1>
        <p><span>Junte-se Hoje</span> Mesmo e Alcance Seus Objetivos</p>
      </div>
      <div 
      className={`${price.containerSwich} 
      `} 
      onClick={handleToggle}>
        <p>Mensal</p>
        <div className={`${price.boxSwitch} ${toggleSwitch ? price.toggle : ""}`}>
          <motion.span 
          initial={{top: "0%"}}
          animate={{top: toggleSwitch ? "60%" : "0%"}}
          transition={{duration: 0.2}}/>
        </div>
        <div className={price.anualP}>
          <p>Anual</p>
        </div>
      </div>
    </div>
  )
}
