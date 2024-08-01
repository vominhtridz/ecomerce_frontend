import { useParams } from "react-router-dom"
import { useMyContext } from "../../context/context"
import { languageType } from "../../typescript/language"
import { ContainLanguages } from "../../languages/Languages"
import { useEffect } from "react"
import DeliveryAddress from "./DeliveryAddress"
import ProductPayments from "./ProductPayments/ProductPayments"
import MessageShop from "./MessageShop"
import VoucherPayment from "./VoucherPayment"
import PaymentMethod from "./PaymentMethod"
import { LoadingIcon } from "../../images/centerIcons"

const Checkout = () => {
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
      <div className='text-4xl h-[100vh] flex items-center justify-center w-full uppercase text-blue-400 shadow'>
        {LoadingIcon}
      </div>
    )
  }
  return (
    <div className='py-6 px-16 '>
      <DeliveryAddress />
      <ProductPayments />
      <MessageShop />
      <VoucherPayment />
      <PaymentMethod />
    </div>
  )
}

export default Checkout
