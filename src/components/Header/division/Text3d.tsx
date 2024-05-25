import header from "../Header.module.css"

interface PropsText{
  primary: string,
  secondary: string,
  secondClass?: boolean,
}

export const Text3d = ({primary, secondary, secondClass}: PropsText) => {
  return (
      <div className={`${header.containerText}
        ${secondClass? header.second : ""}
      `}>
          <p className={header.primary}>{primary}</p>
          <p className={header.secondary}>{secondary}</p>
      </div>
  )
}
