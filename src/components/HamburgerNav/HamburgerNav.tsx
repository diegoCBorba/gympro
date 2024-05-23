import { useEffect, useState } from "react"

import { ListItemHamburger } from "./division/ListItemHamburger";

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
      <div 
        className={`${hamburger.containerMenu}
        ${isActive ? hamburger.open : ""}
        `}
        onClick={handleChange}
      >
        <span/>
        <span/>
      </div>
      <div className={`${hamburger.containerMaster}
        ${isActive ? hamburger.open : ""}
      `}>
        <ListItemHamburger/>
      </div>
    </>
  )
}
