import { ImgIcon } from "@/images/Svg/svgImage"
import { Eyeicon, RemoveIcon } from "@/images/centerIcons"
import React, { ChangeEvent, useState } from "react"

const AddProductImage = () => {
  const [file, setFile] = useState<File[] | null>([])
  const [showImg, setShowImg] = useState<boolean>(false)
  const [Img, setImg] = useState<string>("")
  const ChangeFile = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const selectedFile = e.target.files[0]
      setFile(selectedFile)
      setImg(URL.createObjectURL(selectedFile))
    }
  }
  const handleRemove = () => {
    setFile(null)
    setImg("")
  }
  const handleSeeImg = () => setShowImg(true)
  const handleDisDeletion = () => setShowImg(false)

  return (
    <div className='flex flex-col pl-44'>
      <label className='py-4 px-2 mx-2 w-20 h-20 flex flex-col justify-center items-center rounded-md border  border-dashed  hover:bg-green-50 hover:border-gray-400 cursor-pointer border-gray-300'>
        <p className='text-xl text-green-500 mr-2'>{ImgIcon}</p>
        <p className='text-green-600 text-[11px] leading-3 pl-0.5 select-none'>Thêm hình ảnh (0/9)</p>
        <input
          className='hidden'
          type='file'
          onChange={ChangeFile}
          accept='.jpg, .jpeg, .png, .gif' // Example: Limit file types to images
        />
      </label>
    </div>
  )
}

export default AddProductImage
