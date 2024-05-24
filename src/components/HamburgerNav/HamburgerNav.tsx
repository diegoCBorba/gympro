import hamburger from "./HamburgerNav.module.css"

import { ComponentProps } from "react"

interface PropsHamburger extends ComponentProps<"div">{
  isActive: boolean,
}

/* 
  Componente para o funcionamento do ícone do Hamburger
*/

export const HamburgerNav = ({ isActive, ...rest }: PropsHamburger) => {
  return (
    <div className={hamburger.containerMenu} {...rest}>
      <div className={`${hamburger.containerIconMenu}
      ${isActive ? hamburger.open : ""}
      `}>
        <span/>
        <span/>
      </div>

      <div className={`${hamburger.containerTextMenu}
        ${isActive ? hamburger.open : ""}
      `}>
        <p>menu</p>
        <p>close</p>
      </div>
    </div>
  )
}