import { ChangeEvent, FC } from "react"

interface VerifyPhoneNumberTypes {
  verifyCode: string
  ChangeVerify: (e: ChangeEvent<HTMLInputElement>) => void
}
const VerifyPhoneNumber: FC<VerifyPhoneNumberTypes> = ({ ChangeVerify, verifyCode }) => {
  return (
    <input
      type='number'
      required
      placeholder='Nhập vào...'
      className='px-4  pr-1 py-1.5  rounded-sm    border border-slate-400 outline-none text-[13px]'
      onChange={ChangeVerify}
      value={verifyCode}
    />
  )
}

export default VerifyPhoneNumber
