import InputCustom from "@/components/Input/InputCustom"
import { checkNumberRegex } from "@/components/Regex"
import { useState } from "react"

const FistAndLastName = ({ NameErr }: any) => {
  const [CCCDNum, setCCCDNum] = useState<string>("")
  const [numberLimit, setNumberLimit] = useState<number>(0)
  const ChangeFistAndLastName = (value: string) => {
    if (!checkNumberRegex.test(value)) {
      if (value == "") setCCCDNum("")
      return
    }
    if (value.length > 100) return
    setNumberLimit(value.length)
    setCCCDNum(value)
  }
  return (
    <nav className='flex  py-2'>
      <div className='flex pt-1 mr-4 whitespace-nowrap w-[11rem] justify-end text-[13.5px]'>
        <p className='text-lg text-red-500'>*</p>
        Họ và tên
      </div>
      <div className='w-1/2 relative'>
        <InputCustom placeHolder='Nhập Họ và tên..' changeValue={ChangeFistAndLastName} value={CCCDNum} length={100} />
        <p className='text-[13.5px] text-slate-600 absolute top-2 right-2'>{numberLimit}/100</p>
        {NameErr && <p className='text-[11px] text-red-500'>Vui lòng nhập số CCCD chính xác</p>}
        <p className='text-[11px] text-slate-500'>Nhập tên theo CCCD/CMND/Hộ chiếu</p>
      </div>
    </nav>
  )
}

export default FistAndLastName
