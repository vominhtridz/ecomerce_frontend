import { LoadingIcon } from "@/images/centerIcons"
import { FC, FormEvent } from "react"

interface CustomBtnType {
  handleClick: () => void
  loading?: boolean
  text: string
}
const CusTomBtn: FC<CustomBtnType> = ({ handleClick, loading, text }) => {
  return (
    <button
      disabled={loading == true ? true : false}
      onClick={handleClick}
      type='submit'
      className={` rounded-sm text-sm text-black bg-white hover:bg-gray-50 hover:shadow border border-gray-300 hover:border-gray-400 px-4 py-2`}
    >
      {loading ? <p className='text-lg flex items-center justify-center'>{LoadingIcon}</p> : text}
    </button>
  )
}

export default CusTomBtn
