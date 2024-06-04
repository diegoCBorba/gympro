import style from "../Class.module.css"

import { DescriptionClass } from "./DescriptionClass"
import { ListClasses } from "./ListClasses"
import { ImageClass } from "./ImageClass"
import { useRef, useState } from "react"
import { useScroll } from "framer-motion"

interface PropsFullSize{
  dataClasses: {
    class: string,
    description: string,
    src: string
  }[]
}

export const FullSizeClass = ({ dataClasses }: PropsFullSize) => {
  const container = useRef(null)
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["end start" , "start end"]
  })

  const[onHover, setOnHover] = useState<boolean>(false)
  const[indexData, setIndexData] = useState<number>(0)

  const handleIndex = (index: number) => {
    setIndexData(index)
    setOnHover(true)
  }

  const handleHover = () =>{
    setOnHover(!onHover)
  }


  return (
    <div ref={container} className="container-section">
      <ImageClass data={dataClasses[indexData]} scrollYProgress={scrollYProgress}/>
      <div className={style.containerContent}>
        <DescriptionClass data={dataClasses[indexData]} onHover={onHover}/>
        <ListClasses dataClasses={dataClasses} handleHover={handleHover} handleIndex={handleIndex}/>
      </div>
    </div>
  )
}
