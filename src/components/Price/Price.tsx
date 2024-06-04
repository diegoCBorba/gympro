import { useState } from "react"
import price from "./Price.module.css"

import { motion } from "framer-motion"

export const Price = () => {
  const [toggleSwitch, setToggleSwitch] = useState(false)

  function handleToggle(){
    setToggleSwitch(!toggleSwitch)
  }

  return (
    <section id="price" className={price.containerMaster}>
      <div className="container-section">
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
        <div>

        </div>
      </div>
    </section>
  )
}
