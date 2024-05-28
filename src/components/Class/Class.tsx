import style from "./Class.module.css"

import gymImg from "../../../public/home/class/class-gym.jpg"
import yogaImg from "../../../public/home/class/class-yoga.jpg"
import swimImg from "../../../public/home/class/class-swim.jpg"
import crossfitImg from "../../../public/home/class/class-crossfit.jpg"

export const Class = () => {
  return (
    <section id="class" className={style.containerMaster}>
      <div className="container-section">
        <div className={style.containerDescription}>
          <h1>modalidades</h1>
          <p>Na Gympro, oferecemos musculação para aumentar força e massa muscular com equipamentos modernos e orientação profissional. Para um treino completo que melhora a resistência cardiovascular, experimente nossa natação com piscina moderna e instrutores qualificados.</p>
          <p>Temos crossfit, que combina exercícios intensos e movimentos funcionais para desenvolver força e agilidade. Nossa yoga oferece relaxamento e autoconhecimento, focando na flexibilidade e equilíbrio. Encontre a modalidade ideal para sua jornada fitness na Gympro.</p>
        </div>
        <div className={style.containerImage}>
          <div className={style.boxImage}>
            <img src={gymImg} alt=""/>
          </div>
        </div>
      </div>
    </section>
  )
}
