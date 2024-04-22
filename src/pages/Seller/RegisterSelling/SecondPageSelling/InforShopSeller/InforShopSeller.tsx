import { ChangeEvent, useEffect, useState } from "react"
import SaveShopBtn from "../../../../../components/button/SaveShopBtn"
import NextBtn from "../../../../../components/button/NextBtn"
import { useMyContext } from "../../../../../context/context"
import CuccessFullLabel from "../../../../../components/Label/CuccessFullLabel"
import AddInforShopSeller from "./AddInforShopSeller"

import "firebase/auth"
import { auth } from "../../../../../Firebase/Firebase"
import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth"

const InforShopSeller = () => {
  const CuccessFullAddress = "Cập nhật địa chỉ thành công"
  const FailureText = "Mã xác minh số điện thoại sai"
  const { setShopAddress, setvisibleLabel, visibleLabel, dataUser } = useMyContext()
  const [verifyCode, setverifyCode] = useState<string>("")
  const [email, setEmail] = useState<string>("")
  const [nameShopInput, setNameShopInput] = useState<string>(dataUser?.userName || "")
  const [phoneNumber, setPhoneNumber] = useState<number>(0)
  const [sendingTime, setSendingTime] = useState<number>(60)
  const [timeBoolean, setTimeBoolean] = useState<boolean>(false)
  const [checkOtpResult, setCheckOtpResult] = useState<boolean>(false)
  const [Seller, setSeller] = useState<any>(null)
  const [PhoneNumerBoolean, setPhoneNumerBoolean] = useState<boolean>(false)
  const [checkVeriPhoneNum, setCheckVeriPhoneNum] = useState<boolean>(false)
  // set time sending Code message
  useEffect(() => {
    if (PhoneNumerBoolean || !timeBoolean || sendingTime == 0) {
      return
    }
    const SetTime = setTimeout(() => {
      setSendingTime(prev => prev - 1)
    }, 1000)
    return () => clearTimeout(SetTime)
  }, [sendingTime, PhoneNumerBoolean, timeBoolean])

  useEffect(() => {
    // check seller phone number is verificationed yet
    const booleanLocal = localStorage.getItem("sellerPhoneNum")
    if (booleanLocal) {
      const CheckPhoneNum = JSON.parse(booleanLocal)
      setCheckVeriPhoneNum(CheckPhoneNum)
    }
  }, [checkOtpResult])
  // handle Fixed Seller Address
  const handleFixedAddress = () => {
    setShopAddress(true)
  }
  // Change Name Seller
  const handleChangeName = (e: ChangeEvent<HTMLInputElement>) => {
    const ShopInputLeng = e.target.value.length
    if (ShopInputLeng <= 30) {
      setNameShopInput(e.target.value)
    }
  }

  // handle Show Address box
  const handleChangeAdress = () => {
    setShopAddress(true)
  }
  // handle Navigation next page
  const handleNext = async () => {
    try {
      if (!verifyCode) return

      Seller.confirm(verifyCode)
        .then(() => setCheckOtpResult(true))
        .catch((err: any) => console.log(err))
      if (checkOtpResult) localStorage.setItem("sellerPhoneNum", JSON.stringify(true))
      // next step
    } catch (err) {
      console.log(err)
    }
  }

  // handleSaveInfor
  const handleSaveInfor = () => {}
  // handleSend code verification Phone Number
  const handleSendCode = async () => {
    try {
      // check Phone number is correct?
      if (String(phoneNumber).length != 9 || phoneNumber == 0) {
        setPhoneNumerBoolean(true)
        return
      } else setPhoneNumerBoolean(false)
      // initialize recaptcha varible
      const recaptcha = new RecaptchaVerifier(auth, "recaptcha-container", {
        size: "invisible",
      })
      const confirmation = await signInWithPhoneNumber(auth, `+84${phoneNumber}`, recaptcha)
      setSeller(confirmation)
      setTimeBoolean(true)
      setSendingTime(60)
    } catch (error) {
      console.log("error:", error)
    }
  }

  // Change event handler
  const ChangeVerify = (e: ChangeEvent<HTMLInputElement>) => setverifyCode(e.target.value)
  const ChangeEmail = (e: ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)
  const ChangePhoneNumber = (e: ChangeEvent<HTMLInputElement>) => setPhoneNumber(parseInt(e.target.value))

  return (
    <div className='py-6 text-[14px] '>
      <AddInforShopSeller
        checkVeriPhoneNum={checkVeriPhoneNum}
        sendingTime={sendingTime}
        handleFixedAddress={handleFixedAddress}
        PhoneNumerBoolean={PhoneNumerBoolean}
        handleChangeAdress={handleChangeAdress}
        handleChangeName={handleChangeName}
        nameShopInput={nameShopInput}
        ChangeEmail={ChangeEmail}
        email={email}
        phoneNumber={phoneNumber}
        ChangePhoneNumber={ChangePhoneNumber}
        verifyCode={verifyCode}
        ChangeVerify={ChangeVerify}
        handleSend={handleSendCode}
      />
      {/* next */}
      <div className='flex items-center justify-end pt-6 mx-4'>
        <div className='px-6'>
          <SaveShopBtn handleSave={handleSaveInfor} />
        </div>
        <NextBtn handleNext={handleNext} />
      </div>
      {visibleLabel && <CuccessFullLabel text={CuccessFullAddress} />}
      {/* <FailureFullLabel text={FailureText} /> */}
      <div id='recaptcha-container'></div>
    </div>
  )
}

export default InforShopSeller
