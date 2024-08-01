import InputCustom from "@/components/Input/InputCustom"
import CusTomBtn from "@/components/button/CustomBtn"
import { useState } from "react"
import OrderBox from "./OrderBox"
import OptionOrderBox from "./ConfirmOption"

const WaitForDelivery = () => {
  const path = window.location.pathname
  const currentPath = path.slice(path.lastIndexOf("/"))
  console.log()
  const [Component, setComponent] = useState<Comment | null>()
  const [value, setValue] = useState<string>("")
  const HandlePrint = () => {}
  const HistoryPrintPort = () => {}
  const HandleAllow = () => {}
  const ChangeValue = (value: string) => setValue(value)
  return (
    <div className=''>
      <div className='text-sm flex whitespace-nowrap my-4 items-center w-full'>
        <label htmlFor='' className='text-[14px] mr-6'>
          Tìm kiếm
        </label>
        <div className='w-1/2'>
          <InputCustom changeValue={ChangeValue} value={value} placeHolder='Nhập mã đơn hàng..' />
        </div>
        <CusTomBtn text='Duyệt tất cả' handleClick={HandleAllow} />
      </div>
      <OrderBox />
      <OptionOrderBox />
    </div>
  )
}

export default WaitForDelivery
