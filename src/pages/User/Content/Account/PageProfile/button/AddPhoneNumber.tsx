import { Link } from "react-router-dom"
import { useMyContext } from "../../../../../../context/context"
const AddPhoneNumber = () => {
  const { langCode, dataUser } = useMyContext()
  return (
    <nav className='flex items-center py-2 ml-2'>
      <label className=''>Số điện thoại </label>
      <p className='text-[12px] pl-4'>{dataUser?.phonenumber}</p>
      <Link to={`/${langCode}/user/account/phonenumber`} className='text-blue-700 px-4 outline-none hover:underline'>
        Thay Đổi
      </Link>
    </nav>
  )
}
export default AddPhoneNumber
