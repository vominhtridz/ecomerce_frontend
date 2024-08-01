import CusCheckBox from "@/components/Input/CusCheckBox"
import { ChangeEvent, useState } from "react"

const OptionSelectImg = () => {
  const [option, setOption] = useState<string>("img1_1")
  const ChangeChecked = (e: ChangeEvent<HTMLInputElement>) => setOption(e.target.value)
  return (
    <nav className='flex items-center py-4'>
      <div className='flex items-center mr-4 text-sm whitespace-nowrap w-[10rem] justify-end'>
        <p className='text-lg text-red-500'>*</p> Hình ảnh sản phẩm
      </div>
      <div className='flex items-center px-2 text-[13px]'>
        <CusCheckBox id='img1_1' value='img1_1' check={option == "img1_1"} name='imgGroup' changeValue={ChangeChecked} />
        <label htmlFor='img1_1' className='ml-2 select-none'>
          Hình ảnh tỷ lệ 1:1
        </label>
      </div>
    </nav>
  )
}

export default OptionSelectImg
