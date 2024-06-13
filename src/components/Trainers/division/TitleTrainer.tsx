import trainer from "../Trainers.module.css"

import { SenteceTranslate } from "../../SentenceTranslate/SentenceTranslate"
import { CharTranslate } from "../../SentenceTranslate/CharTranslate"

export const TitleTrainer = () => {
  return (
    <div className={trainer.titleTrainer}>
      <h1>
        <CharTranslate direction velocity={2} word="Nosso "/> 
        <span className={trainer.color}>
          <CharTranslate direction velocity={2} word="Time"/>
        </span>
      </h1>
      <p>
        <SenteceTranslate sentence="Conheça Nossos Treinadores Especializados e Alcance Seus Objetivos com os Melhores Profissionais!" velocity={4}/>
      </p>
    </div>
  )
}
