import { FC, useState } from "react"
import { DownIcon } from "../../../images/centerIcons"
import { AddressDisAndWardAndCityTypes, AddressWardTypes, NameShopInputTypes } from "../../../typescript/AddressTypes"
import ChangeAddressBox from "./ChangeAddressBox"

const AddAddress: FC<NameShopInputTypes> = ({
  handleShowAddress,
  visiAddress,
  setVisiAddress,
  Ward,
  setWard,
  Province,
  setProvince,
  district,
  setDistrict,
}) => {
  const [booleanWard, setBooleanWard] = useState<boolean>(false)
  const [booleanProvince, setbooleanProvince] = useState<boolean>(true)
  const [booleanDistrict, setBooleanDistrict] = useState<boolean>(false)
  const [RouteAddress, setRouteAddress] = useState<string>("Tỉnh/Thành phố")
  const [AddressDisAndWardAndCity, setAddressDisAndWardAndCity] = useState<AddressDisAndWardAndCityTypes>()
  const [AddressWard, setAddressWard] = useState<AddressWardTypes>()

  return (
    <div className='w-full my-4 '>
      <h2 className='pb-2 text-[16px]'>Địa chỉ</h2>
      <div className=' w-full '>
        <h2 className='py-1 text-sm'>Tỉnh/Thành phố/Quận/Huyện/Phường/Xã</h2>
        <button
          className='text-slate-500 w-full border relative flex justify-between outline-none items-center    border-slate-400 py-1.5 px-3.5  rounded-sm '
          onClick={handleShowAddress}
        >
          {!Province && <p className=''>Chọn</p>}
          <div className='flex items-center'>
            {Province && <p className='px-0.5'>{`${Province}`}</p>}
            {district && <p className='px-0.5'>{`/${district}`}</p>}
            {Ward && <p className='px-0.5'>{`/${Ward}`}</p>}
          </div>

          <p className='mt-0.5'>{DownIcon}</p>
          {visiAddress && (
            <ChangeAddressBox
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
