import price from "../Price.module.css"

import { animateTitleSlider } from "../anim"
import { motion } from "framer-motion"

interface PropsValuePrice{
  titleVariant:  string,
  dataPrices : {
    title: string;
    monthly: number;
    annual: number;
    img: string;
    offers: string[];
  }[],
  toggleState: boolean
}

export const ValuePrice = ({ titleVariant, dataPrices, toggleState }: PropsValuePrice) => {
  return (
    <div className={price.valuePrice}>
      <div>
        <h3>Preço</h3>
        <div className={price.containerValue}>
          <div className={price.valueFixed}>
            <motion.div
              variants={animateTitleSlider}
              initial="first"
              animate={titleVariant}>
              {dataPrices.map((value, index) => (
                <p key={index}> R$ {toggleState ? value.annual : value.monthly},00</p>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  )
}
