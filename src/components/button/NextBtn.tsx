import { FC } from "react"

interface NextBtnTypes {
  handleNext: () => void
}
const NextBtn: FC<NextBtnTypes> = ({ handleNext }) => {
  return (
    <button onClick={handleNext} className='rounded-sm text-sm text-white bg-red-500 px-4 py-2'>
      Tiếp theo
    </button>
  )
}

export default NextBtn
