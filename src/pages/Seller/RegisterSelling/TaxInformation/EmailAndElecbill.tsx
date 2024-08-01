import InputCustom from "@/components/Input/InputCustom"
import { useState } from "react"

const EmailAndElecbill = () => {
  const [email, setEmail] = useState<string>("")
  const ChangeEmail = (value: string) => setEmail(value)
  return (
    <nav className='flex  py-2'>
      <div className='flex items-center mr-4 whitespace-nowrap w-[11rem] justify-end text-[13.5px]'>
        <p className='text-lg text-red-500'>*</p>
        Email và hóa đơn điện tử
      </div>
      <div className='w-1/2'>
        <InputCustom placeHolder='Email..' changeValue={ChangeEmail} value={email} />
      </div>
    </nav>
  )
}

export default EmailAndElecbill
