import { FC, useEffect } from "react"
import Header from "../Header/Header"
import Footer from "../Footer/Footer"
import { Outlet } from "react-router-dom"
import { useMyContext } from "../../context/context"
import ChatBox from "../ChatBox/ChatBox"
import CuccessFullLabel from "../Label/CuccessFullLabel"
import FailureFullLabel from "../Label/FailureFullLabel"
import { GetUserCurrent } from "@/apis/apis"
const DefaultLayout: FC = () => {
  const { dataUser, language, setDataUser, visiCuccessLabel, visilFailLabel, messageLabel } = useMyContext()
  useEffect(() => {
    try {
      const basicUsers = JSON.parse(localStorage.getItem("basicUsers") as string)
      if (basicUsers) {
        GetUserCurrent({ userid: basicUsers?.userid })
          .then(res => {
            setDataUser(res.data[0])
          })
          .catch(err => console.log(err))
      }
    } catch (error) {
      console.error("Error parsing JSON:", error)
    }
  }, [dataUser?.email, dataUser?.birthday, dataUser?.gender, dataUser?.phonenumber, dataUser?.img])
  return (
    <div className=' '>
      {language && <Header />}
      <div className='body max-lg:mt-[260px]   max-md:mt-[150px] lg:mt-[6.2rem]'>
        <Outlet />
      </div>
      {language && <Footer />}
      <ChatBox />
      {visiCuccessLabel && <CuccessFullLabel text={messageLabel} />}
      {visilFailLabel && <FailureFullLabel text={messageLabel} />}
    </div>
  )
}
export default DefaultLayout
