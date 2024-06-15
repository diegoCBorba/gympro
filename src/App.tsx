import { Outlet } from "react-router-dom"

import { Navbar } from "./components/Navbar/Navbar"
import { Footer } from "./components/Footer/Footer"
import { PreLoader } from "./components/PreLoader/PreLoader"

import { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";

export function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
      window.scrollTo(0, 0);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <AnimatePresence mode='wait'>
        {isLoading && <PreLoader />}
      </AnimatePresence>
      <Navbar/>
      <Outlet/>
      <Footer/>
    </>
  )
}
