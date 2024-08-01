import InputCustom from "@/components/Input/InputCustom"
import { checkNumberRegex } from "@/components/Regex"
import { useState } from "react"

const PassPortNumber = ({ PassPortNumErr }: any) => {
  const [PassPortNum, setPassPortNum] = useState<string>("")
  const [numberLimit, setNumberLimit] = useState<number>(0)
  const ChangePassPortNumber = (value: string) => {
    if (!checkNumberRegex.test(value)) {
      if (value == "") setPassPortNum("")
      return
    }
    if (value.length > 20) return
    setNumberLimit(value.length)
    setPassPortNum(value)
  }
  return (
    <nav className='flex  py-2'>
      <div className='flex pt-1 mr-4  w-[11rem] justify-end text-[13.5px]'>
        <p className='text-lg text-red-500'>*</p>
        Số hộ chiếu
      </div>
      <div className='w-1/2 relative'>
        <InputCustom placeHolder='Nhập số hộ chiếu..' changeValue={ChangePassPortNumber} value={PassPortNum} length={20} />
        <p className='text-[13.5px] text-slate-600 absolute top-2 right-2'>{numberLimit}/20</p>
        {PassPortNumErr && <p className='text-[11px] text-red-500'>Vui lòng nhập số CCCD chính xác</p>}
      </div>
    </nav>
  )
}

export default PassPortNumber
