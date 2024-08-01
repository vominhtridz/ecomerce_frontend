import { Link } from "react-router-dom"
import ChatNowBtn from "../../../components/button/Product_Infor/ChatNowBtn"
import img from "..//..//..//images/Home_Category/Book_Store.png"
import { useMyContext } from "../../../context/context"
import { ShopIcon, ShopWhiteIcon } from "../../../images/centerIcons"

function AccountUserInfo() {
  const { langCode } = useMyContext()
  return (
    <nav className='flex items-center border-r border-slate-200 pr-14'>
      <Link to={`/${langCode}/sellerinfo`} className='mx-4 w-20 h-20 '>
        {img ? (
          <img src={img} className='rounded-full w-full h-full  border border-slate-200 object-contain bg-slate-50' alt='' />
        ) : (
          <p className='rounded-full w-full h-full  border text-slate-400 text-4xl flex items-center justify-center border-slate-200 object-contain bg-slate-50'>
            {ShopWhiteIcon}
          </p>
        )}
      </Link>
      <div className='text-left'>
        <h6 className='text-base'>Huy tưởng</h6>
        <p className='text-sm text-slate-500 pb-1'>Online 10 phút trước</p>
        <span className='flex items-center'>
          <ChatNowBtn />
          <Link
            to={`/${langCode}/sellerinfo`}
            className=' text-[13.5px] whitespace-nowrap flex items-center rounded-sm  mx-2 py-1 px-2 my-1 text-slate-600 border border-slate-300 '
          >
            <p className='text-lg pr-1'>{ShopIcon}</p>
            Xem Shop
          </Link>
        </span>
      </div>
    </nav>
  )
}

export default AccountUserInfo
