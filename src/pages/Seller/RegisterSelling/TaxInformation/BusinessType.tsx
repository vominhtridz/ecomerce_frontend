import CusCheckBox from "@/components/Input/CusCheckBox"
import { BusinessTypes } from "@/typescript/SellingTypes"
import { ChangeEvent, useState } from "react"

const BusinessType = ({ setBusinType, BusinType }: BusinessTypes) => {
  const ChangeBusinType = (e: ChangeEvent<HTMLInputElement>) => setBusinType(e.target.value)
  return (
    <nav className='flex items-center py-2 '>
      <div className='flex items-center mr-4 whitespace-nowrap w-[11rem] justify-end text-[13.5px]'>
        <p className='text-lg text-red-500'>*</p>
        Loại hình kinh doanh
      </div>
      <div className='flex  items-center px-2 cursor-pointer'>
        <div className='cursor-pointer block'>
          <CusCheckBox
            id='individual'
            value='individual'
            name='radio_Group'
            changeValue={ChangeBusinType}
            check={BusinType == "individual"}
          ></CusCheckBox>
        </div>
        <label htmlFor='individual' className='select-none px-2 text-[12.5px]'>
          Cá nhân
        </label>
      </div>
      <div className='flex items-center px-2 cursor-pointer'>
        <CusCheckBox
          value='business'
          id='business'
          name='radio_Group'
          changeValue={ChangeBusinType}
          check={BusinType == "business"}
        ></CusCheckBox>
        <label htmlFor='business' className='select-none px-2 text-[12.5px]'>
          Hộ kinh doanh
        </label>
      </div>
      <div className='flex items-center px-2 cursor-pointer'>
        <CusCheckBox
          id='company'
          value='company'
          name='radio_Group'
          changeValue={ChangeBusinType}
          check={BusinType == "company"}
        ></CusCheckBox>
        <label htmlFor='company' className='select-none px-2 text-[12.5px]'>
          Công ty
        </label>
      </div>
    </nav>
  )
}

export default BusinessType
