import React from "react"
import { Link } from "react-router-dom"
const options = [
  "Mã đơn hàng",
  "Tên Sản Phẩm",
  "Trạng thái",
  "Vận Chuyển",
  "Tên khách hàng",
  "Ghi chú khách hàng",
  "Số Lượng",
  "Thanh toán",
  "Hành động",
]
const OrderBox = () => {
  const path = window.location.pathname
  const getRoute = options.map((option, index) => (
    <div key={index} className='px-4 text-[13px] whitespace-nowrap text-gray-700 select-none  '>
      {option}
    </div>
  ))
  return <div className=' bg-gray-100 border  py-2 flex items-center border-b border-gray-200'>{getRoute}</div>
}

export default OrderBox
