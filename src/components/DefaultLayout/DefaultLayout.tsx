import { FC, useEffect } from "react"
import Header from "../Header/Header"
import Footer from "../Footer/Footer"
import { Outlet } from "react-router-dom"
import { useMyContext } from "../../context/context"
import ChatBox from "../ChatBox/ChatBox"
import AddShopAddress from "../AddShopAddress/AddShopAddress"
import { GetSellerAddress } from "..//..//apis/apis"
const DefaultLayout: FC = () => {
  const { language, shopAddress, setDataUser, dataUser, setSellerAddress } = useMyContext()
  //  set default user data
  useEffect(() => {
    const basicUsers = JSON.parse(localStorage.getItem("basicUsers") || "")
    if (basicUsers) {
      setDataUser(basicUsers)
    }
    const UserID = { userID: dataUser?.userID || 0 }
    GetSellerAddress(UserID).then(res => setSellerAddress(res.data[0]))
  }, [])

  return (
    <div className='bg-[rgba(0,0,0,0.03)] '>
      {language && <Header />}
      <div className='body max-lg:mt-[260px]   max-md:mt-[150px] lg:mt-[6.2rem]'>
        <Outlet />
      </div>
      {language && <Footer />}
      <ChatBox />
      {shopAddress && <AddShopAddress />}
    </div>
  )
}
export default DefaultLayout
