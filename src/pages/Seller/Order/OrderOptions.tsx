import { Link, useLocation } from "react-router-dom"
const options = [
  { title: "Tất cả", path: "/seller/manage/order/all" },
  { title: "Chờ xác nhận", path: "/seller/manage/order/confirm" },
  { title: "Lấy hàng", path: "/seller/manage/order/pickup" },
  { title: "Đang giao", path: "/seller/manage/order/shipping" },
  { title: "Đã giao", path: "/seller/manage/order/complete" },
  { title: "Trả hàng/Hoàn tiền", path: "/seller/manage/order/cancel" },
  { title: "Giao hàng không thành công", path: "/seller/manage/order/uncuccess" },
]
const OrderOptions = () => {
  const { pathname } = useLocation()
  const getRoute = options.map((option, index) => (
    <Link
      to={option.path}
      key={index}
      className={`${pathname == option.path ? " border-b-[3px] border-green-500 text-green-500 font-semibold" : ""} py-2.5 px-6 text-[13.5px] hover:text-green-500  whitespace-nowrap text-gray-700 select-none `}
    >
      {option.title}
    </Link>
  ))
  return <div className=' flex items-center border-b border-gray-200 '>{getRoute}</div>
}

export default OrderOptions
