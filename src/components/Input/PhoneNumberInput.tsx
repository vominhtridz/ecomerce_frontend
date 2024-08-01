import { FC } from "react"

interface PhoneNumberInputTypes {
  number: string
  handleChangeNumber: (e: string) => void
  disable?: boolean
  error?: boolean
}
const PhoneNumberInput: FC<PhoneNumberInputTypes> = ({ handleChangeNumber, number, disable, error }) => {
  const checkError = error ? "border-red-500 outline-red-500" : " border-slate-400 outline-none"
  const checkDisable = disable ? "bg-gray-100 opacity-90" : ""
  return (
    <input
      disabled={disable}
      autoFocus
      id='phonenumber'
      type='text'
      required
      placeholder='Nhập vào...'
      className={`${checkDisable} ${checkError} pl-3 pr-1 py-1.5 rounded-sm  w-full border text-sm`}
      onChange={e => handleChangeNumber(e.target.value)}
      value={number}
    />
  )
}

export default PhoneNumberInput
