import navbar from "../Navbar.module.css"

import { Instagram, Phone } from "lucide-react"

import { ButtonMagnetic } from "../../ButtonMagnetic/ButtonMagnetic"

interface PropsSocialIcons{
  isActive: boolean,
  isNav: boolean,
}

/*
  Componente para os ícones das midias sociais magneticos
*/

export const SocialIcons = ({ isActive, isNav }: PropsSocialIcons) => {
  return (
    <div className={`${navbar.containerSocial}
      ${isNav? navbar.isNav : ""}
      ${isActive? navbar.active : ""}
    `}>
      <ButtonMagnetic>
        <a href="" target="_blank">
          <Instagram strokeWidth={2} size={25}/>
        </a>
      </ButtonMagnetic>

      <ButtonMagnetic>
        <a href="" target="_blank">
          <Phone strokeWidth={2} size={25}/>
        </a>
      </ButtonMagnetic>
    </div>
  )
}
