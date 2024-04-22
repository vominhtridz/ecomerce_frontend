import { FC } from "react"

interface EditBtnTypes {
  handleChange: () => void
}
const EditBtn: FC<EditBtnTypes> = ({ handleChange }) => {
  return (
    <button className=' outline-none text-sm text-blue-500 ' onClick={handleChange}>
      Chỉnh sửa
    </button>
  )
}

export default EditBtn
