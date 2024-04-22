import { AddMemberIcon, LoadingIcon } from "..//..//..//images/centerIcons"
import RouteSeller from "./RouteSeller"
import { Outlet, useParams } from "react-router-dom"
import SaveShopBtn from "..//..//..//components/button/SaveShopBtn"
import NextBtn from "..//..//..//components/button/NextBtn"
import { FC, useEffect, useState } from "react"
import { useMyContext } from "..//..//..//context/context"
import { ContainLanguages } from "..//..//..//languages/Languages"
import { languageType } from "..//..//..//typescript/languageType"
import CuccessFullLabel from "..//..//..//components/Label/CuccessFullLabel"
import { FirstPageSellingKeyTypes } from "../../../typescript/RegisterSellingTypes"

const RegisterSelling: FC = () => {
  const { lang } = useParams()
  const CuccessFullAddress = "Cập nhật địa chỉ thành công"
  const FailureText = "Mã xác minh số điện thoại sai"
  const { dataUser, visibleLabel, language, setLanguage, setLangCode } = useMyContext()
  const [verifyCode, setverifyCode] = useState<string>("")
  const [Seller, setSeller] = useState<any>(null)
  const [checkOtpResult, setCheckOtpResult] = useState<boolean>(false)
  const [email, setEmail] = useState<string>(dataUser?.email || "")
  const [nameShopInput, setNameShopInput] = useState<string>(dataUser?.userName || "")
  const [phoneNumber, setPhoneNumber] = useState<number>(0)
  console.log(nameShopInput)
  useEffect(() => {
    if (lang && ContainLanguages.hasOwnProperty(lang)) {
      setLanguage(ContainLanguages[lang] as languageType)
      setLangCode(lang)
    }
  }, [setLanguage, setLangCode])
  const Portalbody = () => {
    if (!language && !nameShopInput) {
      return (
        <div className='text-4xl h-[100vh] flex items-center justify-center text-blue-400 shadow w-full uppercase'>
          {LoadingIcon}
        </div>
      )
    } else {
      return <Outlet context={{ FirstPageSellingKey: FirstPageSellingKey }} />
    }
  }
  // handle next
  const handleNext = async () => {
    try {
      // check code is corrected?
      if (!verifyCode) return
      Seller.confirm(verifyCode)
        .then(() => setCheckOtpResult(true))
        .catch((err: any) => console.log(err))
      // next step
      console.log(nameShopInput, email, phoneNumber)
    } catch (err) {
      console.log(err)
    }
  }
  const FirstPageSellingKey: FirstPageSellingKeyTypes = {
    setSeller,
    setverifyCode,
    verifyCode,
    setPhoneNumber,
    phoneNumber,
    setEmail,
    email,
    setNameShopInput,
    nameShopInput,
  }
  const handleSaveInfor = () => {}

  return (
    <div className='mx-16 py-10  px-36'>
      <div className='shadow bg-white pb-4 rounded-sm '>
        <h2 className='py-6 border-b border-slate-200 text-slate-600 text-lg  px-10 flex items-center'>
          <p className='px-3 text-2xl '>{AddMemberIcon}</p>
          Đăng kí trở thành người bán
        </h2>
        <RouteSeller />
        {/* content */}
        {Portalbody()}
        {/* next */}
        <div className='flex items-center justify-end  mx-4'>
          <div className='px-6'>
            <SaveShopBtn handleSave={handleSaveInfor} />
          </div>
          <NextBtn handleNext={handleNext} />
        </div>
        {visibleLabel && <CuccessFullLabel text={CuccessFullAddress} />}
        {/* <FailureFullLabel text={FailureText} /> */}
        <div id='recaptcha-container'></div>
      </div>
    </div>
  )
}

export default RegisterSelling
