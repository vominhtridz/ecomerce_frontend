import { ChangeEvent, FC } from "react"

interface EmailInputTypes {
  value: string
  ChangeValue: (e: ChangeEvent<HTMLInputElement>) => void
}
const NameLoginInput: FC<EmailInputTypes> = ({ value, ChangeValue }) => {
  return (
    <input
      autoComplete='new-password'
      type='text'
      className='w-full px-4 py-2.5 outline-blue-300 text-sm transition duration-500   border my-1  text-black border-slate-400 rounded-sm shadow'
      placeholder='Email/PhoneNumber/UserName...'
      onChange={ChangeValue}
      value={value}
      required
    />
  )
}
export default NameLoginInput
