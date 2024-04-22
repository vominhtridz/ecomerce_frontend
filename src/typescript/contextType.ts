import { ReactElement } from "react"
import { languageType } from "./languageType"
import { usersTypes } from "./UserTypes"
import { AddSellerPickUpAddressTypes } from "./AddressTypes"

export interface myproviderType {
  children: ReactElement
}
export interface CreateContextTypes {
  sellerAddress: AddSellerPickUpAddressTypes
  setSellerAddress: (e: AddSellerPickUpAddressTypes) => void
  visibleLabel: boolean | null
  setvisibleLabel: (e: boolean) => void
  shopAddress: boolean | null
  dataUser?: usersTypes | null
  visibleMess?: boolean | null
  setVisibleMess: (e: boolean) => void
  setShopAddress: (e: boolean) => void
  setDataUser: (dataUser: usersTypes) => void
  language?: languageType | null
  setLanguage: (lang: languageType) => void
  langCode?: string
  setLangCode: (lang: string) => void
}