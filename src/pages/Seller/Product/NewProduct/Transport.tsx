import InputCustom from "@/components/Input/InputCustom"
import React, { useState } from "react"

const Transport = () => {
  const [WareStore, setWareStore] = useState<string>("")
  const [Size, setSize] = useState<string>("")
  const ChangeWareStore = (value: string) => setWareStore(value)
  const ChangeSize = (value: string) => setSize(value)

  return (
    <div className='bg-white mx-4 pr-8 pl-2 w-full my-2  rounded-md shadow border border-gray-100'>
      <h2 className='p-4 text-lg font-semibold'>Vận chuyển</h2>
      <div className='flex items-center my-4'>
        <div className='flex  mr-4 text-sm  w-[10rem] justify-end'>
          <p className='text-lg text-red-500 pr-1'>*</p> Cân nặng (đã đóng gói)
        </div>
        <div className='w-1/5'>
          <InputCustom changeValue={ChangeWareStore} value={WareStore} placeHolder='Cân nặng kg..' />
        </div>
      </div>
      <div className='flex items-center my-4'>
        <div className='flex  mr-4 text-sm  w-[10rem] justify-end'>
          <p className='text-lg text-red-500 pr-1'>*</p> Kích thước(đã đóng gói)
        </div>
        <div className='w-1/5'>
          <InputCustom changeValue={ChangeSize} value={Size} placeHolder='Kích thước cm..' />
        </div>
      </div>
    </div>
  )
}

export default Transport
