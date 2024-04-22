import { ChangeEvent, FC } from "react"

interface FirstLastNameInputTypes {
  nameinput: string
  handleChangeName: (e: ChangeEvent<HTMLInputElement>) => void
}
const FirstLastNameInput: FC<FirstLastNameInputTypes> = ({ nameinput, handleChangeName }) => {
  return (
    <input
      type='text'
      required
      placeholder='Nhập vào...'
      className='pl-3 pr-1 py-2 rounded-sm  w-full border border-slate-400 outline-none text-sm'
      onChange={handleChangeName}
      value={nameinput}
    />
  )
}

export default FirstLastNameInput
