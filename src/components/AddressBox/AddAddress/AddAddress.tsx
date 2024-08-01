import { FC, useState } from "react"
import { DownIcon } from "../../../images/centerIcons"
import ChangeAddressBox from "./ChangeAddressBox"
import { UpdateAddrBoxType } from "@/typescript/UserTypes"

const AddAddress: FC<UpdateAddrBoxType> = ({
  handleShowAddress,
  visiAddress,
  setVisiAddress,
  Ward,
  setWard,
  Province,
  isvisibleText,
  setProvince,
  district,
  setDistrict,
}) => {
  const [booleanWard, setBooleanWard] = useState<boolean>(false)
  const [booleanProvince, setbooleanProvince] = useState<boolean>(true)
  const [booleanDistrict, setBooleanDistrict] = useState<boolean>(false)
  const [RouteAddress, setRouteAddress] = useState<string>("Tỉnh/Thành phố")
  const [AddressDisAndWardAndCity, setAddressDisAndWardAndCity] = useState<any>()
  const [AddressWard, setAddressWard] = useState<any>()

  return (
    <div className='w-full  z-50'>
      {!isvisibleText && <h2 className='pb-2 text-[19px]'>Địa chỉ</h2>}
      <div className=' w-full '>
        {!isvisibleText && <h2 className='py-1 text-sm'>Tỉnh/Thành phố/Quận/Huyện/Phường/Xã</h2>}
        <button
          className='text-slate-500 w-full border relative flex justify-between outline-none items-center    border-slate-400 py-1.5 px-3.5  rounded-sm '
          onClick={handleShowAddress}
        >
          {!Province && <p className='w-full flex justify-start text-sm'>Chọn</p>}
          <div className='flex items-center w-full'>
            {Province && <p className='px-0.5 text-sm'>{`${Province}`}</p>}
            {district && <p className='px-0.5 text-sm'>{`/${district}`}</p>}
            {Ward && <p className='px-0.5 text-sm'>{`/${Ward}`}</p>}
          </div>

          <p className='mt-0.5'>{DownIcon}</p>
          {visiAddress && (
            <ChangeAddressBox
              isvisibleText={isvisibleText as boolean}
              Province={Province}
              district={district}
              Ward={Ward}
              RouteAddress={RouteAddress}
              setVisiAddress={setVisiAddress}
              booleanDistrict={booleanDistrict}
              booleanWard={booleanWard}
              setWard={setWard}
              setProvince={setProvince}
              setDistrict={setDistrict}
              setBooleanWard={setBooleanWard}
              setbooleanProvince={setbooleanProvince}
              setBooleanDistrict={setBooleanDistrict}
              setRouteAddress={setRouteAddress}
              setAddressDisAndWardAndCity={setAddressDisAndWardAndCity}
              setAddressWard={setAddressWard}
              booleanProvince={booleanProvince}
              AddressDisAndWardAndCity={AddressDisAndWardAndCity || null}
              AddressWard={AddressWard || null}
            />
          )}
        </button>
      </div>
    </div>
  )
}

export default AddAddress
