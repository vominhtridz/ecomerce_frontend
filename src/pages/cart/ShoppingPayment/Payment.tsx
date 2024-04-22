import { DownIcon } from "../../../images/centerIcons"
import PaymentBtn from "../../../components/button/Cart/paymentBtn"

const Payment = () => {
  return (
    <nav className='flex items-center'>
      <h2 className='flex items-center text-base'>
        Tổng thanh toán: <p className='px-2 text-lg text-red-500'>3 Sản phẩm</p>
      </h2>
      <div className='mx-6'>
        <p className='text-base text-red-500 flex items-center'>
          ₫3.614.000 <span className='block px-2'>{DownIcon}</span>
        </p>
        <div className='flex items-center'>
          <p className='px-1.5'>Tiết kiệm</p>
          <p className='text-red-500'> ₫581k</p>
        </div>
      </div>
      <PaymentBtn />
    </nav>
  )
}

export default Payment
