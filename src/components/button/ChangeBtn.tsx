import { FC } from "react"

interface ChangeBtnTypes {
  handleChange: () => void
}
const ChangeBtn: FC<ChangeBtnTypes> = ({ handleChange }) => {
  return (
    <button className='px-6 outline-none text-base text-blue-500 ' onClick={handleChange}>
      Thay đổi
    </button>
  )
}

export default ChangeBtn
