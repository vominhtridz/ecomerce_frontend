import { ReactElement } from "react"
import NavBar from "./Navbar/Navbar"
import TopHeader from "./TopHeader/TopHeader"
import { Link } from "react-router-dom"
const Header = (): ReactElement => {
  return (
    <header className='  shadow '>
      <TopHeader />
      <NavBar />
    </header>
  )
}
export default Header
