import { ChangeEvent, FC, MouseEvent, useState } from "react"
import { Eyeicon, noEyeicon } from "../../../images/centerIcons"
interface RegisterTypes {
  pwd: string
  Changepwd: (e: ChangeEvent<HTMLInputElement>) => void
  error?: boolean
}
const PasswordInput: FC<RegisterTypes> = ({ pwd, Changepwd, error }) => {
  const [visibleEye, setVisibleEye] = useState<boolean>(false)
  const checkErorr = error ? "border-red-500 outline-red-300" : "outline-blue-300 border-slate-400"
  const handleSeePsd = (e: MouseEvent<HTMLLabelElement>) => {
    e.preventDefault()
    e.stopPropagation()
    setVisibleEye(!visibleEye)
  }
  return (
    <nav className='relative'>
      <input
        autoComplete='new-password'
        type={`${visibleEye ? "text" : "password"}`}
        className={`${checkErorr} w-full px-4 py-2.5 outline-blue-300 text-sm transition duration-500   border my-1  text-black  rounded-sm shadow`}
        placeholder='Password...'
        onChange={Changepwd}
        required
        id='password'
        value={pwd}
      />
      <label className='absolute top-4 outline-blue-300  cursor-pointer right-4 text-xl' onClick={handleSeePsd}>
        {!visibleEye && noEyeicon}
        {visibleEye && Eyeicon}
      </label>
    </nav>
  )
}
export default PasswordInput
