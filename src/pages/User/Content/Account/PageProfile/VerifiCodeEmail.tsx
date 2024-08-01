import { ChangeEmailUser } from "@/apis/apis"
import VerificationCode from "@/components/Input/User/VerificationCode"
import SendBtn from "@/components/button/SendBtn"
import { handleCuccessLabel, handleFailLabel } from "@/components/func/funcVisiLabel"
import { useMyContext } from "@/context/context"
import { ChangeEvent, FormEvent, useState } from "react"
import { useNavigate } from "react-router-dom"
interface VerifiCodeEmailType {
  CodeVerifi: string | undefined
  email: string
  oldEmail: string | undefined
  setCodeVerifi: (e: string) => void
  setvisibleCode: (e: boolean) => void
}
const VerifiCodeEmail = ({ CodeVerifi, email, oldEmail, setvisibleCode, setCodeVerifi }: VerifiCodeEmailType) => {
  const { setMessageLabel, setVisilFailLabel, langCode, setVisiCuccessLabel } = useMyContext()
  const navigate = useNavigate()
  const [loading, setLoading] = useState<boolean>(false)
  const [disable, setDisable] = useState<boolean>(false)
  const [code, setCode] = useState<string>("")
  //---------------HANDLE SEND--------------------------------
  const handleSend = (e: FormEvent<HTMLButtonElement | HTMLFormElement>) => {
    e.preventDefault()
    setDisable(true)
    setLoading(true)
    if (CodeVerifi == code) {
      setDisable(false)
      setLoading(false)
      ChangeEmailUser({ email: email.toLowerCase(), oldemail: oldEmail })
        .then(res => {
          setLoading(false)
          setvisibleCode(false)
          setCodeVerifi("")
          handleCuccessLabel(res.data.message, 3000, setMessageLabel, setVisiCuccessLabel)
          localStorage.removeItem("email")
          navigate(`/${langCode}/user/account/profile`)
        })
        .catch(err => {
          handleFailLabel(err.response.data.message, 3000, setMessageLabel, setVisilFailLabel)
          setLoading(false)
        })
    } else {
      setDisable(false)
      setLoading(false)
      handleFailLabel("mã xác thực không đúng", 3000, setMessageLabel, setVisilFailLabel)
    }
  }
  const changeCode = (e: ChangeEvent<HTMLInputElement>) => setCode(e.target.value)
  //---------------------------RENDER ELEMENT--------------------------------

  return (
    <div className='bg-white'>
      <h2 className='text-[19px]  px-6 py-4 border-b  vorder-slate-400 '>Xác Thực email</h2>
      <div className='py-4 px-2 flex '>
        <label htmlFor='' className='text-base font-normal pt-2.5'>
          - Mã xác thực
        </label>
        <form onSubmit={handleSend} className='w-1/3 pl-6'>
          <div className=''>
            <VerificationCode code={code} ChangeCode={changeCode} disable={disable} />
          </div>
          <p className='py-1'></p>
          <SendBtn handleSend={handleSend} loading={loading} />
        </form>
      </div>
    </div>
  )
}

export default VerifiCodeEmail
