import { RemoveIcon } from "@/images/Svg/svgImage"
import { ChangeEvent, useState } from "react"

const ImgVerifi = ({ ImgCCCDErr }: any) => {
  const [file, setFile] = useState<File | null>(null)
  const [file2, setFile2] = useState<File | null>(null)
  const [Img, setImg] = useState<string>("")
  const [Img2, setImg2] = useState<string>("")
  const ChangeFile = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const selectedFile = e.target.files[0]
      setFile(selectedFile)
      setImg(URL.createObjectURL(selectedFile))
    }
  }
  const ChangeFile2 = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const selectedFile = e.target.files[0]
      setFile2(selectedFile)
      setImg2(URL.createObjectURL(selectedFile))
    }
  }
  const handleRemoveImg = () => {
    setFile(null)
    setImg("")
  }
  const handleRemoveImg2 = () => {
    setFile2(null)
    setImg2("")
  }
  return (
    <nav className='flex  py-2'>
      <div className='flex pt-1 mr-4  w-[11rem] justify-end text-[13.5px]'>
        <p className='text-lg text-red-500'>*</p>
        Hình chụp của thẻ CMND/CCCD/hộ chiếu
      </div>
      <div className='w-1/2 '>
        <div className='flex items-center h-[5rem]'>
          {/* --------- IF FILE IS NOT EXITS RENDER ADD FILE ELSE RENDER FILE------------------------- */}

          {!file && Img == "" ? (
            <label className='flex items-center text-2xl rounded-md h-full  text-slate-800 border  w-1/5 justify-center  cursor-pointer'>
              +
              <input
                className='hidden'
                type='file'
                onChange={ChangeFile}
                accept='.jpg, .jpeg, .png, .gif' // Example: Limit file types to images
              />
            </label>
          ) : (
            <div className='flex items-center relative text-2xl rounded-md h-full  text-slate-800 border  w-1/5 justify-center cursor-pointer'>
              <img src={Img} alt='' className='h-full w-full' />
              <button
                onClick={handleRemoveImg}
                className='absolute bottom-0 left-0 right-0 flex text-sm justify-center text-white py-1.5 bg-black'
              >
                {RemoveIcon}
              </button>
            </div>
          )}
          {/* --------- IF FILE2 IS NOT EXITS RENDER ADD FILE ELSE RENDER FILE------------------------- */}
          {!file2 && Img2 == "" ? (
            <label className='flex items-center text-2xl rounded-md h-full mx-2 text-slate-800 border  w-1/5 justify-center  cursor-pointer'>
              +
              <input
                className='hidden'
                type='file'
                onChange={ChangeFile2}
                accept='.jpg, .jpeg, .png, .gif' // Example: Limit file types to images
              />
            </label>
          ) : (
            <div className='flex items-center relative text-2xl rounded-md mx-2 h-full  text-slate-800 border  w-1/5 justify-center  cursor-pointer'>
              <img src={Img2} alt='' className='h-full w-full' />
              <button
                onClick={handleRemoveImg2}
                className='absolute bottom-0 left-0 right-0 flex text-sm justify-center text-white py-1 bg-black'
              >
                {RemoveIcon}
              </button>
            </div>
          )}
        </div>
        {ImgCCCDErr && (
          <p className='text-[12px] leading-5 text-red-500'>Vui lòng đăng tải ảnh CMND/CCCD/Hộ chiếu của bạn theo hướng dẫn trên.</p>
        )}
        <p className='text-[10.5px] leading-4'>
          Vui lòng Gửi CMND/CCCD/Hộ chiếu <strong className='text-green-600'>MẶT TRƯỚC VÀ SAU</strong> Các thông tin trong CMND/CCCD/Hộ
          chiếu phải được hiển thị rõ ràng (Kích thước ảnh không vượt quá 5.0 MB)
        </p>
      </div>
    </nav>
  )
}

export default ImgVerifi
