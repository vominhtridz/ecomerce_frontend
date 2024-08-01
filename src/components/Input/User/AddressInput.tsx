import { ChangeEvent } from "react"

interface AddressInputType {
  address: string
  ChangeAddress: (e: ChangeEvent<HTMLInputElement>) => void
}

const AddressInput = ({ address, ChangeAddress }: AddressInputType) => {
  return (
    <input
      type='text'
      className={` px-2 py-2 text-[12px] outline-blue-500  border-gray-300 shadow-sm text-black border  rounded-sm bg-white w-full`}
      placeholder='địa chỉ'
      id='addr'
      onChange={ChangeAddress}
      value={address}
    />
  )
}

export default AddressInput
