import Footer from "./Footer"
import Header from "./Header"
import { Outlet } from "react-router-dom"

function MainLayout() {
  return (
    <div>
      <Header/>
      <Outlet/>
      <Footer/>

    </div>
  )
}

export default MainLayout
