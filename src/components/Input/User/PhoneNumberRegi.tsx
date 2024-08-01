import { ChangeEvent, FC } from "react"

interface PhoneNumberTypes {
  phoneNumber: string
  ChangePhoneNumber: (e: ChangeEvent<HTMLInputElement>) => void
  error: boolean
}
const PhoneNumberInput: FC<PhoneNumberTypes> = ({ phoneNumber, ChangePhoneNumber, error }) => {
  return (
    <input
      autoComplete='new-password'
      type='text'
      className={`${error ? "border-red-500" : ""} w-full px-4 py-2.5 outline-blue-300 text-sm transition duration-500   border my-1  text-black border-slate-400 rounded-sm shadow`}
      placeholder=' PhoneNumber...'
      onChange={ChangePhoneNumber}
      value={phoneNumber}
    />
  )
}
export default PhoneNumberInput
