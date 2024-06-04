import { Header } from "../../components/Header/Header"
import { About } from "../../components/About/About"
import { Class } from "../../components/Class/Class"
import { Price } from "../../components/Price/Price"

export const Home = () => {
  return (
    <>
      <Header/>
      <About/>
      <Class/>
      <Price/>
    </>
  )
}
