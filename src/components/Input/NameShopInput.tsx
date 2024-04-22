import { ChangeEvent, FC } from "react"

interface NameShopInputTypes {
  nameShopInput: string
  handleChangeName: (e: ChangeEvent<HTMLInputElement>) => void
}

const NameShopInput: FC<NameShopInputTypes> = ({ handleChangeName, nameShopInput }) => {
  return (
    <input
      type='text'
      required
      name='NameShopInput'
      placeholder='Nhập vào...'
      className='pl-3 pr-1 py-1.5 bg-white rounded-sm  w-full border border-slate-400 outline-none text-sm'
      onChange={handleChangeName}
      value={nameShopInput}
    />
  )
}

export default NameShopInput
