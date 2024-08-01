import { FC } from "react"
import NameShopInput from "../Input/NameShopInput"
import PhoneNumberInput from "../Input/PhoneNumberInput"
import { PhoneNumberRegex } from "../Regex"
interface NameAndPhoneNumberTypes {
  ShopInput: string
  numberErr: boolean
  nameErr: boolean
  number: string
  ChangeNumber: (value: string) => void
  ChangeInput: (e: string) => void
}
const NameAndPhoneNumber: FC<NameAndPhoneNumberTypes> = ({ ChangeInput, ShopInput, ChangeNumber, number, numberErr, nameErr }) => {
  const checkErrorName = ShopInput.length < 1
  const checkErrorNumber = PhoneNumberRegex.test(number.toString())
  return (
    <div className='pt-2'>
      <div className='w-full relative '>
        <NameShopInput handleChangeName={ChangeInput} nameShopInput={ShopInput} />
        <label htmlFor='NameShopInput' className='text-[10px] select-none absolute left-0.5 top-[-8px] z-20  px-1 text-black bg-white'>
          Họ và tên
        </label>
        {nameErr && checkErrorName && <span className='text-red-500 text-[13px]'>Họ & Tên is required</span>}
      </div>
      <div className='w-full mt-4 relative'>
        <label htmlFor='phonenumber' className='text-[10px] select-none absolute left-0.5 top-[-8px] z-20  px-1 text-black bg-white'>
          Số điện thoại
        </label>
        <PhoneNumberInput handleChangeNumber={ChangeNumber} number={number} />
        {numberErr && !checkErrorNumber && <span className='text-red-500 text-[13px]'>Số điện thoại is required</span>}
      </div>
    </div>
  )
}

export default NameAndPhoneNumber
