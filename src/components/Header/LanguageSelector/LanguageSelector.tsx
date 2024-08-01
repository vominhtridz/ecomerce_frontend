import { useMyContext } from "@/context/context"
import { ChangeEvent } from "react"
import { useNavigate } from "react-router-dom"
//-------------------- LANGUAGES OPTIONS --------------------------
const langs = [
  { shortCode: "vi", label: "Việt Nam" },
  { shortCode: "ko", label: "Korean" },
  { shortCode: "en", label: "English" },
  { shortCode: "th", label: "ThaiLan" },
]
const LanguageSelector = () => {
  const navigate = useNavigate()
  const { langCode } = useMyContext()
  //-------------------- CHANGE LANGUAGE --------------------------
  function ChangeLanguages(e: ChangeEvent<HTMLSelectElement>) {
    const ShortCodeLang = e.target.value
    navigate(`/${ShortCodeLang}`)
    window.location.reload()
  }
  //-------------------- GET OPTION LANGUAGE--------------------------
  const getOptions = () =>
    langs.map((lang, index) => (
      <option className='outline-slate-100 border-0 ' key={index} value={lang.shortCode}>
        {lang.label}
      </option>
    ))
  return (
    <select value={langCode} className='max-md:p-1 block outline-none border border-solid border-black  p-2 ' onChange={ChangeLanguages}>
      {getOptions()}
    </select>
  )
}

export default LanguageSelector
