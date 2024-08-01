import InputCustom from "@/components/Input/InputCustom"
import React, { useState } from "react"
const OriginOptions = [
  "Việt Nam",
  "Hàn Quốc",
  "Nhật Bản",
  "Trung Quốc",
  "Mỹ",
  "Anh",
  "Pháp",
  "Đức",
  "Ý",
  "Tây Ban Nha",
  "Bồ Đào Nha",
  "Hà Lan",
  "Thụy Điển",
  "Na Uy",
  "Phần Lan",
  "Đan Mạch",
  "Thụy Sĩ",
  "Áo",
  "Bỉ",
  "Luxembourg",
  "Ba Lan",
  "Séc",
  "Slovakia",
  "Hungary",
  "Romania",
  "Bulgaria",
  "Hy Lạp",
  "Thổ Nhĩ Kỳ",
  "Nga",
  "Úc",
  "New Zealand",
  "Canada",
  "Mexico",
  "Brazil",
  "Argentina",
  "Chile",
  "Colombia",
  "Peru",
  "Venezuela",
  "Ecuador",
  "Ai Cập",
  "Nam Phi",
  "Morocco",
  "Kenya",
  "Ghana",
  "Nigeria",
  "Ấn Độ",
  "Pakistan",
  "Bangladesh",
]

const NameProduct = () => {
  const [Name, setName] = useState<string>("")
  const ChangeName = (e: string) => setName(e)
  const [origin, setOrigin] = useState<string>("")
  const [guarantee, setGuarantee] = useState<string>("")
  const ChangeOrigin = (e: string) => setOrigin(e)
  const ChangeGuarantee = (e: string) => setGuarantee(e)
  const getOptionsOrigin = OriginOptions.map((option, index) => (
    <option value={option} key={index}>
      {option}
    </option>
  ))
  return (
    <div className='flex items-center'>
      <div className='flex items-center my-4 w-full '>
        <div className='flex items-center mr-6 text-sm whitespace-nowrap w-[20.5rem] justify-end'>
          <p className='text-lg text-red-500'>*</p> Tên sản phẩm
        </div>
        <InputCustom changeValue={ChangeName} value={Name} placeHolder='Tên sản phẩm' />
      </div>
      <div className='flex my-4 w-full pl-14  '>
        <label htmlFor='origin' className='flex items-center mr-6 text-sm whitespace-nowrap justify-end'>
          <p className='text-lg text-red-500'>*</p>Xuất sứ
        </label>
        <select
          defaultValue='Việt Nam'
          className='outline-none border text-sm border-gray-300 px-2 py-0.5 rounded-sm '
          onChange={e => ChangeOrigin(e.target.value)}
        >
          {getOptionsOrigin}
        </select>
      </div>
      <div className='flex my-4  pl-4'>
        <label htmlFor='origin' className='flex items-center mr-6 text-sm whitespace-nowrap  justify-end'>
          <p className='text-lg text-red-500'>*</p>Bảo hành
        </label>
        <select
          defaultValue='Việt Nam'
          className='outline-none border text-sm border-gray-300 px-2 py-0.5 rounded-sm '
          onChange={e => ChangeGuarantee(e.target.value)}
        >
          <option value='Không bảo hành'>Không bảo hành</option>
          <option value='Có bảo hành'>Có bảo hành</option>
        </select>
      </div>
    </div>
  )
}

export default NameProduct
