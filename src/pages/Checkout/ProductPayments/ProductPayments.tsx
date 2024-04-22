import ChatNowBtn from "../../../components/button/Product_Infor/ChatNowBtn"
import { ShopIcon } from "../../../images/centerIcons"
import Products from "./Products"

const manageProductPayments = ["Đơn giá ", "Số lượng", "Thành tiền"]
const ProductPayments = () => {
  const getProductPayments = () =>
    manageProductPayments.map((item, index) => {
      return (
        <div className='px-11 text-[16px] text-slate-400 ' key={index}>
          {item}
        </div>
      )
    })
  return (
    <div className='my-4 shadow rounded-sm text-[13px] w-full bg-white px-4 py-8'>
      <nav className='flex justify-between w-full'>
        <h2 className='text-lg font-bold'>Sản phẩm</h2>
        <div className='flex items-center'>{getProductPayments()}</div>
      </nav>
      <nav className='flex items-center my-1'>
        <div className='flex items-center pr-2 border-r mr-4 border-slate-300 '>
          <p className='text-xl text-slate-400'>{ShopIcon}</p>
          <p className='px-2 text-[15px]'>Khuyến mãi 245</p>
        </div>
        <ChatNowBtn />
      </nav>
      <Products />
    </div>
  )
}

export default ProductPayments
