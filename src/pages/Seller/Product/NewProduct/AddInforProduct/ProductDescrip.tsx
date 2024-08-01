import InputCustom from "@/components/Input/InputCustom"
import { useState } from "react"
const OriginOptions = []
const ProductDescrip = () => {
  const [Descript, setDescript] = useState<string>("")
  const ChangeDescript = (e: string) => setDescript(e)

  return (
    <div className='w-full'>
      <div className='flex my-4 w-full'>
        <label htmlFor='descript' className='flex items-center mr-6 text-sm whitespace-nowrap w-[12.5rem] justify-end'>
          <p className='text-lg text-red-500'>*</p>Mô tả chi tiết
        </label>
        <div className='w-full'>
          <textarea
            id='customTextArea'
            className='border  border-gray-300 text-[12px] px-2 py-2 rounded-md outline-blue-500 w-full'
            rows={7}
            value={Descript}
            onChange={e => ChangeDescript(e.target.value)}
            cols={50}
          ></textarea>
          {/* error */}
          <p className='text-[10px] text-red-500'>Mô tả sản phẩm của bạn quá ngắn. Vui lòng nhập ít nhất 70 kí tự.</p>
        </div>
      </div>
    </div>
  )
}

export default ProductDescrip
