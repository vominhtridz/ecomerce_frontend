import { CuccessIcon } from "@/images/Svg/svgImage"
import { Link } from "react-router-dom"

const Complete = () => {
  return (
    <div className='flex items-center flex-col justify-center w-full min-h-[50vh]'>
      <p className='w-20 h-20 p-4 rounded-full bg-green-500 text-white text-5xl'>{CuccessIcon}</p>
      <p className='py-2 text-xl text-slate-700'>Đăng kí thành công</p>
      <p className='py-2 mb-6 text-slate-600'>Chào mừng đến với Sango bắt đầu hành trình bán sản phẩm riêng của bạn nhé.</p>
      <Link
        to={`/seller/product/new`}
        className='px-6 py-2 bg-green-500 hover:shadow-lg hover:bg-green-600 rounded-sm text-[13px] text-white'
      >
        Thêm sản phẩm
      </Link>
    </div>
  )
}

export default Complete
