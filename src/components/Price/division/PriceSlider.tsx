import price from "../Price.module.css"

import { MotionValue, motion, useTransform } from "framer-motion"
import { Check } from "lucide-react";

interface PropsPriceSlider{
  dataPrices : {
    title: string;
    monthly: number;
    annual: number;
    img: string;
    offers: string[];
  }[],
  scrollYProgress: MotionValue<number>,
}

export const PriceSlider = ({ dataPrices, scrollYProgress }: PropsPriceSlider) => {
  const top = useTransform(scrollYProgress, [0,1], ["0", "-200%"])

  return (
    <div className={price.offerHidden}>
      <motion.div style={{top}}>
        {dataPrices.map((prices, index) => (
          <motion.div className={price.boxPrice}
          style={{backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(${prices.img})`}}
          key={index}
          >
            <ul className={price.listOffer}>
              {prices.offers.map((offer, index) => (
                <li key={index}>
                  <div>
                    <Check strokeWidth={2} size={25}/>
                  </div>
                  <span>{offer}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </motion.div>
    </div>
  )
}
