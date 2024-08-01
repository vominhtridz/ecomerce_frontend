//---------------------------------------ADDRESS TYPE -----------------------
export interface UpdateAddressBoxType {
  Province: string
  handleUpdate?: () => void
  SaveOrUpdate?: boolean
  Ward: string
  loading: boolean
  district: string
  detailAdress: string
  numberErr: boolean
  nameErr: boolean
  setDefault: (e: boolean) => void
  Name: string
  setName: (e: string) => void
  handleSave: () => void
  phonenumber: string
  AddressErr: boolean
  showAdresBoxItem: boolean
  Default: boolean
  setShowAdresBoxItem: (e: boolean) => void
  setWard: (e: string) => void
  setProvince: (e: string) => void
  setDistrict: (e: string) => void
  setDetailAdress: (e: string) => void
  setPhonenumber: (e: string) => void
  handleCancel: () => void
}
