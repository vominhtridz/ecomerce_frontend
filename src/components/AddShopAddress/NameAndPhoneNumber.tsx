import { ChangeEvent, FC } from "react"
import NameShopInput from "../Input/NameShopInput"
import PhoneNumberInput from "../Input/PhoneNumberInput"
import { PhoneNumberRegex } from "../Regex"
interface NameAndPhoneNumberTypes {
  ShopInput: string
  numberErr: boolean
  nameErr: boolean
  number: number
  ChangeNumber: (e: ChangeEvent<HTMLInputElement>) => void
  ChangeInput: (e: ChangeEvent<HTMLInputElement>) => void
}
const NameAndPhoneNumber: FC<NameAndPhoneNumberTypes> = ({
  ChangeInput,
  ShopInput,
  ChangeNumber,
  number,
  numberErr,
  nameErr,
}) => {
  const checkErrorName = ShopInput.length < 1
  const checkErrorNumber = PhoneNumberRegex.test(number.toString())
  return (
    <div className=''>
      <div className='w-full py-3 '>
        <label htmlFor='NameShopInput' className='pb-2 block'>
          Họ và tên
        </label>
        <NameShopInput handleChangeName={ChangeInput} nameShopInput={ShopInput} />
        {nameErr && checkErrorName && <span className='text-red-500 text-[13px]'>Họ & Tên is required</span>}
      </div>
      <div className='w-full py-3'>
        <p className='pb-2'>Số điện thoại</p>
        <PhoneNumberInput handleChangeNumber={ChangeNumber} number={number} />
        {numberErr && !checkErrorNumber && <span className='text-red-500 text-[13px]'>Số điện thoại is required</span>}
      </div>
    </div>
  )
}

export default NameAndPhoneNumber
