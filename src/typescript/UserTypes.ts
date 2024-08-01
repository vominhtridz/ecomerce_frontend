import { ChangeEvent, FormEvent } from "react"
export interface ApiGetType {
  email?: string
  userid: string | number | any
}
export interface StoreSellerType {
  userid?: number
  SellerID?: number
  identifiImg?: string
  nameidentifi?: string
  busimg?: string
  transport?: string
  AccountBalance?: number
  SellerName?: string
  Phone?: string
  Email?: string
  nameCompany?: string
  img?: string
  e_email?: string
  busaddr?: string
  taxcode?: number
  cccdnumber?: number
  cmndnumber?: number
}
export interface RemoveAPIType {
  userid: number | any
  bankid?: number | any
  cardid?: number | any
  addrid?: number
}
//-------------- ADD ADDRESS BOX TYPES --------------
export interface UpdateAddrBoxType {
  handleShowAddress: () => void
  isvisibleText?: boolean
  visiAddress: boolean
  setVisiAddress: (e: boolean) => void
  Ward: string
  setWard: (e: string) => void
  Province: string
  setProvince: (e: string) => void
  district: string
  setDistrict: (e: string) => void
}
interface AddrAndWardACity {
  title: string
  districts: [
    {
      title: string
      wards: string[]
    },
  ]
}
export interface ChangeAddrBoxType {
  isvisibleText: boolean
  AddressWard: any
  setWard: (e: string) => void
  setVisiAddress: (e: boolean) => void
  RouteAddress: string
  setProvince: (e: string) => void
  setbooleanProvince: (e: boolean) => void
  setRouteAddress: (e: string) => void
  setAddressDisAndWardAndCity: (e: AddrAndWardACity | any) => void
  Ward: string
  Province: string
  district: string
  AddressDisAndWardAndCity: AddrAndWardACity | any
  setDistrict: (e: string) => void
  setBooleanDistrict: (e: boolean) => void
  setBooleanWard: (e: boolean) => void
  setAddressWard: (e: any) => void
  booleanProvince: boolean
  booleanDistrict: boolean
  booleanWard: boolean
}

//-------------------SIDEBAR TYPE -------------------------------
export interface SidebarItemType {
  setvisibleItems: (e: string) => void
  visibleItems: string
}

export interface UserImgType {
  formData: object | any
}
export interface userAddressType {
  addrid?: number
  userid?: number
  first_lastname: string
  detailaddr: string
  phonenumber: string
  addr: string
  setdefault: boolean
}
export interface usersTypes {
  adress?: string
  email?: string
  oldemail?: string
  phonenumber?: string
  pwd?: string
  value?: any
  gender?: string
  birthday?: string
  onechangename?: boolean
  userid?: number
  defaultName?: string
  username?: string
  img?: string
  oldphonenumber?: string
}
export interface ProfileItemsType {
  userName: string
  setUserName: (e: string) => void
  defaultName: string
  day: string
  month: string
  year: string
  setGender: (e: string) => void
  setMonth: (e: string) => void
  setYear: (e: string) => void
  setDay: (e: string) => void
  setDefaultName: (e: string) => void
  gender: string
  userNameErr: boolean
  setUserNameErr: (e: boolean) => void
}
export interface UpdateUserType {
  img: string
  username: string
  defaultName: string
  gender: string
  email: string
  onetimes: number
  birthday: string
}

export interface UserCardType {
  userid: number | any
  cardnumber: string
  exp_day: string
  codecvv: string
  first_lastname: string
  address: string
  primaryCode: string
}
export interface UserBankType {
  userid: number | any

