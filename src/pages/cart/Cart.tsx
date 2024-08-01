import { useParams } from "react-router-dom"
import { useMyContext } from "../../context/context"
import { ContainLanguages } from "../../languages/Languages"
import { languageType } from "../../typescript/language"
import { useEffect } from "react"
import MoreProducts from "./MoreProducts/MoreProducts"
import ShoppingCart from "./ShoppingCart/ShoppingCart"
import ShoppingPayment from "./ShoppingPayment/ShoppingPayment"
import { LoadingIcon } from "../../images/centerIcons"

const PageCart = () => {
  const { lang } = useParams()
  const { language, setLanguage, setLangCode } = useMyContext()
  useEffect(() => {
    if (lang && ContainLanguages.hasOwnProperty(lang)) {
      setLanguage(ContainLanguages[lang] as languageType)
      setLangCode(lang)
    }
  }, [setLanguage, setLangCode])
  if (!language) {
    return <div className='text-4xl h-[100vh] flex items-center text-blue-400 shadow justify-center w-full uppercase'>{LoadingIcon}</div>
  }
  return (
    <div className='flex flex-col px-12 py-6 mb-10'>
      <ShoppingCart />
      <ShoppingPayment />
      <MoreProducts />
    </div>
  )
}
export default PageCart
