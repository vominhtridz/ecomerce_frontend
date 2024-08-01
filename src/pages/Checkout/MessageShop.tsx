import ChangeBtn from "../../components/button/ChangeBtn"
import { TrunkFast } from "../../images/centerIcons"

const MessageShop = () => {
  const handleChangeMessage = () => {}
  return (
    <div className=' shadow rounded-sm bg-blue-50 p-6'>
      <div className='flex items-center border-b border-slate-300 pb-6 w-full'>
        <nav className='flex whitespace-nowrap items-center border-r border-slate-300'>
          <div className='px-2'>Lời nhắn:</div>
          <input
            required
            type='text'
            placeholder='Lưu ý cho người bán...'
            className=' outline-none px-4 py-2.5 w-[26rem] rounded-sm text-[15px]'
          />
        </nav>
        <nav className='ml-auto'>
          <div className='flex items-center'>
            <p className='pl-4 pr-10 text-sm'>Đơn vị vận chuyển:</p>
            <div className=''>
              <div className='flex items-center justify-between'>
                <h2 className='px-1 text-sm'>Nhanh</h2>
                <ChangeBtn handleChange={handleChangeMessage} />
              </div>
              <div className='text-green-500 flex text-sm items-center'>
                <p className='text-sm px-2 text-green-500'>{TrunkFast}</p>
                Nhận hàng vào 4 Tháng 4 - 5 Tháng 4
              </div>
            </div>
          </div>
        </nav>
      </div>
      <div className='py-4 flex items-center justify-end w-full'>
        <p className='text-sm text-black'>Tổng số tiền (2 sản phẩm):</p>
        <p className='px-10 text-red-500'>₫25.001</p>
      </div>
    </div>
  )
}

export default MessageShop
