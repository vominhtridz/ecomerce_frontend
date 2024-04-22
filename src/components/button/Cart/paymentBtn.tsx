import { useNavigate } from "react-router-dom"
import { useMyContext } from "../../../context/context"

const PaymentBtn = () => {
  const navigate = useNavigate()
  const { langCode } = useMyContext()
  const handleCheckout = () => {
    navigate(`/${langCode}/checkout`)
  }
  return (
    <button
      onClick={handleCheckout}
      className='px-20 py-3 flex items-center justify-center text-[14px] rounded-sm border-none text-white bg-red-500'
    >
      Mua Hàng
    </button>
  )
}
export default PaymentBtn
