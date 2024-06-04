import { motion } from "framer-motion"
import style from "../Class.module.css"

interface PropsList{
  dataClasses: {
    class: string,
    description: string,
    src: string,
  }[],
  handleHover: () => void,
  handleIndex: (index: number) => void
}

export const ListClasses = ({ dataClasses, handleHover, handleIndex }: PropsList) => {
  return (
    <div className={style.containerList}>
      <ul className={style.listClasses}
      onMouseLeave={() => handleHover()}>
        {dataClasses.map((item, index) => (
          <motion.li key={index}
            whileHover={{paddingLeft: "2rem"}}
            onMouseEnter={() => handleIndex(index)}
          >
            {item.class}
          </motion.li>
        ))}
      </ul>
    </div>
  )
}
