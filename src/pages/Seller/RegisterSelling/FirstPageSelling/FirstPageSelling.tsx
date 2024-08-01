import { useEffect, useState } from "react"
import VerifyPhoneNumber from "@/components/Input/VerifyPhoneNumber"
import EmailAndPhoneNumber from "./InforShopSeller/EmailAndPhoneNumber"
import SendBtn from "@/components/button/SendBtn"
import ResendLater from "@/components/button/ResendLater"
import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth"
import { auth } from "@/Firebase/Firebase"
import NameAndAddress from "./InforShopSeller/NameAndAddress"
import NextBtn from "@/components/button/NextBtn"
import { useMyContext } from "@/context/context"
import { checkNumberRegex } from "@/components/Regex"
import { StoreSeller } from "@/apis/apis"
import { handleCuccessLabel, handleFailLabel } from "@/components/func/funcVisiLabel"
import { useNavigate } from "react-router-dom"
const FirstPageSelling = () => {
  const { Seller, dataUser, setMessageLabel, setVisiCuccessLabel, setVisilFailLabel } = useMyContext()
  const navigate = useNavigate()
  const [sendingTime, setSendingTime] = useState<number>(60)
  const [timeBoolean, setTimeBoolean] = useState<boolean>(false)
  const [phonenumErr, setPhonenumErr] = useState<boolean>(false)
  const [loading, setLoading] = useState<boolean>(false)
  const [verifyCode, setverifyCode] = useState<string>("")
  const [email, setEmail] = useState<string>("")
  const [nameShopInput, setNameShopInput] = useState<string>(localStorage.getItem("Seller") || "")
  const [NameShopErr, setNameShopErr] = useState<boolean>(false)
  const [phoneNumber, setPhoneNumber] = useState<string>("")
  const handleNext = async () => {
    if (!nameShopInput) {
      setNameShopErr(true)
      return
    }
    let options = {
      SellerName: nameShopInput,
      userid: dataUser?.userid,
      email: dataUser?.email,
      phoneNumber: dataUser?.phonenumber,
    }
    console.log(options)
    StoreSeller(options)
      .then(res => {
        const logCuccess = res ? res.data.message : "Lưu thành công"
        setLoading(false)
        localStorage.setItem("SellerName", nameShopInput)
        console.log(res)
        navigate("/seller/register/portal/200")
        handleCuccessLabel(logCuccess, 2000, setMessageLabel, setVisiCuccessLabel)
      })
      .catch(err => {
        const logErr = err ? err.response.data.message : "lỗi hệ thống"
        setLoading(false)
        handleFailLabel(logErr, 2000, setMessageLabel, setVisilFailLabel)
      })
  }

  // set time sending Code message
  useEffect(() => {
    if (phonenumErr || !timeBoolean || sendingTime == 0) {
      return
    }
    const SetTime = setTimeout(() => {
      setSendingTime(prev => prev - 1)
    }, 1000)
    return () => clearTimeout(SetTime)
  }, [sendingTime, phonenumErr, timeBoolean])
  useEffect(() => {}, [setNameShopInput])
  // handleSend code verification Phone Number
  const handleSendCode = async () => {
    try {
      // check Phone number is correct?
      if (String(phoneNumber).length != 9 || phoneNumber == "") {
        setPhonenumErr(true)
        return
      } else setPhonenumErr(false)
      // initialize recaptcha varible
      const recaptcha = new RecaptchaVerifier(auth, "recaptcha-container", {
        size: "invisible",
      })
      const confirmation = await signInWithPhoneNumber(auth, `+84${phoneNumber}`, recaptcha)
      setTimeBoolean(true)
      setSendingTime(60)
    } catch (error) {
      console.log("error:", error)
    }
  }
  const handleChangeName = (value: string) => {
    setNameShopErr(false)
    if (value.length <= 30) {
      setNameShopInput(value)
    }
  }
  //----------------------CHANGE VALUE-------------------------
  const ChangeVerify = (value: string) => setverifyCode(value)
  const ChangeEmail = (value: string) => setEmail(value)
  const ChangePhoneNumber = (value: string) => {
    if (value.length > 10) return
    if (!checkNumberRegex.test(value)) {
      if (value.length == 0) setPhoneNumber("")
      return
    }
    setPhoneNumber(value)
  }

  return (
    <div className='pt-4 text-[14px] '>
      <div className='pl-36 w-[60%]'>
        <NameAndAddress handleChangeName={handleChangeName} NameShopErr={NameShopErr} nameShopInput={nameShopInput} />
        {/*------------------------ EMAI _ PHONE NUMBER------------------------ */}
        <EmailAndPhoneNumber
          ChangeEmail={ChangeEmail}
          email={email}
          PhoneNumerBoolean={phonenumErr}
          PhoneNumber={phoneNumber}
          ChangePhoneNumber={ChangePhoneNumber}
        />
        {/* verify code */}
        {!dataUser?.phonenumber && (
          <div className='flex items-center '>
            <div className='px-6 ml-[6.8rem]'>
              <VerifyPhoneNumber verifyCode={verifyCode} ChangeVerify={ChangeVerify} />
            </div>

            <div className='flex items-center'>
              {sendingTime == 0 || sendingTime == 60 ? <SendBtn handleSend={handleSendCode} /> : <ResendLater time={sendingTime} />}
            </div>
          </div>
        )}
      </div>

      <div className='flex justify-end pr-6 pt-4'>
        <NextBtn handleNext={handleNext} loading={loading} />
      </div>
    </div>
  )
}

export default FirstPageSelling
