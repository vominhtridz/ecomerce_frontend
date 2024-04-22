import { ChangeEvent, FC } from "react"

interface SellPhoneNumberTypes {
  number: number
  handleChangeNumber: (e: ChangeEvent<HTMLInputElement>) => void
}

const SellPhoneNumber: FC<SellPhoneNumberTypes> = ({ handleChangeNumber, number }) => {
  return (
    <input
      type='number'
      placeholder='Nhập số điện thoại..'
      className='w-full ronded-sm border border-slate-400 text-[14px] pl-11 pr-2 py-1.5 outline-none'
      value={number}
      onChange={handleChangeNumber}
    />
  )
}

export default SellPhoneNumber
