import { Link } from "react-router-dom"
import { useMyContext } from "../../../context/context"
import { LoginIcon, PenIcons } from "../../../images/centerIcons"

export const EditAccount = () => {
  const { langCode, dataUser } = useMyContext()

  return (
    <div className=' flex items-center mb-4'>
      <Link to={`/${langCode}/user/account/profile`} className='text-3xl p-1.5 border rounded-full  border-slate-400'>
        {LoginIcon}
      </Link>
      <div className='text-base leading-4 text-slate-500 px-2'>
        <h4 className='text-black text-[14.5px] whitespace-nowrap pl-0.5'>{dataUser?.defaultName || dataUser?.username} </h4>
        <Link to={`/${langCode}/user/account/profile`} className='flex items-center pt-0.5   text-slate-700 whitespace-nowrap italic'>
          <span className='block mr-0.5 '>{PenIcons}</span>
          <p className='text-[12.5px]'>Sửa Hồ Sơ</p>
        </Link>
      </div>
    </div>
  )
}
export default EditAccount
