import { Navigate, useParams } from "react-router-dom"
import { useMyContext } from "../../context/context"
import { languageType } from "../../typescript/language"
import { ContainLanguages } from "../../languages/Languages"
import { useEffect, useState } from "react"
import RegisterInput from "./Input/RegisterInput"
import { LoadingIcon } from "../../images/centerIcons"
const PageRegister = () => {
  const { lang } = useParams()
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(() => {
    const storedData = localStorage.getItem("basicUsers")
    if (storedData) {
      const parsedData = JSON.parse(storedData)
      return parsedData.LoggedIn || false // Default to false if LoggedIn is not defined
    }
    return false // Default to false if localStorage item is not found
  })
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
    return <div className='text-4xl h-[100vh] flex items-center justify-center w-full uppercase text-blue-400 shadow'>{LoadingIcon}</div>
  }
  return <div className='py-10'>{isLoggedIn ? <Navigate to='/' /> : <RegisterInput />}</div>
}
export default PageRegister
