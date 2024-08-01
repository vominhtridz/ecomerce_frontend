import InputCustom from "@/components/Input/InputCustom"
import { useState } from "react"

const NameCompany = () => {
  const [nameCOMP, setNameCOMP] = useState<string>("")
  const ChangeName = (value: string) => setNameCOMP(value)
  return (
    <nav className='flex  py-2'>
      <div className='flex pt-1 mr-4 whitespace-nowrap w-[11rem] justify-end text-[13.5px]'>
        <p className='text-lg text-red-500'>*</p>
        Tên công ty
      </div>
      <div className='w-1/2'>
        <InputCustom placeHolder='Nhập Tên công ty...' changeValue={ChangeName} value={nameCOMP} />
        <p className='text-[11px] text-slate-700 leading-3 pl-1  '>
          Vui lòng điền đầy đủ tên công ty, không viết tắt. Ví dụ: "Công ty ABC"
        </p>
      </div>
    </nav>
  )
}

export default NameCompany
