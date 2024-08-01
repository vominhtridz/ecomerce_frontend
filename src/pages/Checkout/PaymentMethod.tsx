import ChangeBtn from "../../components/button/ChangeBtn"
import OrderBtn from "../../components/button/OrderBtn"

const PaymentMethod = () => {
  const ChangePayment = () => {}
  const handleSeenRules = () => {}
  const handleOrderPayment = () => {}
  return (
    <div className='bg-white p-4 rounded-sm text-[13px] shadow '>
      <div className='flex items-center border-b border-slate-300 py-4 justify-between w-full'>
        <h2 className='text-sm font-semibold'>Phương thức thanh toán</h2>
        <div className='flex items-center'>
          <p className='px-6 text-sm'>Thanh toán khi nhận hàng</p>
          <ChangeBtn handleChange={ChangePayment} />
        </div>
      </div>
      <div className='flex flex-col py-4 items-end border-b border-slate-200'>
        <nav className='text-slate-500 w-[250px]  py-1.5 px-2 flex justify-between items-center'>
          <p className=''>Tổng tiền hàng</p>
          <label className='px-4'>₫25.000</label>
        </nav>
        <nav className='text-slate-500 w-[250px]  py-1.5 px-2 flex justify-between items-center'>
          <p className=''>Phí vận chuyển</p>
          <label className='px-4'>₫10</label>
        </nav>
        <nav className='text-slate-500 w-[250px]  py-1.5 px-2 flex justify-between items-center'>
          <p className=''>Tổng thanh toán</p>
          <label className='px-4 text-lg font-semibold text-red-500'>₫25.001</label>
        </nav>
      </div>
      <div className='flex items-center justify-between py-4'>
        <nav className='flex items-center'>
          <p>Nhấn "Đặt hàng" đồng nghĩa với việc bạn đồng ý tuân theo</p>
          <button className='px-2 text-blue-600' onClick={handleSeenRules}>
            Điều khoản Sango
          </button>
        </nav>
        <OrderBtn handleOrder={handleOrderPayment} />
      </div>
    </div>
  )
}

export default PaymentMethod
