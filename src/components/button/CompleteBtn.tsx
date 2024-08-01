import { LoadingIcon } from "@/images/centerIcons"
import { FC, FormEvent } from "react"

interface CompleteBtnTypes {
  handleComplete: (e: FormEvent<HTMLButtonElement | HTMLFormElement>) => void
  loading?: boolean
}
const CompleteBtn: FC<CompleteBtnTypes> = ({ handleComplete, loading }) => {
  return (
    <button
      disabled={loading == true ? true : false}
      onClick={handleComplete}
      type='submit'
      className={` rounded-sm text-sm text-white bg-green-500 hover:bg-green-600 hover:shadow border border-green-400 hover:border-green-500 px-4 py-2`}
    >
      {loading ? <p className='text-lg flex items-center justify-center'>{LoadingIcon}</p> : "Hoàn tất"}
    </button>
  )
}

export default CompleteBtn
