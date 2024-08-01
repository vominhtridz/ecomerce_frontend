import InputCustom from "@/components/Input/InputCustom"
import { useState } from "react"

const TaxCodeNumber = () => {
  const [code, setCode] = useState<string>("")
  const ChangeCode = (value: string) => setCode(value)
  return (
    <nav className='flex  py-2'>
      <div className='flex pt-1 mr-4 whitespace-nowrap w-[11rem] justify-end text-[13.5px]'>
        <p className='text-lg text-red-500'>*</p>
        Mã số thuế
      </div>
      <div className='w-1/2 '>
        <InputCustom placeHolder='Mã số thuế...' changeValue={ChangeCode} value={code} />
        <p className='text-[11px] text-slate-700 leading-3 pl-1  '>
          Theo Quy định về Thương mại điện tử Việt Nam (Nghị định 52/2013/ND-CP), Người Bán phải cung cấp thông tin Mã số thuế cho sàn
          Thương mại điện tử.
        </p>
      </div>
    </nav>
  )
}

export default TaxCodeNumber
