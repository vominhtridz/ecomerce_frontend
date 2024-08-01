import { ChangeEvent, FC, useState } from "react"
import { Eyeicon, noEyeicon } from "../../../images/centerIcons"
interface confrimPwdType {
  conFirmPwd: string
  ChangeConfirm: (e: ChangeEvent<HTMLInputElement>) => void
  error: boolean
}
const ConfirmPwd: FC<confrimPwdType> = ({ conFirmPwd, ChangeConfirm, error }) => {
  const [confirm, setConfirm] = useState<boolean>(false)
  const checkErorr = error ? "border-red-500 outline-red-300" : "outline-blue-300 border-slate-400"
  const handleConfirmPsd = () => {
    setConfirm(!confirm)
  }
  return (
    <nav className='relative'>
      <input
        type={`${confirm ? "text" : "password"}`}
        className={`${checkErorr} w-full px-4 py-2.5   text-sm transition duration-500   border my-1  text-black rounded-sm shadow`}
        placeholder='Xác nhận mật khẩu'
        value={conFirmPwd}
        onChange={ChangeConfirm}
        autoComplete='new-password'
        required
      />
      <label className='absolute top-4 right-4 cursor-pointer text-xl' onClick={handleConfirmPsd}>
        {!confirm && noEyeicon}
        {confirm && Eyeicon}
      </label>
    </nav>
  )
}
export default ConfirmPwd
