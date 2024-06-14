import { SenteceTranslate } from "../../SentenceTranslate/SentenceTranslate"
import contact from "../Contact.module.css"

export const SubtitleContact = () => {
  return (
    <div className={contact.subtitleBackground}>
      <h2>
        <SenteceTranslate sentence="Conecte-se com" velocity={0}/>
      </h2>
      <h2>
        <SenteceTranslate sentence="o seu" velocity={0}/>
        <span className={contact.color}>
        <SenteceTranslate sentence=" futuro" velocity={0}/>
        </span>
      </h2>
    </div>
  )
}
