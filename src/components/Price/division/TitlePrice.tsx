import price from "../Price.module.css"

import { animateTitleSlider } from "../anim"
import { motion } from "framer-motion"

interface PropsTitlePrice{
  titleVariant:  string,
  dataPrices : {
    title: string;
    monthly: number;
    annual: number;
    img: string;
    offers: string[];
  }[]
}

export const TitlePrice = ({ titleVariant, dataPrices }: PropsTitlePrice) => {


  return (
    <div className={price.titlePrice}>
      <p>nossos <span>planos</span></p>
      <div className={price.titleList}>
        <motion.div 
          variants={animateTitleSlider}
          initial="first"
          animate={titleVariant}
        >
          {dataPrices.map((prices, index) => (
            <div>
              <h1 key={index}>{prices.title}</h1>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  )
}
