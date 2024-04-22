import { ChangeEvent } from "react"
export interface AddSellerPickUpAddressTypes {
  SellerID?: number
  Ward?: string
  email?: string | ""
  Province?: string
  district?: string
  sellerName?: string
  detailAdress?: string
  Phonenumber?: number
  locate?: string
}
export interface OptionsAddressTypes {
  numberErr: boolean
  nameErr: boolean
  AddressErr: boolean
  Ward: string
  setWard: (e: string) => void
  Province: string
  district: string
  setDistrict: (e: string) => void
  setProvince: (e: string) => void
  detailAdress: string
  handleSave: () => void
  handleBack: () => void
  ChangeNumber: (e: ChangeEvent<HTMLInputElement>) => void
  ChangeInput: (e: ChangeEvent<HTMLInputElement>) => void
  setVisiAddress: (e: boolean) => void
  numberError: boolean
  nameError: boolean
  ShopInput: string
  number: number
  ChangeAddress: (e: ChangeEvent<HTMLTextAreaElement>) => void
  visiAddress: boolean
  handleShowAddress: () => void
}
export interface AddInforShopSellerTypes {
  sendingTime: number
  handleFixedAddress: () => void
  checkVeriPhoneNum: boolean
  PhoneNumerBoolean: boolean

  handleChangeAdress: () => void
  handleChangeName: (e: ChangeEvent<HTMLInputElement>) => void
  nameShopInput: string
  ChangeEmail: (e: ChangeEvent<HTMLInputElement>) => void
  email: string
  phoneNumber: number
  ChangePhoneNumber: (e: ChangeEvent<HTMLInputElement>) => void
  verifyCode: string
  ChangeVerify: (e: ChangeEvent<HTMLInputElement>) => void
  handleSend: () => void
}

export interface ChangeAddressBoxTypes {
  Ward: string
  Province: string
  district: string
  AddressWard: AddressWardTypes | null
  booleanProvince: boolean
  booleanDistrict: boolean
  booleanWard: boolean
  RouteAddress: string
  setWard: (e: string) => void
  setProvince: (e: string) => void
  setDistrict: (e: string) => void
  setRouteAddress: (e: string) => void
  setAddressWard: (e: AddressWardTypes) => void
  setVisiAddress: (e: boolean) => void
  setbooleanProvince: (e: boolean) => void
  setBooleanWard: (e: boolean) => void
  setBooleanDistrict: (e: boolean) => void
  setAddressDisAndWardAndCity: (e: AddressDisAndWardAndCityTypes) => void
  AddressDisAndWardAndCity: AddressDisAndWardAndCityTypes | null
}
export interface NameShopInputTypes {
  visiAddress: boolean
  handleShowAddress: () => void
  setVisiAddress: (e: boolean) => void
  Ward: string
  setWard: (e: string) => void
  Province: string
  district: string
  setDistrict: (e: string) => void
  setProvince: (e: string) => void
}
export interface AddressDisAndWardAndCityTypes {
  title: string
  districts: { title: string; wards: string[] }[]
}
export interface AddressWardTypes {
  wards: string[]
}
export interface NavLinkAddressTypes {
  Ward: string
  district: string
  setRouteAddress: (e: string) => void
  RouteAddress: string
  setBooleanWard: (e: boolean) => void
  setbooleanProvince: (e: boolean) => void
  setBooleanDistrict: (e: boolean) => void
}
export interface GetSellerAddressTypes {
  userID: number
}
export interface NameAndAddressTypes {
  handleFixedAddress: () => void
  handleChangeName: (e: ChangeEvent<HTMLInputElement>) => void
  nameShopInput: string
  handleChangeAdress: () => void
}
