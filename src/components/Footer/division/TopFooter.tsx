import footer from "../Footer.module.css"

import { MotionValue } from 'framer-motion'

import { DescriptionFooter } from './DescriptionFooter'
import { RowFooter } from './RowFooter'
import { ContactFooter } from './ContactFooter'

interface PropsTopFooter{
  scrollYProgress: MotionValue<number>,
}

export const TopFooter = ({ scrollYProgress }: PropsTopFooter) => {
  return (
    <div className={footer.topContainer}>
      <DescriptionFooter/>
      <RowFooter scrollYProgress={scrollYProgress}/>
      <ContactFooter/>
    </div>
  )
}
