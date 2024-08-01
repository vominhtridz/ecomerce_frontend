import InputCustom from "@/components/Input/InputCustom"
import { useState } from "react"

const AddInforPrice = () => {
  const [price, setPrice] = useState<string>("")
  const [WareStore, setWareStore] = useState<string>("")
  const ChangePrice = (value: string) => setPrice(value)
  const ChangeWareStore = (value: string) => setWareStore(value)
  return (
    <div className='bg-white mx-4 pr-8 pl-2 w-full my-4  rounded-md shadow border border-gray-200'>
      <h2 className='p-4 text-lg font-semibold'>Giá hàng hóa</h2>
      <div className='flex items-center w-full'>
        <div className='flex  mr-4 text-sm whitespace-nowrap w-[10rem] justify-end'>
          <p className='text-lg text-red-500'>*</p> Giá từ
        </div>
        <div className='w-1/6'>
          <InputCustom changeValue={ChangePrice} value={price} placeHolder='Nhập giá từ..' length={9} />
          <p className='whitespace-nowrap text-[11px] text-red-500'>Lưu ý tối đa là 120.000.000</p>
        </div>
        <div className='flex  mr-4 text-sm whitespace-nowrap w-[10rem] justify-end'>
          <p className='text-lg text-red-500'>*</p> Đến
        </div>
        <div className='w-1/6'>
          <InputCustom changeValue={ChangePrice} value={price} placeHolder='Nhập giá từ..' length={9} />
          <p className='whitespace-nowrap text-[11px] text-red-500'>Lưu ý tối đa là 120.000.000</p>
        </div>
      </div>
      <div className='flex items-center my-4'>
        <div className='flex items-center mr-4 text-sm whitespace-nowrap w-[10rem] justify-end'>
          <p className='text-lg text-red-500'>*</p> Số lượng hàng có sẵn
        </div>
        <div className='w-1/6'>
          <InputCustom changeValue={ChangeWareStore} value={WareStore} placeHolder='Nhập kho hàng..' />
        </div>
      </div>
    </div>
  )
}

export default AddInforPrice
