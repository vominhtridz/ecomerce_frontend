import NameAndPhoneNumber from "./NameAndPhoneNumber"
import AddAddress from "./AddAddress/AddAddress"
import AddressDetail from "./AddressDetail"
import LocateAddress from "./LocateAddress/LocateAddress"
import BackBtn from "../button/BackBtn"
import SaveAddressShopBtn from "../button/SaveAddressShopBtn"
import { FC } from "react"
import { OptionsAddressTypes } from "../../typescript/AddressTypes"

const OptionsAddress: FC<OptionsAddressTypes> = ({
  detailAdress,
  handleSave,
  ChangeNumber,
  ChangeInput,
  numberErr,
  nameErr,
  AddressErr,
  ShopInput,
  number,
  ChangeAddress,
  visiAddress,
  handleShowAddress,
  setVisiAddress,
  handleBack,
  Ward,
  setWard,
  Province,
  setProvince,
  district,
  setDistrict,
}) => {
  return (
    <div className=''>
      <div className='h-[30rem] pb-6 pt-1 px-6 overflow-y-auto'>
        <NameAndPhoneNumber
          ChangeNumber={ChangeNumber}
          ChangeInput={ChangeInput}
          ShopInput={ShopInput}
          number={number}
          numberErr={numberErr}
          nameErr={nameErr}
        />
        <AddressDetail AddressErr={AddressErr} detailAdress={detailAdress} ChangeAddress={ChangeAddress} />
        <AddAddress
          Ward={Ward}
          setWard={setWard}
          Province={Province}
          setProvince={setProvince}
          district={district}
          setDistrict={setDistrict}
          handleShowAddress={handleShowAddress}
          visiAddress={visiAddress}
          setVisiAddress={setVisiAddress}
        />
        <LocateAddress />
      </div>
      {/* Else */}
      <div className='px-4 w-full py-6 rounde-sm shadow-lg border-t border-slate-300  flex justify-end items-center'>
        <div className='border border-slate-400 rounded-sm mx-4'>
          <BackBtn handleBack={handleBack} />
        </div>

        <SaveAddressShopBtn handleSave={handleSave} />
      </div>
    </div>
  )
}

export default OptionsAddress
