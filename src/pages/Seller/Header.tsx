import { DownIcon, LanguageIcon, LogoutIcon, SettingIcon, ShopIcon } from "@/images/centerIcons"
import React, { useState } from "react"
import { Link } from "react-router-dom"
import img from "..//..//images/Home_Category/Beauty.png"
const options = [
  {
    title: "Hồ sơ Shop",
    route: "",
    icon: ShopIcon,
  },
  {
    title: "Thiết lập Shop",
    route: "",
    icon: SettingIcon,
  },
  {
    title: "tiếng việt",
    route: "",
    icon: LanguageIcon,
  },
  {
    title: "Đăng xuất",
    route: "",
    icon: LogoutIcon,
  },
]
const Header = () => {
  const [showOption, setShowOption] = useState<boolean>(false)
  const getOptions = () =>
    options.map((option, index) => (
      <Link to={option.route} className='flex items-center py-2 hover:bg-slate-50' key={index}>
        <p className='px-2.5 text-slate-500 text-base '>{option.icon}</p>
        <p className='text-sm'>{option.title}</p>
      </Link>
    ))
  return (
    <header className='py-2 px-6 bg-white border-b border-gray-100 flex items-center justify-between  shadow-lg'>
      <div className='flex items-center'>
        <Link to='/seller' className='text-2xl font-semibold text-green-600 px-2 py-2 '>
          Sango
        </Link>
        <p className='text-lg'>Trang người bán hàng</p>
      </div>
      <div
        className='flex items-center relative cursor-pointer'
        onMouseEnter={() => setShowOption(true)}
        onMouseLeave={() => setShowOption(false)}
      >
        <img src={img} alt='' className='w-8 h-8 rounded-full border border-gray-50 shadow mx-2' />
        <p className='text-sm'>Nguyễn Văn A</p>
        <p className='px-2 text-sm pt-0.5'>{DownIcon}</p>
        {showOption && (
          <div className='absolute top-full right-0 w-[12rem] bg-white border border-gray-50 shadow rounded-sm'>{getOptions()}</div>
        )}
      </div>
    </header>
  )
}

export default Header