  defaultname: string
  namebank: string
  cid: string
  namebranch: string
  accountnumber: string
  setdefault: number
  fullname: string
}
export type ProfileType = boolean
export type SetLoadingProfileType = (value: boolean) => void
export interface birthdayType {
  day: string
  month: string
  year: string
  ChangeDay: (e: ChangeEvent<HTMLSelectElement>) => void
  ChangeMonth: (e: ChangeEvent<HTMLSelectElement>) => void
  ChangeYear: (e: ChangeEvent<HTMLSelectElement>) => void
}
export interface BaseBoxType {
  loadingCCCDINF: boolean
  laodingBoxNewBank: boolean
  userBankName: string
  ChangeCCCDNum: (e: ChangeEvent<HTMLInputElement>) => void
  CCCDNum: string
  ChangeName: (e: ChangeEvent<HTMLInputElement>) => void
  visiAddbank: boolean
  disCheckIP: boolean
  ChangeSTK: (e: ChangeEvent<HTMLInputElement>) => void
  STK: string
  ChangeFullName: (e: ChangeEvent<HTMLInputElement>) => void
  handleSend: (e: FormEvent<HTMLFormElement | HTMLButtonElement>) => void
  handleBack: () => void
  loading: boolean
  fullName: string
  nameBank: string
  branchName: string
  ChangeNameBank: (e: ChangeEvent<HTMLInputElement>) => void
  ChangeBranchName: (e: ChangeEvent<HTMLInputElement>) => void
}
export interface CardBoxType {
  handleSend: (e: FormEvent<HTMLFormElement | HTMLButtonElement>) => void
  cardNum: string
  valueDay: string
  codeCvv: string
  Name: string
  loading: boolean
  address: string
  primaryCode: string
  cardErr: boolean
  setCardNum: (e: string) => void
  setValueDay: (e: string) => void
  setCodeCvv: (e: string) => void
  setName: (e: string) => void
  setAddress: (e: string) => void
  setPrimaryCode: (e: string) => void
  setCardErr: (e: boolean) => void
  setCodeCvvErr: (e: boolean) => void
  setNameErr: (e: boolean) => void
  setprimaryPostErr: (e: boolean) => void
  codeCvvErr: boolean
  NameErr: boolean
  primaryPostErr: boolean
  handleBack: () => void
}
export interface BankBoxType {
  setfullNameErr: (e: boolean) => void
  fullNameErr: boolean
  handleSend: (e: FormEvent<HTMLFormElement | HTMLButtonElement>) => void
  handleBack: () => void
  loading: boolean
  loadingCCCDINF: boolean
  Next: boolean
  setloadingCCCDINF: (e: boolean) => void
  setNext: (e: boolean) => void
  setBranchName: (e: string) => void
  setNameBank: (e: string) => void
  setSTK: (e: string) => void
  setUserBankName: (e: string) => void
  setCCCDNum: (e: string) => void
  setfullName: (e: string) => void
  setdisCheckIP: (e: boolean) => void
  setStoreBank: (e: string[]) => void
  setValueIPBank: (e: string) => void
  setValueIPBranch: (e: string) => void
  branchName: string
  nameBank: string
  STK: string
  userBankName: string
  CCCDNum: string
  fullName: string
  disCheckIP: boolean
  StoreBank: string[]
  ValueIPBank: string
  ValueIPBranch: string
}
//----------------------------------CCCDInforType-----------------------------
export interface CCCDInforType {
  loading: boolean
  handleNext: (e: FormEvent<HTMLFormElement | HTMLButtonElement>) => void
  handleBack: () => void
  ChangeCCCDNum: (e: string) => void
  CCCDNum: string
  ChangeName: (e: string) => void
  userBankName: string
}
//--------------------------------BoxAddNewBankType----------------------
export interface BoxAddNewBankType {
  loading: boolean
  setfullNameErr: (e: boolean) => void
  fullNameErr: boolean
  visiAddbank: boolean
  setStoreBank: (e: string[]) => void
  setValueIPBank: (e: string) => void
  setValueIPBranch: (e: string) => void
  StoreBank: string[]
  ValueIPBank: string
  ValueIPBranch: string
  handleSend: (e: FormEvent<HTMLFormElement | HTMLButtonElement>) => void
  handleBack: () => void
  setdisCheckIP: (e: boolean) => void
  handleBackCCCD: () => void
  disCheckIP: boolean
  STK: string
  setNameBank: (e: string) => void
  setSTK: (e: string) => void
  setfullName: (e: string) => void
  setBranchName: (e: string) => void
  fullName: string
  nameBank: string
  branchName: string
}
