import { Link } from "react-router-dom"
import { useMyContext } from "../../../../context/context"
import Cookies from "universal-cookie"
import { MouseEvent } from "react"
interface setLoggedInTypes {
  setLoggedIn: (loggin: boolean) => void
}

const OptionLoggedIn = ({ setLoggedIn }: setLoggedInTypes) => {
  const cookies = new Cookies()
  const { langCode } = useMyContext()
  const handleLogOut = () => {
    cookies.remove("loggedIn", { path: "/" })
    localStorage.removeItem("bacsicUsers")
    setLoggedIn(false)
  }

  const ManageOptionsLoggedIn = [
    {
      title: "Tài khoản của tôi",
      route: "/user/account/profile",
    },
    {
      title: "Đăng kí bán hàng",
      route: "/selling/portal/100",
    },
    {
      title: "Đơn mua",
      route: "/cart",
    },
    {
      title: "Thoát",
      FunctionHandle: handleLogOut,
    },
  ]
  const getOptionsLoggedIn = () =>
    ManageOptionsLoggedIn.map((option, index) => {
      return (
        <Link
          to={`/${langCode}${option?.route}`}
          key={index}
          className='hover:bg-slate-50 py-1.5 whitespace-nowrap  block hover:text-green-500 w-full '
          onClick={option?.FunctionHandle}
        >
          {option.title}
        </Link>
      )
    })
  return (
    <div
      onClick={(e: MouseEvent<HTMLDivElement>) => e.stopPropagation()}
      className=' font-normal w-[8.5rem] py-2 text-sm absolute b-0 right-0 flex-wrap shadow-lg transition duration-500 rounded lg
        bg-white'
    >
      {getOptionsLoggedIn()}
    </div>
  )
}
export default OptionLoggedIn
