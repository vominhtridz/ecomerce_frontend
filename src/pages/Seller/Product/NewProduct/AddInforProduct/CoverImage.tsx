import { ImgIcon } from "@/images/Svg/svgImage"
import React from "react"

const CoverImage = () => {
  return (
    <div className='flex items-center my-4 w-full'>
      <div className='flex items-center mr-4 text-sm whitespace-nowrap w-[160px] justify-end'>
        <p className='text-lg text-red-500'>*</p> Ảnh bìa
      </div>
      <div className=''>
        <label className='py-4 px-2 mx-2 w-20 h-20 flex flex-col justify-center items-center rounded-md border  border-dashed  hover:bg-green-50 hover:border-gray-400 cursor-pointer border-gray-300'>
          <p className='text-xl text-green-500 pb-1'>{ImgIcon}</p>
          <p className='text-green-600 text-[11px] leading-3 pl-0.5 select-none'> (0/1)</p>
        </label>
        <p className='text-slate-400 text-[11px] leading-3 pl-0.5 select-none'>
          Tải ảnh bìa từ ảnh 1:1 và ảnh sẽ được hiển thị trên trang tìm kiếm
        </p>
      </div>
    </div>
  )
}

export default CoverImage
