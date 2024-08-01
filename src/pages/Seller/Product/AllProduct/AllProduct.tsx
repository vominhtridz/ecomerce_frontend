import CusTomBtn from "@/components/button/CustomBtn"

import { useState } from "react"
import OrderBox from "./OrderBox"
import InputCustom from "@/components/Input/InputCustom"
import OptionOrderBox from "./OptionOrderBox"
import { Link } from "react-router-dom"
const options = ["Tên sản phẩm", "Mã sản phẩm", "Mã đơn hàng"]
const AllProduct = () => {
  const path = window.location.pathname
  const currentPath = path.slice(path.lastIndexOf("/"))
  console.log()
  const [Component, setComponent] = useState<Comment | null>()
  const [value, setValue] = useState<string>("")
  const HandlePrint = () => {}
  const HistoryPrintPort = () => {}
  const ChangeValue = (value: string) => setValue(value)
  const getOption = options.map((option, index) => (
    <option className='' key={index}>
      {option}
    </option>
  ))
  return (
    <div className='bg-white shadow p-4 border border-gray-100'>
      <div className='flex items-center justify-between'>
        <h2 className='uppercase text-xl  text-gray-700'>Tất cả Sản Phẩm</h2>
        <Link
          to='/seller/product/new'
          className='px-6 py-2 hover:bg-green-600 hover:border-gray-300 rounded-sm bg-green-500 text-white shadow border border-green-200 text-sm'
        >
          Tạo sản phẩm mới
        </Link>
      </div>
      <div className='text-sm flex whitespace-nowrap my-4 items-center w-full'>
        <label htmlFor='' className='text-[14px] mr-6'>
          Tìm kiếm
        </label>
        <select className='border border-gray-200 rounded-sm  mr-4 outline-none px-2 py-1.5'>{getOption}</select>
        <div className='w-1/2'>
          <InputCustom changeValue={ChangeValue} value={value} placeHolder='Nhập mã đơn hàng..' />
        </div>
      </div>
      <OrderBox />
      <OptionOrderBox />
    </div>
  )
}

export default AllProduct
