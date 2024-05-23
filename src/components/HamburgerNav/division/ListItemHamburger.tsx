import hamburger from "../HamburgerNav.module.css"

import { ItemPoint } from "../../Navbar/division/ItemPoint"

export const ListItemHamburger = () => {
  return (
    <ul className={hamburger.listNavbar}>
      <li>
        <ItemPoint href="#about" className="buttonPointLeft">Sobre</ItemPoint>
      </li>
      <li>
        <ItemPoint href="#class" className="buttonPointLeft">Modalidades</ItemPoint >
      </li>
      <li>
        <ItemPoint href="#price" className="buttonPointLeft">Planos</ItemPoint>
      </li>
      <li>
        <ItemPoint href="#trainers" className="buttonPointLeft">Treinadores</ItemPoint>
      </li>
    </ul>
  )
}
