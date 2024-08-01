import InputCustom from "@/components/Input/InputCustom"
import React, { useState } from "react"
const productCategories = [
  "Quần áo",
  "Giày dép",
  "Túi xách",
  "Trang sức",
  "Đồng hồ",
  "Mỹ phẩm",
  "Thực phẩm và đồ uống",
  "Đồ gia dụng",
  "Điện tử",
  "Đồ chơi",
  "Sách và văn phòng phẩm",
  "Đồ dùng cho thú cưng",
  "Phụ kiện thời trang",
  "Đồ điện gia dụng",
  "Xe đạp và phương tiện di chuyển",
  "Đồ trang trí nội thất",
  "Đồ dùng ngoài trời",
  "Thiết bị y tế",
  "Thiết bị công nghệ",
  "Phần mềm và ứng dụng",
  "Dịch vụ và trải nghiệm",
  "Quà lưu niệm",
  "Đồ thể thao và dã ngoại",
  "Vật liệu xây dựng và nội thất",
]

const Industry = () => {
  const [NameIndistry, setNameIndistry] = useState<string>("")
  const ChangeNameIndistry = (e: string) => setNameIndistry(e)

  const getOptions = productCategories.map((option, index) => (
    <option value={option} key={index} className=''>
      {option}
    </option>
  ))
  return (
    <div className='flex items-center'>
      <div className='flex items-center my-4 w-full '>
        <div className='flex items-center mr-6 text-sm whitespace-nowrap w-[10rem] justify-end'>
          <p className='text-lg text-red-500'>*</p> Loại hàng hóa
        </div>
        <select
          defaultValue='Quần áo'
          className='outline-none border text-sm   border-gray-300 px-2 py-0.5 rounded-sm '
          onChange={e => ChangeNameIndistry(e.target.value)}
        >
          {getOptions}
        </select>
      </div>
      <div className='flex items-center my-4 w-full '>
        <div className='flex items-center mr-6 text-sm whitespace-nowrap w-[10rem] justify-end'>
          <p className='text-lg text-red-500'>*</p> Phân loại
        </div>
        <select
          defaultValue='Quần áo'
          className='outline-none border text-sm   border-gray-300 px-2 py-0.5 rounded-sm '
          onChange={e => ChangeNameIndistry(e.target.value)}
        >
          {getOptions}
        </select>
      </div>
    </div>
  )
}

export default Industry
