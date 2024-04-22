import { FC, createContext, useContext, useState } from "react"
import { CreateContextTypes, myproviderType } from "../typescript/contextType"
import { languageType } from "../typescript/languageType"
import { defaultLanguage } from "../languages/Languages"
import { useLocation } from "react-router-dom"
import { usersTypes } from "../typescript/UserTypes"
import { AddSellerPickUpAddressTypes } from "../typescript/AddressTypes"
const mycontext = createContext<CreateContextTypes>({
  sellerAddress: {},
  setSellerAddress: () => {},
  shopAddress: false,
  visibleMess: false,
  visibleLabel: false,
  langCode: "",
  dataUser: null,
  language: null,
  setDataUser: () => {},
  setShopAddress: () => {},
  setLanguage: () => {},
  setVisibleMess: () => {},
  setvisibleLabel: () => {},
  setLangCode: () => {},
})
const MyProvider: FC<myproviderType> = ({ children }) => {
  const path = useLocation().pathname
  const [language, setLanguage] = useState<languageType | null>(path === "/" ? defaultLanguage : null)
  const [visibleMess, setVisibleMess] = useState<boolean>(false)
  const [shopAddress, setShopAddress] = useState<boolean>(false)
  const [dataUser, setDataUser] = useState<usersTypes | null>(null)
  const [visibleLabel, setvisibleLabel] = useState<boolean>(false)
  const [langCode, setLangCode] = useState<string>(path === "/" ? "vi" : "")
  const [sellerAddress, setSellerAddress] = useState<AddSellerPickUpAddressTypes | object>({})

  return (
    <mycontext.Provider
      value={{
        sellerAddress,
        setSellerAddress,
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
        setvisibleLabel,
        visibleLabel,
      }}
    >
      {children}
    </mycontext.Provider>
  )
}

const useMyContext = () => {
  const context = useContext(mycontext)
  if (!context) {
    throw new Error("usecontext is within my provicer! or not created context!")
  }
  return context
}
export { useMyContext, MyProvider }
