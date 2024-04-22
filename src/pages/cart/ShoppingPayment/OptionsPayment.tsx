import RemoveBtn from "../../../components/button/RemoveBtn"

const OptionsPayment = () => {
  return (
    <nav className='flex items-center'>
      <button className='flex items-center mx-2'>
        <input type='checkbox' className='w-6 h-6  rounded-sm' />
        <p className='px-4'> Chọn tất cả</p>
      </button>
      <RemoveBtn />
      <button className='text-base'>Lưu vào mục đã thay đổi</button>
    </nav>
  )
}

export default OptionsPayment
