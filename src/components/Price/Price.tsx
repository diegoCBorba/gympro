import { useState } from "react"
import price from "./Price.module.css"

import { ClassTop } from "./division/ClassTop"
import { Check } from "lucide-react"

const dataPrices = [
  {
    title: "Básico",
    monthly: 100,
    annual: 1080,
    offers: ["Acesso ilimitado à musculação", "Aulas de natação", "Uso de vestiários e chuveiros"]
  },
  {
    title: "Premium",
    monthly: 150,
    annual: 1620,
    offers: ["Acesso ilimitado à musculação", "Aulas de natação", "Aulas de yoga", "Aulas de crossfit", "Uso de vestiários e chuveiros", "Avaliação física trimestral"]
  },
  {
    title: "Vip",
    monthly: 200,
    annual: 2160,
    offers: ["Acesso ilimitado a todas as modalidades", "Acesso a todas as aulas de grupo", "Uso de vestiários e chuveiros com armários exclusivos", "Avaliação física bimestral", "Acompanhamento nutricional mensal", "Personal trainer uma vez por semana"]
  },
]

export const Price = () => {
  const [toggleSwitch, setToggleSwitch] = useState(false)

  return (
    <section id="price" className={price.containerMaster}>
      <div className="container-section">
        <ClassTop setToggleSwitch={setToggleSwitch} toggleSwitch={toggleSwitch}/>
        <div className={price.containerPrices}>
          {dataPrices.map((priceS, index) => (
            <div key={index} className={price.boxPrice}>
              <h2>{priceS.title}</h2>
              <p>
                <span>R${toggleSwitch? priceS.annual : priceS.monthly}.</span>
                Por {toggleSwitch ? "Ano" : "Mês"}
              </p>
              <ul className={price.listPrice}>
                {priceS.offers.map((offer) => (
                  <div className={price.offer}>
                    <div>
                      <Check strokeWidth={3} size={25}/>
                    </div>
                    <li>{offer}</li>
                  </div>
                ))}
              </ul>
              <a href="" className={price.buttonPrice}>
                <span>adquira</span>
                <span>contato</span>
              </a>
            </div>
          ))}
        </div>
      </div>
      <div className={price.teste}></div>
    </section>
  )
}
