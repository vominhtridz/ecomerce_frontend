import { FC } from "react"
interface OrderBtnTypes {
  handleOrder: () => void
}
const OrderBtn: FC<OrderBtnTypes> = ({ handleOrder }) => {
  return (
    <button className='px-20 py-2 rounded-sm text-white bg-red-500 text-base' onClick={handleOrder}>
      Đặt hàng
    </button>
  )
}

export default OrderBtn
