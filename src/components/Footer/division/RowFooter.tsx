import footer from '../Footer.module.css'

import { MotionValue, motion, useTransform } from 'framer-motion'
import { ButtonMagnetic } from '../../ButtonMagnetic/ButtonMagnetic'

interface PropsRowFooter{
  scrollYProgress: MotionValue<number>,
}

export const RowFooter = ({ scrollYProgress }: PropsRowFooter) => {
  const right = useTransform(scrollYProgress, [0, 1], ["10%", "20%"])

  return (
    <div className={footer.row}>
      <motion.div style={{right}} className={footer.boxMagnetic}>
        <ButtonMagnetic>
          <div className={footer.magneticButton}>
            <a href="">
              <span>Contato</span>
              <span>Clique</span>
            </a>
          </div>
        </ButtonMagnetic>
      </motion.div>
    </div>
  )
}
