import { LoadingIcon } from "@/images/centerIcons"
import { FC, FormEvent } from "react"

interface NextBtnTypes {
  handleNext: (e: FormEvent<HTMLButtonElement | HTMLFormElement>) => void
  loading?: boolean
}
const NextBtn: FC<NextBtnTypes> = ({ handleNext, loading }) => {
  return (
    <button
      disabled={loading == true ? true : false}
      onClick={handleNext}
      type='submit'
      className={` rounded-sm text-sm text-white bg-green-600 px-4 py-2`}
    >
      {loading ? <p className='text-lg flex items-center justify-center'>{LoadingIcon}</p> : "Tiếp theo"}
    </button>
  )
}

export default NextBtn
