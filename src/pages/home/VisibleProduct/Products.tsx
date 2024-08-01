import { useNavigate } from "react-router-dom"
import img from "..//..//..//images/products/USCBP300_BigSize.jpg"
import { useMyContext } from "../../../context/context"

function Products() {
  const { langCode } = useMyContext()
  const navigate = useNavigate()
  const NavigationInfoPage = () => {
    navigate(`/${langCode}/infor`)
  }
  return (
    <section className='flex items-center flex-wrap'>
      <div onClick={NavigationInfoPage} className='lg:w-1/5 p-1.5 my-2   max-lg:w-1/3 h-[21rem] max-sm:w-1/2'>
        <div className='relative  bg-white  rounded-sm  hover:shadow-lg border border-gray-200 cursor-pointer hover:ransition-all duration-200'>
          <img src={img} alt='' className='w-full h-1/2' />
          <label htmlFor='' className='absolute top-1 rounded-sm left-0 text-white bg-green-500 px-4 py-0.5 text-[12px]'>
            Hàng mới
          </label>
          <p className='rounded-full px-2 py-4 text-left text-ellipsis overlow-hidden max-h-[70px] text-sm '>
            Giày salinda nhập khẩu từ thái lan same body to here
          </p>
          <nav className='px-2 py-2 flex items-center justify-between '>
            <p className='text-sm text-green-600  '>15.000đ</p>
            <div className='text-base flex items-center'>
              <p className='text-sm pr-1'>Đã bán</p>
              <p className='text-sm text-gray-500'>100</p>
            </div>
          </nav>
        </div>
      </div>
    </section>
  )
}
export default Products
