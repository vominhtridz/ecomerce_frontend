import ChatBox from "@/components/ChatBox/ChatBox"
import Footer from "@/components/Footer/Footer"
import Header from "@/components/Header/Header"
import CuccessFullLabel from "@/components/Label/CuccessFullLabel"
import FailureFullLabel from "@/components/Label/FailureFullLabel"
import { useMyContext } from "@/context/context"
import { FC, useEffect } from "react"
import { Link, Navigate } from "react-router-dom"
const PageNotFound: FC = () => {
  const { language, shopAddress, setDataUser, visiCuccessLabel, visilFailLabel, messageLabel } = useMyContext()
  //  set default user data
  useEffect(() => {
    try {
      const basicUsers = JSON.parse(localStorage.getItem("basicUsers") || "")
      if (basicUsers) {
        setDataUser(basicUsers)
      }
    } catch (error) {
      console.error("Error parsing JSON:", error)
    }
  }, [language])
  return <Navigate to='/' />
}
export default PageNotFound
