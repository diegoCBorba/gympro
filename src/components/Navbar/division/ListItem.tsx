import navbar from "../Navbar.module.css"

import { ItemPoint } from "./ItemPoint"

export const ListItem = () => {
  return (
    <ul className={navbar.listNavbar}>
      <li>
        <ItemPoint href="#about" className="buttonPoint">Sobre</ItemPoint>
      </li>
      <li>
        <ItemPoint href="#class" className="buttonPoint">Modalidades</ItemPoint >
      </li>
      <li>
        <ItemPoint href="#price" className="buttonPoint">Planos</ItemPoint>
      </li>
      <li>
        <ItemPoint href="#trainers" className="buttonPoint">Treinadores</ItemPoint>
      </li>
    </ul>
  )
}
