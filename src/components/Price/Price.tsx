import { useEffect, useRef, useState } from "react"
import price from "./Price.module.css"

import { useScroll } from "framer-motion"
import priceImg1 from "../../../public/home/price/price-1.jpg"
import priceImg2 from "../../../public/home/price/price-2.jpg"
import priceImg3 from "../../../public/home/price/price-3.jpg"
import { TitlePrice } from "./division/TitlePrice"
import { ValuePrice } from "./division/ValuePrice"
import { PriceSlider } from "./division/PriceSlider"
import { ToggleButtonPrice } from "./division/ToggleButtonPrice"

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

export const Price = () => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
      target: container,
      offset: ['start start', 'end end']
  })

  const [toggleState, setToggleState] = useState(false)

  function handleToggle(){
    setToggleState(!toggleState)
  }

  const [titleVariant, setTitleVariant] = useState("first");

  useEffect(() => {
    const unsubscribe = scrollYProgress.onChange((latest) => {
      if (latest < 0.33) {
        setTitleVariant("first");
      } else if (latest < 0.80) {
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
        <div className={price.containerFixed}>
          <TitlePrice dataPrices={dataPrices} titleVariant={titleVariant}/>

          <div className={price.containerPrices}>
            <ValuePrice dataPrices={dataPrices} toggleState={toggleState} titleVariant={titleVariant}/>
            <PriceSlider dataPrices={dataPrices} scrollYProgress={scrollYProgress}/>
            <ToggleButtonPrice handleToggle={handleToggle} toggleState={toggleState}/>
          </div>
        </div>
      </div>
    </section>
  )
}
