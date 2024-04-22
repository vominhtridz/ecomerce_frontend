import { ChangeEvent, FC, useEffect, useState } from "react"
import EmailShop from "../../../../../components/Input/EmailShop"
import SellPhoneNumber from "../../../../../components/Input/SellPhoneNumber"
import EmailValueDefault from "../../../../../components/Input/EmailValueDefault"
import { PhoneNumberRegex } from "../../../../../components/Regex"

interface EmailAndPhoneNumberTypes {
  PhoneNumerBoolean: boolean
  email: string
  checkVeriPhoneNum: boolean
  PhoneNumber: number
  ChangePhoneNumber: (e: ChangeEvent<HTMLInputElement>) => void
  ChangeEmail: (e: ChangeEvent<HTMLInputElement>) => void
}
const EmailAndPhoneNumber: FC<EmailAndPhoneNumberTypes> = ({
  ChangeEmail,
  email,
  checkVeriPhoneNum,
  ChangePhoneNumber,
  PhoneNumerBoolean,
  PhoneNumber,
}) => {
  const [emailDefault, setEmailDefault] = useState<string>("")

  const checkErrorNumber = PhoneNumberRegex.test(PhoneNumerBoolean.toString())
  // set default email..
  useEffect(() => {
    const BasicUser = JSON.parse(localStorage.getItem("basicUsers") || "")
    if (BasicUser) {
      setEmailDefault(BasicUser.email)
    }
  }, [])
  const GetPhoneNumerBox = () => {
    const PhoneNumberLocation = `+84${PhoneNumber}`
    if (checkVeriPhoneNum) return <label htmlFor=''>{PhoneNumberLocation}</label>
    else
      return (
        <div className=''>
          <div className='relative w-[26rem]'>
            <p className='absolute left-0 top-2  pr-1.5 border-r h-1/2  text-[13px] px-2'>+84</p>
            <SellPhoneNumber handleChangeNumber={ChangePhoneNumber} number={PhoneNumber} />
          </div>
          {PhoneNumerBoolean && !checkErrorNumber && (
            <span className='text-red-500 text-[13px]'>Số điện thoại is required</span>
          )}
        </div>
      )
  }
  return (
    <div className=''>
      <nav className='flex items-center py-4'>
        <div className='flex items-center mr-4 whitespace-nowrap w-[8rem] justify-end'>
          <p className='text-lg text-red-500'>*</p>Email
        </div>
        {emailDefault ? (
          <EmailValueDefault EmailDefault={emailDefault} />
        ) : (
          <EmailShop ChangeEmail={ChangeEmail} email={email} />
        )}
      </nav>
      {/*Phone Number  */}
      <nav className='flex items-center py-4'>
        <div className='flex items-center mr-4 whitespace-nowrap w-[8rem] justify-end'>
          <p className='text-lg text-red-500'>*</p>Số điện thoại
        </div>
        {GetPhoneNumerBox()}
      </nav>
    </div>
  )
}

export default EmailAndPhoneNumber
