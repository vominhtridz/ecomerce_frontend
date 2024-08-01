import { ChangeEvent, FC } from "react"

interface EmailAndPhoneNumType {
  value?: string
  ChangeValue?: (e: ChangeEvent<HTMLInputElement>) => void
  disable: boolean
}
const EmailAndPhoneNum: FC<EmailAndPhoneNumType> = ({ value, ChangeValue, disable }) => {
  return (
    <input
      autoComplete='new-password'
      type='email'
      disabled={disable}
      className='w-full px-4 py-2.5 outline-blue-300 text-sm transition duration-500   border my-1  text-black border-slate-400 rounded-sm shadow'
      placeholder='Email...'
      onChange={ChangeValue}
      value={value}
      required
    />
  )
}
export default EmailAndPhoneNum
