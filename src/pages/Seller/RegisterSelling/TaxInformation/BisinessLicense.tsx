import { ImgIcon, RemoveIcon } from "@/images/Svg/svgImage"
import { Eyeicon, UploadIcon } from "@/images/centerIcons"
import { ChangeEvent, useState } from "react"

const BisinessLicense = () => {
  const [file, setFile] = useState<File | null>(null)
  const [showImg, setShowImg] = useState<boolean>(false)
  const [Img, setImg] = useState<string>("")
  const ChangeFile = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const selectedFile = e.target.files[0]
      setFile(selectedFile)
      setImg(URL.createObjectURL(selectedFile))
    }
  }
  console.log(file)
  const handleRemove = () => setFile(null)
  const handleSeeImg = () => setShowImg(true)
  const handleDisDeletion = () => setShowImg(false)

  return (
    <nav className='flex  py-2'>
      <div className='flex items-center mr-4 whitespace-nowrap w-[11rem] justify-end text-[13.5px]'>
        <p className='text-lg text-red-500'>*</p>
        Giấy phép kinh doanh
      </div>
      <div className='w-1/2'>
        {!file && (
          <label className='flex items-center text-[13px] text-slate-800 border  w-1/2 justify-center py-1.5 cursor-pointer'>
            <p className='px-2 text-lg'>{UploadIcon}</p>
            Upload
            <input
              className='hidden'
              type='file'
              onChange={ChangeFile}
              accept='.jpg, .jpeg, .png, .gif' // Example: Limit file types to images
            />
          </label>
        )}
        {file && (
          <div className='bg-gray-100 flex items-center rounded-sm w-[45%] py-1.5'>
            <p className='px-2 text-slate-400'>{ImgIcon}</p>
            <p className='whitespace-nowrap  text-[12px] w-[6rem] overflow-hidden '>{file.name} </p>
            <p className='text-[12px] px-2'>|</p>
            <button onClick={handleSeeImg} className='px-2 text-slate-500'>
              {Eyeicon}
            </button>
            <button onClick={handleRemove} className='px-2 text-slate-500'>
              {RemoveIcon}
            </button>
          </div>
        )}
      </div>
      {showImg && (
        <div
          onClick={handleDisDeletion}
          className='fixed w-full flex items-center justify-center h-full top-0 left-0 right-0 bottom-0  z-50'
          style={{ background: "rgba(0,0,0,0.5)" }}
        >
          <img className='w-full px-36 py-8 h-full ' src={Img} alt='Giấy phép kinh doanh' />
        </div>
      )}
    </nav>
  )
}

export default BisinessLicense
