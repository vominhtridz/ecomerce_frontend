import { ChangeEvent, FC, useState } from "react"
import { Eyeicon, noEyeicon } from "../../../images/centerIcons"
interface RegisterTypes {
  conFirmPwd: string
  ChangeConfirm: (e: ChangeEvent<HTMLInputElement>) => void
}
const ConfirmPwd: FC<RegisterTypes> = ({ conFirmPwd, ChangeConfirm }) => {
  const [confirm, setConfirm] = useState<boolean>(false)

  const handleConfirmPsd = () => {
    setConfirm(!confirm)
  }
  return (
    <nav className='relative'>
      <input
        type={`${confirm ? "text" : "password"}`}
        className='w-full p-4 transition duration-500   border my-2  text-black border-slate-400 rounded-sm bg-[#e8f0fe]'
        placeholder='Confirm Password'
        value={conFirmPwd}
        onChange={ChangeConfirm}
        autoComplete='new-password'
        required
      />
      <label className='absolute top-7 right-4 cursor-pointer text-2xl' onClick={handleConfirmPsd}>
        {!confirm && noEyeicon}
        {confirm && Eyeicon}
      </label>
    </nav>
  )
}
export default ConfirmPwd
