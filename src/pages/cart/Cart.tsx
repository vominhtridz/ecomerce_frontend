import { useParams } from "react-router-dom"

import { useMyContext } from "../../context/context"
import { ContainLanguages } from "../../languages/Languages"
import { languageType } from "../../typescript/languageType"
import { useEffect } from "react"

import MoreProducts from "./MoreProducts/MoreProducts"
import ShoppingCart from "./ShoppingCart/ShoppingCart"
import ShoppingPayment from "./ShoppingPayment/ShoppingPayment"
import { LoadingIcon } from "../../images/centerIcons"

const PageCart = () => {
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
      <div className='text-4xl h-[100vh] flex items-center text-blue-400 shadow justify-center w-full uppercase'>
        {LoadingIcon}
      </div>
    )
  }
  return (
    <div className='flex flex-col px-10 py-6 mb-10'>
      <ShoppingCart />
      <ShoppingPayment />
      <MoreProducts />
    </div>
  )
}
export default PageCart
