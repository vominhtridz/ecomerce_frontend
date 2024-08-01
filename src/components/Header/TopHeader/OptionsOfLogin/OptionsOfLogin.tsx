import { Link, useNavigate } from "react-router-dom"
import { useMyContext } from "../../../../context/context"
import { MouseEvent, useState } from "react"
import OptionLoggedIn from "./OptionsLoggedIn"
import { UserLinkImg } from "@/images/linkImg"
import { LoginIcon } from "@/images/centerIcons"
const OptionsOfLogin = () => {
  const navigate = useNavigate()
  const { langCode, dataUser } = useMyContext()
  const [visivle, setVisivle] = useState(false)
  //------------------------- HANDLE LOGGED IN--------------------------
  const handleAccountLoggedIn = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    e.stopPropagation()
    navigate(`/${langCode}/user/account/profile`)
  }
  //------------------------- GET ACCOUNT --------------------------
  const getAccountLoggedIn = () => {
    const Img = dataUser?.img || UserLinkImg
    const Username = dataUser?.defaultName || dataUser?.username
    return (
      <button
        onMouseEnter={() => setVisivle(true)}
        onMouseLeave={() => setVisivle(false)}
        onClick={handleAccountLoggedIn}
        className=' relative '
      >
        <div className='flex items-center  whitespace-nowrap w-full '>
          <div className={`w-8 h-8 `}>
            <img src={Img} alt='' className='w-full h-full rounded-full shadow border border-gray-100' />
          </div>
          <p className='hover:text-green-600 block pl-1 tracking-tight  font-normal text-[12.5px]'>{Username}</p>
        </div>
        {visivle && <OptionLoggedIn />}
      </button>
    )
  }
  //------------------------- RENDER ELEMENT --------------------------
  return (
    <section className='flex pr-2 items-center max-md:text-[14px] text-slate-700 text-base font-semibold'>
      {dataUser && getAccountLoggedIn()}
      {/* //------------------------- DATAUSER NOT EXITS RENDER TEXT LOGIN -------------------------- */}
      {!dataUser && (
        <Link to={`/${langCode}/login`} className='text-slate-500 hover:text-green-600 flex items-center whitespace-nowrap px-2'>
          <div className='text-xl pr-1'>{LoginIcon}</div>
          <p className=' '>Login</p>
        </Link>
      )}
    </section>
  )
}
export default OptionsOfLogin
