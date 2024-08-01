import { useEffect, useState } from "react"
import FollowBtn from "../../../components/button/FollowBtn"
import FollowedBtn from "../../../components/button/FollowedBtn"
import img from "..//..//..//images/products/USHSF150_Present.jpg"

import Online from "../../../components/Input/Online"
import InforItem from "./InforItem"
import { ShopWhiteIcon } from "../../../images/centerIcons"
import { ContainLanguages } from "@/languages/Languages"
import { languageType } from "@/typescript/language"
import { useParams } from "react-router-dom"
import { useMyContext } from "@/context/context"
import ChatNowBtn from "@/components/button/Product_Infor/ChatNowBtn"

const SalesUserInfor = () => {
  const { lang } = useParams()
  const { language, setLanguage, setLangCode } = useMyContext()
  //khi render ra component home kiểm tra link language in prams  để setup cho state ở usecontext và truyền đi qua
  //componet cha là defaultLayout để render ra header và footer
  const [follow, setFollow] = useState<boolean>(false)
  useEffect(() => {
    if (lang && ContainLanguages.hasOwnProperty(lang)) {
      setLanguage(ContainLanguages[lang] as languageType)
      setLangCode(lang)
    }
  }, [setLanguage, setLangCode])
  const handleFollowed = () => {
    setFollow(false)
  }
  const handleFollow = () => {
    setFollow(true)
  }
  return (
    <div className='  flex   rounded-sm '>
      <div className='bg-violet-900 px-14 py-4 '>
        <div className='flex'>
          <div className='pr-3.5'>
            {img ? (
              <img src={img} alt='' className='w-14 h-14 bg-slate-50 rounded-full border border-slate-300' />
            ) : (
              <p className='object w-full h-[350px] rounded-sm text-slate-500'>{ShopWhiteIcon}</p>
            )}
          </div>
          <nav className='text-white text-[11px] pr-3'>
            <h2 className='text-lg p-0'>Anhduong02090101</h2>
            <Online />
            {/* <Offline/> */}
          </nav>
        </div>
        <div className='py-2  flex items-center'>
          {follow ? <FollowedBtn handleFollowed={handleFollowed} /> : <FollowBtn handleFollow={handleFollow} />}
          <p className='pr-6'></p>
          <ChatNowBtn />
        </div>
      </div>
      <InforItem />
    </div>
  )
}

export default SalesUserInfor
