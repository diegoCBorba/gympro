import footer from "../Footer.module.css"

export const BottomFooter = () => {
  return (
    <div className={footer.containerBottom}>
      <div>
        <h2>Localização</h2>
        <p>Rua das Palmeiras, 123, em Belo Horizonte</p>
      </div>
      <div className={footer.row}/>
      <div className={footer.creditsContainer}>
        <p>2024 &copy; Gympro</p>
        <a href="https://diegocardoso.vercel.app/" target="_blank">Diego Cardoso</a>
      </div>
    </div>
  )
}
