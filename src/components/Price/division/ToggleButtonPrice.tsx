import price from "../Price.module.css"

interface PropsToggle{
  handleToggle(): void,
  toggleState: boolean,
}

export const ToggleButtonPrice = ({ handleToggle, toggleState }: PropsToggle) => {
  return (
    <div className={price.containerToggle}>
      <div className={price.toggleButton}>
        <div>
          <p className={toggleState? "" : price.active}>Mensal</p>
        </div>
        <div className={`${price.toggle} ${toggleState ? price.active : ""}`} onClick={handleToggle}></div>
        <div>
          <p className={toggleState? price.active : ""}>Anual</p>
        </div>
      </div>
    </div>
  )
}
