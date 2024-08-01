import { ChangeEvent } from "react"

interface CusCheckBoxType {
  check: boolean
  changeValue: (e: ChangeEvent<HTMLInputElement>) => void
  required?: boolean
  id: string
  name?: string
  value?: string
}
const CusCheckBox = ({ check, changeValue, id, name, value }: CusCheckBoxType) => {
  return (
    <input
      type='radio'
      name={name}
      id={id}
      value={value}
      className={` px-2 py-2  outline-none rounded-full  text-black border   bg-white w-4 h-4`}
      checked={check}
      onChange={changeValue}
    />
  )
}

export default CusCheckBox
