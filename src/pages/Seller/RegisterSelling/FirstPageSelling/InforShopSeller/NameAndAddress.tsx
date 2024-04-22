import { FC } from "react"
import NameShopInput from "../../../../../components/Input/NameShopInput"
import ChangeBtn from "../../../../../components/button/ChangeBtn"

import { NameAndAddressTypes } from "../../../../../typescript/AddressTypes"
import { useMyContext } from "../../../../../context/context"
import EditBtn from "../../../../../components/button/EditBtn"

const NameAndAddress: FC<NameAndAddressTypes> = ({
  handleChangeName,
  handleFixedAddress,
  nameShopInput,
  handleChangeAdress,
}) => {
  const { sellerAddress } = useMyContext()
  // const lengthNameSeller = !nameShopInput.length ? 0 : nameShopInput.length
  function RenderSellerAddress() {
    return (
      <div className='text-[13px] text-black'>
        <div className='flex items-center '>
          <p className=''>{sellerAddress?.sellerName}</p>
          <p className='px-2 text-base'>|</p>
          <p className=''>{sellerAddress?.Phonenumber}</p>
        </div>
        <div className='pb-1'>
          <p className=''>{sellerAddress?.detailAdress}</p>
          <p className=''>{sellerAddress?.Province}</p>
          <p className=''>{sellerAddress?.district}</p>
          <p className=''>{sellerAddress?.Ward}</p>
        </div>
        <EditBtn handleChange={handleFixedAddress} />
      </div>
    )
  }
  return (
    <div className=''>
      <nav className='flex items-center  py-2'>
        <div className='flex items-center mr-4 whitespace-nowrap w-[8rem] justify-end'>
          <p className='text-lg text-red-500'>*</p>Tên Shop
        </div>
        <div className='w-[26rem] relative'>
          <NameShopInput handleChangeName={handleChangeName} nameShopInput={nameShopInput} />
          <div className='flex text-sm  absolute right-2 top-1.5 items-center text-slate-500'>
            <p className='text-sm'>0</p>/30
          </div>
        </div>
      </nav>
      <nav className='flex  py-4'>
        <div className='flex mr-4  w-[8rem] justify-end'>
          <p className='text-lg text-red-500'>*</p>Địa chỉ lấy hàng
        </div>
        {!sellerAddress ? <ChangeBtn handleChange={handleChangeAdress} /> : RenderSellerAddress()}
      </nav>
    </div>
  )
}

export default NameAndAddress
