import { useNavigate, useParams } from "react-router-dom"
import { useMyContext } from "..//../../context/context"
import { languageType } from "..//../../typescript/language"
import { ContainLanguages } from "..//../../languages/Languages"
import { ChangeEvent, FormEvent, useEffect, useState } from "react"
import { ArrowLeft, LoadingIcon } from "..//../../images/centerIcons"
import EmailAndPhoneNum from "@/components/Input/User/EmailAndPhoneNum"
import NextBtn from "@/components/button/NextBtn"
import { VerifiEmail } from "@/apis/apis"
import { EmailRegex } from "@/components/Regex"
import { handleCuccessLabel, handleFailLabel } from "@/components/func/funcVisiLabel"
import VerificationCode from "@/components/Input/User/VerificationCode"
import SendBtn from "@/components/button/SendBtn"
const ForgotPassword = () => {
  const navigate = useNavigate()
  const { language, setLanguage, setLangCode, setVisilFailLabel, setMessageLabel, setVisiCuccessLabel } = useMyContext()
  const { lang } = useParams()
  const [email, setEmail] = useState<string>("")
  const [loading, setLoading] = useState<boolean>(false)
  const [disableEmail, setDisableEmail] = useState<boolean>(false)
  const [disableCode, setDisableCode] = useState<boolean>(false)
  const [showVerifiCode, setShowVerifiCode] = useState<boolean>(false)
  const [codeVerifi, setCodeVerifi] = useState<string>("")
  const [Code, setCode] = useState<string>("")
  const CheckVisibleClient = !showVerifiCode ? "Đặt lại mật khẩu" : "Xác thực mật khẩu"
  //------------------------ Set Language---------------------------
  useEffect(() => {
    if (lang && ContainLanguages.hasOwnProperty(lang)) {
      setLanguage(ContainLanguages[lang] as languageType)
      setLangCode(lang)
    }
  }, [setLanguage, setLangCode])
  // Check and Sending Email
  const sendEmail = async (e: FormEvent<HTMLFormElement | HTMLButtonElement>) => {
    e.preventDefault()
    if (!EmailRegex.test(email)) {
      handleFailLabel("Email không đúng định dạng", 3000, setMessageLabel, setVisilFailLabel)
      return
    }
    setLoading(true)
    setDisableEmail(true)
    VerifiEmail({ email: email.toLowerCase() })
      .then(res => {
        console.log(res)
        setShowVerifiCode(true)
        setCodeVerifi(res.data.codeverify)
        setLoading(false)
        setDisableEmail(false)
        localStorage.setItem("email", JSON.stringify(res.data.data[0].email))
      })
      .catch(err => {
        handleFailLabel(err.response.data.message, 3000, setMessageLabel, setVisilFailLabel)
        setLoading(false)
        setShowVerifiCode(false)
      })
  }
  //------------------- CHECK AND HANDLE  SEND CODE-------------
  const handleSendCode = (e: FormEvent<HTMLFormElement | HTMLButtonElement>) => {
    e.preventDefault()
    setDisableCode(true)
    setLoading(true)
    if (Code == "") {
      handleFailLabel("code is not correct !", 3000, setMessageLabel, setVisilFailLabel)
      setDisableCode(false)
      setLoading(false)
      return
    }
    if (codeVerifi == Code) {
      handleCuccessLabel("Cuccess verification Code !", 3000, setMessageLabel, setVisiCuccessLabel)
      setDisableCode(false)
      setLoading(false)
      setTimeout(() => {
        navigate(`/${lang}/changepwd`)
      }, 2000)
    } else {
      setDisableCode(false)
      setLoading(false)
      handleFailLabel("code is not correct !", 3000, setMessageLabel, setVisilFailLabel)
    }
  }
  //------------------ IF NOT HAVE LANGUAGE RETURN ICON LOADING--------------
  if (!language) {
    return <div className='text-4xl h-[100vh] flex items-center text-blue-400 shadow justify-center w-full uppercase'>{LoadingIcon}</div>
  }
  const ChangeValue = (e: ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)
  const ChangeCode = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    if (value.length > 6) return
    setCode(e.target.value)
  }
  // ----------------------------HANDLE MOVE BACK ROUTE---------
  const handleBack = () => {
    if (showVerifiCode == true) {
      setShowVerifiCode(false)
      setDisableEmail(false)
      setCodeVerifi("")
    } else {
      setDisableEmail(false)
      setCodeVerifi("")
      setShowVerifiCode(false)
      navigate(-1)
    }
  }
  //----------------------- RENDER ELEMENT ----------
  return (
    <div className='min-h-[54vh] flex items-center justify-center'>
      <div className=' w-[25rem] justify-center px-4 py-2 rounded-md shadow border border-gray-10 0 '>
        <div className='flex items-center '>
          <button onClick={handleBack} className=' text-2xl text-green-600  '>
            {ArrowLeft}
          </button>
          <h1 className='text-2xl  mx-auto text-slate-800'>{CheckVisibleClient}</h1>
        </div>
        {!showVerifiCode ? (
          <form onSubmit={sendEmail} className='py-10 px-8 '>
            <EmailAndPhoneNum ChangeValue={ChangeValue} value={email} disable={disableEmail} />
            <p className='py-2'></p>
            <NextBtn handleNext={sendEmail} width='w-full' loading={loading} />
          </form>
        ) : (
          <form action='' onSubmit={handleSendCode} className='py-6 px-8 '>
            <div className=''>
              <VerificationCode ChangeCode={ChangeCode} code={Code} disable={disableCode} />
              <p className='py-2'></p>
              <SendBtn handleSend={handleSendCode} loading={loading} />
            </div>
          </form>
        )}
      </div>
    </div>
  )
}
export default ForgotPassword
