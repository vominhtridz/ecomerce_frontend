import { ChangeEvent } from "react"

interface BranchBankInputType {
  value: string
  changeValue: (e: ChangeEvent<HTMLInputElement>) => void
  placeHolder: string
  error?: boolean
  cursor?: string
  handleClick?: () => void
}
const BranchBankInput = ({ value, changeValue, placeHolder, error, cursor, handleClick }: BranchBankInputType) => {
  const checkError = error ? "border-red-500 outline-none" : "border-gray-300 outline-blue-500"

  return (
    <input
      onClick={handleClick}
      type='text'
      className={`${checkError} ${cursor} px-2 py-2 my-1 text-[13px]  text-black border  rounded-sm bg-white w-full`}
      value={value}
      maxLength={60}
      placeholder={placeHolder}
      onChange={changeValue}
    />
  )
}

export default BranchBankInput
