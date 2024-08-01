import { AddMemberIcon } from "..//..//..//images/centerIcons"
import RouteSeller from "./RouteSeller"
import { Outlet, useParams } from "react-router-dom"
import { FC, useEffect } from "react"
import { useMyContext } from "..//..//..//context/context"
import { ContainLanguages } from "..//..//..//languages/Languages"
import { languageType } from "../../../typescript/language"
import Header from "../Header"
import { GetSeller, GetUserCurrent } from "@/apis/apis"

const RegisterSelling: FC = () => {
  const { lang } = useParams()
  const { setLanguage, setSeller, setLangCode, setDataUser } = useMyContext()

  useEffect(() => {
    if (lang && ContainLanguages.hasOwnProperty(lang)) {
      setLanguage(ContainLanguages[lang] as languageType)
      setLangCode(lang)
    }
  }, [setLanguage, setLangCode])
  // handle next
  useEffect(() => {
    try {
      const basicUsers = JSON.parse(localStorage.getItem("basicUsers") as string)
      if (basicUsers) {
        GetUserCurrent({ userid: basicUsers?.userid })
          .then(res => {
            setDataUser(res.data[0])
          })
          .catch(err => console.log(err))
        GetSeller({ userid: basicUsers?.userid })
          .then(res => {
            setSeller(res.data[0])
          })
          .catch(err => console.log(err))
      }
    } catch (error) {
      console.error("Error parsing JSON:", error)
    }
  }, [])
  return (
    <div className=' '>
      <Header />
      <div className='shadow py-6  px-28 my-4 border border-gray-200 bg-white pb-4 rounded-sm '>
        <RouteSeller />
        <Outlet />
      </div>
    </div>
  )
}

export default RegisterSelling
