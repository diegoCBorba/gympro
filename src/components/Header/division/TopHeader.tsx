import header from "../Header.module.css"

import { Text3d } from "./Text3d"

export const TopHeader = () => {
  return (
    <div className={header.containerHigher}>
      <div className={header.boxLogoHeader}>
        <Text3d primary="faça parte" secondary="faça parte"/>
        <Text3d primary="viva fitness" secondary="viva fitness" secondClass={true}/>
      </div>
    </div>
  )
}
