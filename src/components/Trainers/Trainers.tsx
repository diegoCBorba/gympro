import trainer from "./Trainers.module.css"

import imgTrainer1 from "../../../public/home/trainers/trainer-1.jpg"
import imgTrainer2 from "../../../public/home/trainers/trainer-2.jpg"
import imgTrainer3 from "../../../public/home/trainers/trainer-3.jpg"

import { TitleTrainer } from "./division/TitleTrainer"
import { BoxTrainer } from "./division/BoxTrainer"

const dataTrainers = [
  {
    name: "Marcos Silva",
    specialization: "Musculação e Treinamento de Força",
    src: imgTrainer2
  },
  {
    name: "Ana Paula",
    specialization: "Yoga e Flexibilidade",
    src: imgTrainer3
  },
  {
    name: "Julia Pereira",
    specialization: "Crossfit e Treinamento Funcional",
    src: imgTrainer1
  },
]

export const Trainers = () => {

  return (
    <>
    <section id="trainers" className={trainer.containerMaster}>
      <div className="container-section">
        <TitleTrainer/>
        <div className={trainer.containerTrainers}>
          {dataTrainers.map((trainers, index) => (
            <BoxTrainer index={index} trainers={trainers}/>
          ))}
        </div>
      </div>
    </section>
    <div className={trainer.teste}></div>
    </>
  )
}
