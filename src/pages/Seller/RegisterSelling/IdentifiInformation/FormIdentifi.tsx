import CusCheckBox from "@/components/Input/CusCheckBox"
import { FormIdentifiType } from "@/typescript/SellingTypes"
import { ChangeEvent, useState } from "react"

const FormIdentifi = ({ setFormIdentifi, formIdentifi }: FormIdentifiType) => {
  const ChangeFormIdentifi = (e: ChangeEvent<HTMLInputElement>) => setFormIdentifi(e.target.value)
  return (
    <nav className='flex items-center py-2 '>
      <div className='flex items-center mr-4 whitespace-nowrap w-[11rem] justify-end text-[13.5px]'>
        <p className='text-lg text-red-500'>*</p>
        Loại hình kinh doanh
      </div>
      <div className='flex  items-center px-2 cursor-pointer'>
        <div className='cursor-pointer block'>
          <CusCheckBox
            id='CCCD'
            value='CCCD'
            name='radio_Group'
            changeValue={ChangeFormIdentifi}
            check={formIdentifi == "CCCD"}
          ></CusCheckBox>
        </div>
        <label htmlFor='CCCD' className='select-none px-2 text-[12.5px]'>
          Căn cước công dân (CCCD)
        </label>
      </div>
      <div className='flex items-center px-2 cursor-pointer'>
        <CusCheckBox
          value='CMND'
          id='CMND'
          name='radio_Group'
          changeValue={ChangeFormIdentifi}
          check={formIdentifi == "CMND"}
        ></CusCheckBox>
        <label htmlFor='CMND' className='select-none px-2 text-[12.5px]'>
          Chứng minh nhân dân (CMND)
        </label>
      </div>
      <div className='flex items-center px-2 cursor-pointer'>
        <CusCheckBox
          id='passport'
          value='passport'
          name='radio_Group'
          changeValue={ChangeFormIdentifi}
          check={formIdentifi == "passport"}
        ></CusCheckBox>
        <label htmlFor='passport' className='select-none px-2 text-[12.5px]'>
          Hộ chiếu
        </label>
      </div>
    </nav>
  )
}

export default FormIdentifi
