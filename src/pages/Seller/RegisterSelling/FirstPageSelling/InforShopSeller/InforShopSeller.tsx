import { ChangeEvent, useEffect, useState } from "react"
import { useMyContext } from "../../../../../context/context"
import AddInforShopSeller from "./AddInforShopSeller"

import "firebase/auth"
import { auth } from "../../../../../Firebase/Firebase"
import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth"
import { useOutletContext } from "react-router-dom"
import { FirstPageSellingKeyTypes } from "..//..//..//..//..//typescript/RegisterSellingTypes"

const InforShopSeller = () => {
  const { setShopAddress } = useMyContext()
  const FirstPageSellingKey: FirstPageSellingKeyTypes = useOutletContext()
  const [sendingTime, setSendingTime] = useState<number>(60)
  const [timeBoolean, setTimeBoolean] = useState<boolean>(false)
  const [PhoneNumerBoolean, setPhoneNumerBoolean] = useState<boolean>(false)
  const [checkVeriPhoneNum, setCheckVeriPhoneNum] = useState<boolean>(false)
  const setPhoneNumber = FirstPageSellingKey.setPhoneNumber
  const phoneNumber = FirstPageSellingKey.phoneNumber
  const verifyCode = FirstPageSellingKey.verifyCode
  const setverifyCode = FirstPageSellingKey.setverifyCode
  const setSeller = FirstPageSellingKey.setSeller
  const setEmail = FirstPageSellingKey.setEmail
  const email = FirstPageSellingKey.email
  const setNameShopInput = FirstPageSellingKey.setNameShopInput
  const nameShopInput = FirstPageSellingKey.nameShopInput

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
  useEffect(() => {}, [setNameShopInput])
  console.log(nameShopInput)
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
  // handle Fixed Seller Address
  const handleFixedAddress = () => setShopAddress(true)

  // Change Name Seller
  const handleChangeName = (e: ChangeEvent<HTMLInputElement>) => {
    const ShopInputLeng = e.target.value.length
    if (ShopInputLeng <= 30) {
      setNameShopInput(e.target.value)
    }
  }

  // handle Show Address box
  const handleChangeAdress = () => setShopAddress(true)
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
    </div>
  )
}

export default InforShopSeller
