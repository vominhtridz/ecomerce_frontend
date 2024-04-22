import { useEffect } from "react"
import { ContainLanguages } from "../../languages/Languages"
import { useParams } from "react-router-dom"
import { useMyContext } from "../../context/context"
import { languageType } from "../../typescript/languageType"
import { LoadingIcon } from "../../images/centerIcons"

const PageNotFound = () => {
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
    <h2 className='pt-[100px] h-[100vh] flex w-full items-center justify-center text-5xl uppercase font-bold'>
      Page Not Found
    </h2>
  )
}
export default PageNotFound
