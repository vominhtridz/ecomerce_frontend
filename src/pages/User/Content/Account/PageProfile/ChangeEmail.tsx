import { VerifiEmailUser } from "@/apis/apis"
import EmailShop from "@/components/Input/EmailShop"
import { EmailRegex } from "@/components/Regex"
import NextBtn from "@/components/button/NextBtn"
import { handleCuccessLabel, handleFailLabel } from "@/components/func/funcVisiLabel"
import { useMyContext } from "@/context/context"
import { ChangeEvent, FormEvent, useEffect, useState } from "react"
import VerifiCodeEmail from "./VerifiCodeEmail"
const ChangeEmail = () => {
  const { dataUser, setDataUser, setMessageLabel, setVisilFailLabel } = useMyContext()
  const [email, setEmail] = useState<string>(dataUser?.email || "")
  const [loading, setLoading] = useState<boolean>(false)
  const [disable, setDisableEmail] = useState<boolean>(false)
  const [visibleCode, setvisibleCode] = useState<boolean>(false)
  const [message, setMessage] = useState<string>("")
  const [CodeVerifi, setCodeVerifi] = useState<string>("")
  //----------------------------------- SET VISIBLE CODE AND SET NEW EMAIL ---------------------
  useEffect(() => {
    const local = localStorage.getItem("email")
    if (local && CodeVerifi != "") {
      setvisibleCode(true)
      setEmail(local)
    }
  }, [visibleCode, setDataUser])

  //-----------------------HANDLE SEND------------------------------
  const handleSend = (e: FormEvent<HTMLButtonElement | HTMLFormElement>) => {
    e.preventDefault()
    if (!EmailRegex.test(email)) {
      handleFailLabel("Email không đúng định dạng", 2000, setMessageLabel, setVisilFailLabel)
      return
    }
    setLoading(true)
    setDisableEmail(true)
    VerifiEmailUser({ email: email.toLowerCase() })
      .then(res => {
        setCodeVerifi(res.data.codeverify)
        setLoading(false)
        setDisableEmail(false)
        setvisibleCode(true)
        handleCuccessLabel("Gửi mã thành công !", 2000, setMessageLabel, setvisibleCode)
        localStorage.setItem("email", email)
        setMessage("")
      })
      .catch(err => {
        handleFailLabel(err.response.data.message, 2000, setMessageLabel, setVisilFailLabel)
        setLoading(false)
        setCodeVerifi("")
        setMessage(err.response.data.message)
        setvisibleCode(false)
        setDisableEmail(false)
      })
  }
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)
  //-----------------------RENDER ELEMENT------------------------------
  return (
    <div className=''>
      {visibleCode ? (
        <VerifiCodeEmail
          setCodeVerifi={setCodeVerifi}
          setvisibleCode={setvisibleCode}
          CodeVerifi={CodeVerifi}
          email={email}
          oldEmail={dataUser?.email}
        />
      ) : (
        <div className='bg-white'>
          <h2 className='text-[19px]  px-6 py-4 border-b  vorder-slate-400 '>Thay đổi địa chỉ email</h2>
          <div className='py-4 px-2 flex '>
            <label htmlFor='' className='text-base font-normal'>
              - Địa chỉ email mới
            </label>
            <form onSubmit={handleSend} className='w-1/3 pl-6'>
              <div className=''>
                <EmailShop ChangeEmail={handleChange} email={email} disable={disable} />
              </div>
              <p className={` text-red-600 text-[11px] ${message ? "" : "py-1"}`}>{message}</p>
              <NextBtn handleNext={handleSend} loading={loading} />
            </form>
          </div>
        </div>
      )}
    </div>
  )
}

export default ChangeEmail
