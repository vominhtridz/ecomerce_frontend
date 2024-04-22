import { useEffect } from "react"
import { useParams } from "react-router-dom"

import RouteSeller from "./RouteSeller"
import InforShopSeller from "./InforShopSeller/InforShopSeller"
import { useMyContext } from "../../../../context/context"
import { ContainLanguages } from "../../../../languages/Languages"
import { languageType } from "../../../../typescript/languageType"
import { AddMemberIcon, LoadingIcon } from "../../../../images/centerIcons/index"

const SecondPageSelling = () => {
  const { lang } = useParams()
  const { language, setLanguage, setLangCode } = useMyContext()
  //khi render ra component home kiểm tra link language in prams  để setup cho state ở usecontext và truyền đi qua
  //componet cha là defaultLayout để render ra header và footer
  useEffect(() => {
    if (lang && ContainLanguages.hasOwnProperty(lang)) {
      setLanguage(ContainLanguages[lang] as languageType)
      setLangCode(lang)
    }
  }, [setLanguage, setLangCode])
  // nếu ngôn ngữ = null thì xuất ra loading
  if (!language) {
    return (
      <div className='text-4xl h-[100vh] flex items-center justify-center text-blue-400 shadow w-full uppercase'>
        {LoadingIcon}
      </div>
    )
  }
  return (
    <div className=' mx-16 py-10  px-36'>
      <div className='shadow bg-white rounded-sm '>
        <h2 className='py-6 border-b border-slate-200 text-slate-600 text-lg  px-10 flex items-center'>
          <p className='px-3 text-2xl '>{AddMemberIcon}</p>
          Đăng kí trở thành người bán
        </h2>
        <RouteSeller />
        <InforShopSeller />
      </div>
    </div>
  )
}

export default SecondPageSelling
