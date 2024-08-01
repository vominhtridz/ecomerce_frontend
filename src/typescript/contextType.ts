import { ReactElement } from "react"
import { languageType } from "./language"
import { usersTypes } from "./UserTypes"
import { SellerType } from "./SellingTypes"
export interface myproviderType {
  children: ReactElement
}
export interface CreateContextTypes {
  Seller: SellerType
  setSeller: (e: SellerType) => void
  setMessageLabel: (e: string) => void
  setVisiCuccessLabel: (e: boolean) => void
  setVisilFailLabel: (e: boolean) => void
  setResetpwd: (e: string) => void
  setEmailResetpwd: (e: string) => void
  visiCuccessLabel: boolean
  emailResetpwd: string
  resetpwd: string
  visilFailLabel: boolean
  shopAddress: boolean
  dataUser?: usersTypes
  visibleMess?: boolean
  setVisibleMess: (e: boolean) => void
  setShopAddress: (e: boolean) => void
  setDataUser: (dataUser: usersTypes) => void
  language?: languageType
  setLanguage: (lang: languageType) => void
  messageLabel?: string
  langCode?: string
  setLangCode: (lang: string) => void
}