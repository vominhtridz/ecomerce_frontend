import { FC, useContext, useState } from "react"
import { myproviderType } from "../typescript/contextType"
import { languageType } from "../typescript/language"
import { defaultLanguage } from "../languages/Languages"
import { useLocation } from "react-router-dom"
import { usersTypes } from "../typescript/UserTypes"
import { mycontext } from "./mycontext"
import { SellerType } from "@/typescript/SellingTypes"
const MyProvider: FC<myproviderType> = ({ children }) => {
  const path = useLocation().pathname
  let [language, setLanguage] = useState<languageType | any>(path === "/" ? defaultLanguage : null)
  let [visibleMess, setVisibleMess] = useState<boolean>(false)
  let [shopAddress, setShopAddress] = useState<boolean>(false)
  let [dataUser, setDataUser] = useState<usersTypes>()
  const [visiCuccessLabel, setVisiCuccessLabel] = useState<boolean>(false)
  const [visilFailLabel, setVisilFailLabel] = useState<boolean>(false)
  const [messageLabel, setMessageLabel] = useState<string>("")
  const [langCode, setLangCode] = useState<string>(path === "/" ? "vi" : "")
  const [resetpwd, setResetpwd] = useState<string>("")
  let [emailResetpwd, setEmailResetpwd] = useState<string>("")
  let [Seller, setSeller] = useState<SellerType>({})
  let context = {
    Seller,
    setSeller,
    shopAddress,
    setShopAddress,
    dataUser,
    setDataUser,
    setVisibleMess,
    visibleMess,
    langCode,
    setLangCode,
    language,
    setLanguage,
    setVisiCuccessLabel,
    visilFailLabel,
    setVisilFailLabel,
    visiCuccessLabel,
    setMessageLabel,
    messageLabel,
    resetpwd,
    setResetpwd,
    setEmailResetpwd,
    emailResetpwd,
  }
  return <mycontext.Provider value={context}>{children}</mycontext.Provider>
}

const useMyContext = () => {
  const context = useContext(mycontext)
  if (!context) {
    throw new Error("usecontext is within my provicer! or not created context!")
  }
  return context
}
export { useMyContext, MyProvider }
