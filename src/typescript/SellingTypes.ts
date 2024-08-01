export interface NameAndAddressType {
  handleChangeName: (e: string) => void
  nameShopInput: string | any
  NameShopErr: boolean
}
export interface Email_PhoneNum {
  ChangeEmail: (e: string) => void
  PhoneNumerBoolean: boolean
  email: string
  ChangePhoneNumber: (e: string) => void
  PhoneNumber: string
}
export interface BusinessTypes {
  setBusinType: (e: string) => void
  BusinType: string
}
export interface FormIdentifiType {
  setFormIdentifi: (e: string) => void
  formIdentifi: string
}
export interface sellerPickupaddr {
  AddressID?: number
  sellerid?: number
  sellerName: string
  phone: string
  detailaddr: string
  setdefault: boolean
  addr: string
  userid?: number
}
export interface SellerType {
  sellerid?: number
  sellerName?: string
  phone?: string
  AccountBalance?: number
  transport?: string
  img?: string
  busaddr?: string
  taxcode?: number
  busImg?: string
  nameCompany?: string
  nameidentifi?: string
  identifiImg?: string
  e_email?: string
  cccdnumber?: number
  cmndnumber?: number
  userid?: number
  email?: string
}
