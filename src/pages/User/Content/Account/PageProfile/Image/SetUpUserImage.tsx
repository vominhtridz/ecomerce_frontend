import { ChangeEvent, useRef } from "react"
import { LoginIcon } from "../../../../../../images/centerIcons"
interface UserImageType {
  setImg: (e: string) => void
  img: string
  file: any
  setFile: (e: any) => void
}
export const UserImage = ({ setImg, img, setFile }: UserImageType) => {
  const fileUserImg = useRef<HTMLInputElement>(null)
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0]
    console.log(e)
    setFile(selectedFile)
    setImg(URL.createObjectURL(selectedFile as File))
  }

  const handleSetImage = () => fileUserImg.current?.click()
  return (
    <div className='border-l border-slate-400 flex w-1/2 flex-col items-center px-10'>
      {img && <img src={img} className='w-[130px] rounded-full cursor-pointer    h-[130px] my-8' onClick={handleSetImage} />}
      {!img && (
        <div
          onClick={handleSetImage}
          className='cursor-pointer w-[130px] text-[5rem] border border-slate-300 flex items-center justify-center rounded-full    h-[130px] my-8'
        >
          {LoginIcon}
        </div>
      )}

      <input type='file' multiple onChange={handleChange} ref={fileUserImg} name='fileUserImg' accept='image/*' className='hidden' />
      <label
        htmlFor='fileUserImg'
        className='border border-slate-400  rounded-sm cursor-pointer inline-block hover:bg-slate-50 px-4 py-1.5 text-sm'
        onClick={handleSetImage}
      >
        Chọn Ảnh
      </label>

      <p className='text-[13px] py-6 text-black '>
        Dụng lượng file tối đa 1 MB <br />
        Định dạng:.JPEG, .PNG
      </p>
    </div>
  )
}
export default UserImage
