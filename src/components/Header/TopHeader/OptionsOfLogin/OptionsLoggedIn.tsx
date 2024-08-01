import { Link } from "react-router-dom"
import { useMyContext } from "../../../../context/context"
import { MouseEvent } from "react"
import { googleLogout } from "@react-oauth/google"
import { useNavigate } from "react-router-dom"
const OptionLoggedIn = () => {
  const navi = useNavigate()
  const { langCode, setDataUser } = useMyContext()
  //--------------------------------------HANDLE LOGOUT ------------------------------
  const handleLogOut = () => {
    localStorage.removeItem("basicUsers")
    googleLogout()
    setDataUser(null)
    navi("/")
  }
  //--------------------------------------OPTION LOGGED IN ------------------------------
  const ManageOptionsLoggedIn = [
    {
      title: "Tài khoản của tôi",
      route: "/user/account/profile",
    },
    {
      title: "Đăng kí bán hàng",
      route: "/seller/register/portal/100",
    },
    {
      title: "Giỏ hàng",
      route: "/cart",
    },
    {
      title: "Đăng xuất",
      FunctionHandle: handleLogOut,
    },
  ]
  //-------------------------------------- GET OPTION LOGGED IN ------------------------------
  const getOptionsLoggedIn = () =>
    ManageOptionsLoggedIn.map((option, index) => {
      return (
        <Link
          to={option.title != "Đăng kí bán hàng" ? `/${langCode}${option?.route}` : `${option?.route}`}
          key={index}
          className='hover:bg-slate-50 py-1.5 whitespace-nowrap  px-4 block hover:text-green-500 w-full '
          onClick={option?.FunctionHandle}
        >
          {option.title}
        </Link>
      )
    })
  //--------------------------------------RENDER ELEMENT ------------------------------
  return (
    <div
      onClick={(e: MouseEvent<HTMLDivElement>) => e.stopPropagation()}
      className=' font-normal min-w-[8.5rem] py-2 text-sm absolute b-0 right-[-1.5rem] text-left flex-wrap shadow-lg transition duration-500 rounded lg
        bg-white'
    >
      {getOptionsLoggedIn()}
    </div>
  )
}
export default OptionLoggedIn
