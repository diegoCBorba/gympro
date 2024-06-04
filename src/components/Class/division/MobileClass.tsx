import style from "../MobileClass.module.css"
import { BoxClass } from "./BoxClass"
import { CharTranslate } from "../../SentenceTranslate/CharTranslate"

interface PropsMobileClass{
  dataClasses: {
    class: string,
    description: string,
    src: string,
  }[],
}

export const MobileClass = ({ dataClasses }: PropsMobileClass) => {

  return (
    <div className="container-section">
      <div className={style.containerMaster}>
        <h1>
          <CharTranslate word="Nossas Modalidades" velocity={2} direction/>
        </h1>
        <div className={style.containerClasses}>
          {dataClasses.map((item, index) => (
            <BoxClass item={item} index={index}/>
          ))}

        </div>
      </div>
    </div>
  )
}
