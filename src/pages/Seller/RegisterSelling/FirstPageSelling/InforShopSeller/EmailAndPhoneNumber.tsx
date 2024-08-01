import { FC } from "react"
import PhoneNumberInput from "@/components/Input/PhoneNumberInput"

import EmailShop from "@/components/Input/EmailShop"
import { Email_PhoneNum } from "@/typescript/SellingTypes"
import { useMyContext } from "@/context/context"

const EmailAndPhoneNumber: FC<Email_PhoneNum> = ({ ChangeEmail, email, ChangePhoneNumber, PhoneNumerBoolean, PhoneNumber }) => {
  const { dataUser } = useMyContext()
  return (
    <div className='w-full'>
      <nav className='flex items-center '>
        <div className='flex items-center mr-6 whitespace-nowrap w-[7.5rem] justify-end'>
          <p className='text-lg text-red-500'>*</p>Email
        </div>
        {dataUser?.email ? <p className='text-sm '>{dataUser.email}</p> : <EmailShop ChangeEmail={ChangeEmail} email={email} />}
      </nav>
      {/*Phone Number  */}
      <nav className='flex items-center py-4'>
        <div className='flex items-center mr-6 whitespace-nowrap  w-[7.5rem] justify-end'>
          <p className='text-lg text-red-500'>*</p>Số điện thoại
        </div>
        {dataUser?.phonenumber ? (
          <p className='text-sm '>{dataUser.phonenumber}</p>
        ) : (
          <PhoneNumberInput error={PhoneNumerBoolean} handleChangeNumber={ChangePhoneNumber} number={PhoneNumber} />
        )}
      </nav>
    </div>
  )
}

export default EmailAndPhoneNumber
