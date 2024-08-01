import { Link } from "react-router-dom"

import { FC, FormEvent } from "react"
import { useMyContext } from "../../context/context"
interface ButtonRegisterTypes {
  handleRegister: (e: FormEvent) => void
}
const ButtonRegister: FC<ButtonRegisterTypes> = ({ handleRegister }) => {
  const { langCode } = useMyContext()

  return (
    <nav className='flex justify-between mx-1  items-center'>
      <div className='flex items-center '>
        <p className='text-[13px] tracking-tight'>alredy have an account ?</p>
        <Link
          to={`/${langCode}/login`}
          className='px-1 py-1.5 text-sm text-green-600  hover:underline hover:text-blue-600'
        >
          Login
        </Link>
      </div>
      <button
        type='submit'
        className=' px-4 py-2 hover border-gray-100 text-white bg-green-500 hover:bg-green-400 text-sm border-2'
        onClick={handleRegister}
      >
        Register
      </button>
    </nav>
  )
}
export default ButtonRegister
