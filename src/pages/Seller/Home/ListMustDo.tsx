import { Link } from "react-router-dom"

const options = [
  { text: "Chờ xác nhận", count: 0, route: "/" },
  { text: "Chờ lấy hàng", count: 0, route: "/" },
  { text: "Đã xử lý", count: 0, route: "/" },
  { text: "Đơn hủy", count: 0, route: "/" },
  { text: "Trả hàng/ hoàn tiền/ chờ xử lý", count: 0, route: "/" },
  { text: "Sản phẩm bị khóa ", count: 0, route: "/" },
  { text: "Sản phẩm Hết hàng", count: 0, route: "/" },
]
const ListMustDo = () => {
  const getOptions = options.map((option, index) => (
    <Link
      to={option.route}
      key={index}
      className='border-r w-1/6 border-gray-200 text-center  flex flex-col items-center cursor-pointer hover:bg-gray-50 px-6'
    >
      <p className='text-green-500 font-semibold py-2'>{option.count}</p>
      <p className='text-[12.5px]'>{option.text}</p>
    </Link>
  ))
  return (
    <>
      <h2 className='text-lg font-semibold text-black p-2'>Danh sách cần làm</h2>
      <div className='flex '>{getOptions}</div>
    </>
  )
}

export default ListMustDo
