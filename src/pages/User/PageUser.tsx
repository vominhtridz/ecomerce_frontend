import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import { ContainLanguages } from "../../languages/Languages"
import { languageType } from "../../typescript/language"
import { useMyContext } from "../../context/context"
import SideBar from "./SideBar/SideBar"
import { Outlet } from "react-router-dom"
import { LoadingIcon } from "@/images/centerIcons"
export const PageUsers = () => {
  const { lang } = useParams()
  let [loadingPage, setloadingPage] = useState<boolean>(true)
  const { setLanguage, setLangCode, language } = useMyContext()
  useEffect(() => {
    if (lang && ContainLanguages.hasOwnProperty(lang)) {
      setLanguage(ContainLanguages[lang] as languageType)
      setLangCode(lang)
      setTimeout(() => {
        setloadingPage(false)
      }, 1000)
    }
  }, [language])

  return (
    <section>
      <div className='flex  px-4 py-2'>
        <SideBar />
        <div className='border border-gray-200 ml-2 w-full shadow'>
          {loadingPage ? (
            <p className='text-5xl flex w-full h-full items-center justify-center text-blue-500'>{LoadingIcon}</p>
          ) : (
            <Outlet />
          )}
        </div>
      </div>
    </section>
  )
}
export default PageUsers
