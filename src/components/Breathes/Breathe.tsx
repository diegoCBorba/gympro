import breathe from "./Breathes.module.css"

import { ParallaxText } from "./division/ParallaxText"

export const Breathe = () => {
  return (
    <section className={breathe.containerMaster}>
      <ParallaxText baseVelocity={-1}>Viva Fitness -</ParallaxText>
      <ParallaxText baseVelocity={2}>Seja Gympro -</ParallaxText>
    </section>
  )
}
