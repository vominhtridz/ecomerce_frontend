import Search from "./Search/Search"
import LanguageSelector from "../LanguageSelector/LanguageSelector"
import OptionsOfLogin from "./OptionsOfLogin/OptionsOfLogin"
import { Link } from "react-router-dom"
import { useMyContext } from "@/context/context"
import { CartImg } from "@/images/centerIcons"
import Notification from "./Notification"

const TopHeader = () => {
  const { langCode } = useMyContext()
  return (
    <div className='fixed top-0  left-0 right-0 z-20 bg-white py-1  '>
      <div className='w-full max-md:text-[12px] lg:hidden max-md:pr-2 justify-end pr-6 flex items-center'>
        <OptionsOfLogin />
        <LanguageSelector />
      </div>  
      <section className='flex items-center max-lg:flex-wrap px-6 max-sm:px-1.5  text-sm font-semibol'>
        <Link to='/' className='text-3xl font-semibold text-green-600 px-4 py-2 '>
          Sango
        </Link>
        <Search />
        <div className=' flex items-center C'>
          <Notification />
          <Link to={`/${langCode}/cart`} className='max-lg:w-full whitespace-nowrap pr-6 pl-2 flex justify-items-center max-lg:hidden'>
            <p className=' px-1 text-xl text-green-500'>{CartImg}</p>
            Giỏ hàng
          </Link>
          <div className='flex items-center max-lg:hidden'>
            <OptionsOfLogin />
            <LanguageSelector />
          </div>
        </div>
      </section>
    </div>
  )
}
export default TopHeader
