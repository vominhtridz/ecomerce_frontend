import { useParams } from "react-router-dom"
import { useEffect } from "react"
import { ContainLanguages } from "../../languages/Languages"
import { languageType } from "../../typescript/language"
import { useMyContext } from "../../context/context"
import SideBar from "./SideBar/SideBar"
import SearchContent from "./Content/SearchContent"
import { LoadingIcon } from "../../images/centerIcons"

export const PageSearch = () => {
  const { lang, keySearch } = useParams()
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
    return <div className='text-4xl h-[100vh] flex items-center text-blue-400 shadow  justify-center w-full uppercase'>{LoadingIcon}</div>
  }
  return (
    <section className=' px-10 py-10 flex '>
      <SideBar />
      <SearchContent />
    </section>
  )
}
export default PageSearch
