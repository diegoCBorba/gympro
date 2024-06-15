import footer from "../Footer.module.css"

import { ButtonMagnetic } from "../../ButtonMagnetic/ButtonMagnetic"

export const ContactFooter = () => {
  return (
    <div className={footer.contactContainer}>
      <ButtonMagnetic>
        <a href="">gympro@gmail.com</a>
      </ButtonMagnetic>
      <ButtonMagnetic>
        <a href="">(xx) xxxxx-xxxx</a>
      </ButtonMagnetic>
    </div>
  )
}
