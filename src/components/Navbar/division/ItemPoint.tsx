import { ButtonMagnetic } from "../../ButtonMagnetic/ButtonMagnetic"

import { ComponentProps } from "react"

interface PropsItemPoint extends ComponentProps<"a">{}

export const ItemPoint = (props: PropsItemPoint) => {
  return (
    <ButtonMagnetic>
      <a {...props}/>
    </ButtonMagnetic>
  )
}
