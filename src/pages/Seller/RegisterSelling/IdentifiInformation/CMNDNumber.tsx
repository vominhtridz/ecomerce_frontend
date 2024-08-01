import InputCustom from "@/components/Input/InputCustom"
import { checkNumberRegex } from "@/components/Regex"
import { useState } from "react"

const CMNDNumber = ({ CMNDErr }: any) => {
  const [CMNDNum, setCMNDNum] = useState<string>("")
  const [numberLimit, setNumberLimit] = useState<number>(0)
  const ChangeCMNDNumber = (value: string) => {
    if (!checkNumberRegex.test(value)) {
      if (value == "") setCMNDNum("")
      return
    }
    if (value.length > 12) return
    setNumberLimit(value.length)
    setCMNDNum(value)
  }
  return (
    <nav className='flex  py-2'>
      <div className='flex pt-1 mr-4  w-[11rem] justify-end text-[13.5px]'>
        <p className='text-lg text-red-500'>*</p>
        Số Chứng minh nhân dân (CMND)
      </div>
      <div className='w-1/2 relative'>
        <InputCustom placeHolder='Nhập CMND..' changeValue={ChangeCMNDNumber} value={CMNDNum} length={12} />
        <p className='text-[13.5px] text-slate-600 absolute top-2 right-2'>{numberLimit}/12</p>
        {CMNDErr && <p className='text-[11px] text-red-500'>Vui lòng nhập số CCCD chính xác</p>}
      </div>
    </nav>
  )
}

export default CMNDNumber
