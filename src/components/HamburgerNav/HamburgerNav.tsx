import { useEffect, useState } from "react"
import hamburger from "./HamburgerNav.module.css"

interface PropsHamburguer{
  hidden: boolean;
}

export const HamburgerNav = (props: PropsHamburguer) => {
  const [isActive, setIsActive] = useState(false)

  function handleChange(){
    setIsActive(!isActive)
  }

  useEffect(() => {
    if (props.hidden) {
      setIsActive(false);
    }
  }, [props.hidden]);

  return (
    <>
      <div className={hamburger.containerMenu} 
        onClick={handleChange}>
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
    </>
  )
}