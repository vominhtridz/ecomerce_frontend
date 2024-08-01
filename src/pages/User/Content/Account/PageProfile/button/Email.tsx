import { Link } from "react-router-dom"
import { useMyContext } from "../../../../../../context/context"

const UserEmail = () => {
  const { langCode, dataUser } = useMyContext()
  return (
    <nav className='flex items-center py-2 ml-14'>
      <p className=''>Email </p>
      <label className=' pl-4 text-black text-[12px]'>{dataUser?.email}</label>
      <Link to={`/${langCode}/user/account/email`} className='text-blue-700 px-2 outline-none hover:underline'>
        Thay Đổi
      </Link>
    </nav>
  )
}
export default UserEmail
