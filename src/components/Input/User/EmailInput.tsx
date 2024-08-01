import { FC } from "react"

interface EmailInputTypes {
  email: string
  ChangeEmail: (value: string) => void
  error?: boolean
}
const EmailInput: FC<EmailInputTypes> = ({ email, ChangeEmail, error }) => {
  return (
    <input
      autoComplete='new-password'
      type='text'
      className={`${error ? "border-red-500" : ""} w-full px-4 py-2.5 outline-blue-300 text-sm transition duration-500   border my-1  text-black border-slate-400 rounded-sm shadow`}
      placeholder='Email....'
      onChange={e => ChangeEmail(e.target.value)}
      value={email}
      required
    />
  )
}
export default EmailInput
