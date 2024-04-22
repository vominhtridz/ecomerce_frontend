import { useEffect } from "react"
import { useParams } from "react-router-dom"
import { useMyContext } from "..//..//context/context"
import { LoadingIcon } from "..//..//images/centerIcons"
import { ContainLanguages } from "../..//languages/Languages"
import { languageType } from "..//..//typescript/languageType"

const ChannelSeller = () => {
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
  return <div>ChaneelSeller</div>
}

export default ChannelSeller
