import { ChangeEvent, FC } from "react"

interface VerificationCodeType {
  code?: string
  ChangeCode?: (e: ChangeEvent<HTMLInputElement>) => void
  disable: boolean
}
const VerificationCode: FC<VerificationCodeType> = ({ code, ChangeCode, disable }) => {
  return (
    <input
      autoComplete='new-password'
      type='text'
      autoFocus
      disabled={disable}
      className={` w-full px-4 py-2.5 outline-blue-300 text-sm transition duration-500   border my-1  text-black border-slate-400 rounded-sm shadow`}
      placeholder='code...'
      onChange={ChangeCode}
      value={code}
      required
    />
  )
}
export default VerificationCode
