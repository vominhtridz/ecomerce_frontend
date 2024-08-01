import { ChangeEvent, FC } from "react"

interface NumberTypes {
  number: number
  ChangeNumber: (e: ChangeEvent<HTMLInputElement>) => void
}

const NumberInput: FC<NumberTypes> = ({ number, ChangeNumber }) => {
  return (
    <input
      autoComplete='new-password'
      type='text'
      className='text-[15px] border-l-0 border-r-0 w-14 pl-6 h-full  justify-center  flex items-center py-[3px] border outline-none border-slate-300'
      placeholder='Enter Your Number...'
      onChange={ChangeNumber}
      value={number}
      inputMode='numeric'
      pattern='[0-9]*'
      required
    />
  )
}
export default NumberInput
