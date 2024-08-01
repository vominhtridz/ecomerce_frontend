import { createContext } from "react"
import { CreateContextTypes } from "../typescript/contextType"

export const mycontext = createContext<CreateContextTypes>({
  sellerAddress: {},
  setSellerAddress: () => {},
  shopAddress: false,
  visibleMess: false,
  visiCuccessLabel: false,
  visilFailLabel: false,
  langCode: "",
  messageLabel: "",
  dataUser: null,
  language: null,
  setDataUser: () => {},
  setShopAddress: () => {},
  setLanguage: () => {},
  setVisibleMess: () => {},
  setVisiCuccessLabel: () => {},
  setVisilFailLabel: () => {},
  setLangCode: () => {},
  setMessageLabel: () => {},
})
