import { ChangeEvent, FC } from "react"

interface PhoneNumberInputTypes {
  number: number
  handleChangeNumber: (e: ChangeEvent<HTMLInputElement>) => void
}
const PhoneNumberInput: FC<PhoneNumberInputTypes> = ({ handleChangeNumber, number }) => {
  return (
    <input
      type='number'
      required
      placeholder='Nhập vào...'
      className='pl-3 pr-1 py-2 rounded-sm  w-full border border-slate-400 outline-none text-sm'
      onChange={handleChangeNumber}
      value={number}
    />
  )
}

export default PhoneNumberInput
