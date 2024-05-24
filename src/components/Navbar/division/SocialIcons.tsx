import navbar from "../Navbar.module.css"

import { Instagram, Phone } from "lucide-react"

import { ButtonMagnetic } from "../../ButtonMagnetic/ButtonMagnetic"

export const SocialIcons = () => {
  return (
    <div className={navbar.containerSocial}>
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
