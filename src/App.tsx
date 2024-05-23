import { Outlet } from "react-router-dom"

import { Navbar } from "./components/Navbar/Navbar"

export function App() {
  return (
    <>
      <Navbar/>
      <Outlet/>
      {/* FOOTER */}
    </>
  )
}
