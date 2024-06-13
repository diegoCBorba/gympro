import { Header } from "../../components/Header/Header"
import { About } from "../../components/About/About"
import { Class } from "../../components/Class/Class"
import { Price } from "../../components/Price/Price"
import { Breathe } from "../../components/Breathes/Breathe"
import { Trainers } from "../../components/Trainers/Trainers"

export const Home = () => {
  return (
    <>
      <Header/>
      <About/>
      <Class/>
      <Price/>
      <Breathe/>
      <Trainers/>
    </>
  )
}
