import RemoveBtn from "@/components/button/RemoveBtn"
import React from "react"

const OptionOrderBox = () => {
  const handleRemove = () => {}
  return (
    <div className=''>
      <div className='flex text-[12.5px] py-4'>
        <p className='whitespace-wrap w-[10.111%] text-center'>1</p>
        <p className='whitespace-wrap w-[11.211%] text-center'>Dầu gội clear</p>
        <p className='text-green-500 w-[10.111%] text-center'>Chờ duyệt</p>
        <p className='whitespace-wrap w-[10.111%] text-center'>Siêu tốc</p>
        <p className='whitespace-wrap w-[13%] leading-4 text-[11.5px] text-left'>Võ minh trí</p>
        <p className='whitespace-wrap w-[11.5%] leading-4 text-[11.5px] text-left'>Không được làm vỡ</p>
        <p className='whitespace-wrap w-[10.111%] text-center'>1</p>
        <p className='whitespace-wrap w-[9.111%] text-center'>Trực tiếp</p>
        <button className='w-[11.111%] text-[13px] pb-3 pr-7 hover:text-blue-500 hover:underline'>Xóa</button>
      </div>
    </div>
  )
}

export default OptionOrderBox
