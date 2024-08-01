import ChangeBtn from "../../components/button/ChangeBtn"
import { LocationIcon } from "../../images/centerIcons"

const DeliveryAddress = () => {
  function handleChange() {}
  return (
    <div className='rounded-sm shadow text-[14px] p-4 bg-white'>
      <h2 className='flex text-lg  items-center py-2 text-green-500'>
        <p className='px-2 text-2xl  text-green-500'>{LocationIcon}</p>
        <p className=''>Địa Chỉ Nhận Hàng</p>
      </h2>

      <nav className='flex items-center'>
        <h2 className='px-2  text-[13px]'>nguyen huu tru </h2>
        <p className='px-1  text-[13px]'>(+84) 981737461</p>
        <address className='text-[13px] pl-6 pr-2 pt-1'>482/2/23/23, Hùng Vương, Xã Bàu Chinh, Huyện Châu Đức, Bà Rịa - Vũng Tàu </address>
        <label htmlFor='Mặc định' className='px-2 border-green-500 border text-green-600 text-[12px]'>
          Mặc định
        </label>
        <ChangeBtn handleChange={handleChange} />
      </nav>
    </div>
  )
}

export default DeliveryAddress
