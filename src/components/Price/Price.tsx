import { useEffect, useRef, useState } from "react"
import price from "./Price.module.css"
import { Check } from "lucide-react"


import { motion, useScroll, useTransform } from "framer-motion"
import priceImg1 from "../../../public/home/price/price-1.jpg"
import priceImg2 from "../../../public/home/price/price-2.jpg"
import priceImg3 from "../../../public/home/price/price-3.jpg"

const dataPrices = [
  {
    title: "Basic",
    monthly: 100,
    annual: 1080,
    img: priceImg1,
    offers: ["Acesso ilimitado à musculação", "Aulas de natação", "Uso de vestiários e chuveiros"]
  },
  {
    title: "Premium",
    monthly: 150,
    annual: 1620,
    img: priceImg2,
    offers: ["Acesso ilimitado à musculação", "Aulas de natação", "Aulas de yoga", "Aulas de crossfit", "Uso de vestiários e chuveiros", "Avaliação física trimestral"]
  },
  {
    title: "Vip",
    monthly: 200,
    annual: 2160,
    img: priceImg3,
    offers: ["Acesso ilimitado a todas as modalidades", "Acesso a todas as aulas de grupo", "Uso de vestiários e chuveiros com armários exclusivos", "Avaliação física bimestral", "Acompanhamento nutricional mensal", "Personal trainer uma vez por semana"]
  },
]

const transition = {duration: 0.3, ease: [0.76, 0, 0.24, 1]}

const animateTitleSlider = {
  first: {top: "0%"},
  second: {top: "-100%", transition},
  third: {top: "-200%", transition}
}

export const Price = () => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
      target: container,
      offset: ['start start', 'end end']
  })

  const top = useTransform(scrollYProgress, [0,1], ["0", "200vh"])
  const topOffer = useTransform(scrollYProgress, [0,1], ["0", "-200%"])

  const [titleVariant, setTitleVariant] = useState("first");

  useEffect(() => {
    const unsubscribe = scrollYProgress.onChange((latest) => {
      if (latest < 0.33) {
        setTitleVariant("first");
      } else if (latest < 0.66) {
        setTitleVariant("second");
      } else {
        setTitleVariant("third");
      }
    });
    return () => unsubscribe();
  }, [scrollYProgress]);

  return (
    <section ref={container} id="price" className={price.containerMaster}>
      <div className="container-section">
        <motion.div className={price.containerFixed} style={{top}}>
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

          <div className={price.containerPrices}>
            <div className={price.valuePrice}>
              <div>
                <h3>Preço</h3>
                <p>R$ xxxx,xx</p>
              </div>
            </div>
            <motion.div style={{top: topOffer}}>
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

            <div className={price.toggleButton}>
              <p>Anual</p>
              <p>Mensal</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
