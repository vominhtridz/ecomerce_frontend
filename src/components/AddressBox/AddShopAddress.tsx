import { ChangeEvent } from "react"
import { UpdateAddressBoxType } from "@/typescript/ComponentType"
import NameAndPhoneNumber from "./NameAndPhoneNumber"
import AddressDetail from "./AddressDetail"
import AddAddress from "./AddAddress/AddAddress"
import LocateAddress from "./LocateAddress/LocateAddress"
import SaveShopBtn from "../button/SaveShopBtn"
import BackBtn from "../button/BackBtn"
import UpdateBtn from "../button/UpdateBtn"

const UpdateAddressBox = ({
  Province,
  Ward,
  loading,
  district,
  detailAdress,
  showAdresBoxItem,
  setShowAdresBoxItem,
  numberErr,
  nameErr,
  Name,
  setDefault,
  setName,
  handleSave,
  phonenumber,
  AddressErr,
  setWard,
  SaveOrUpdate,
  Default,
  handleUpdate,
  setProvince,
  setDistrict,
  setDetailAdress,
  setPhonenumber,
  handleCancel,
}: UpdateAddressBoxType) => {
  const ChangeBoxDefault = (e: ChangeEvent<HTMLInputElement>) => setDefault(e.target.checked)
  const ChangeInput = (e: string) => setName(e)
  const ChangeAddress = (e: ChangeEvent<HTMLTextAreaElement>) => setDetailAdress(e.target.value)
  const ChangeNumber = (value: string) => setPhonenumber(value)

  const handleShowAddress = () => setShowAdresBoxItem(!showAdresBoxItem)
  return (
    <div className='fixed flex items-center justify-center left-0 right-0 bottom-0 top-0 bg-[rgba(0,0,0,0.4)] z-30 p-50'>
      <div className=' bg-white shadow  rounded-sm text-[15px]  w-[40rem] h-[38rem] '>
        <div className='w-full z-10  flex items-center justify-between px-6 pt-2'>
          <h2 className='text-xl '>{SaveOrUpdate ? "Cập nhật địa chỉ " : "Thêm Địa Chỉ Mới"}</h2>
          <button onClick={handleCancel} className='text-2xl text-black'>
            x
          </button>
        </div>
        <div className=' pb-2 z-50 py-8  px-6 overflow-y-auto'>
          <NameAndPhoneNumber
            ChangeNumber={ChangeNumber}
            ChangeInput={ChangeInput}
            ShopInput={Name}
            number={phonenumber}
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
            visiAddress={showAdresBoxItem}
            setVisiAddress={setShowAdresBoxItem}
          />
          <LocateAddress />
          <div className='flex items-center'>
            <input type='checkbox' checked={Default} id='checkDefault' className='' onChange={ChangeBoxDefault} />
            <label htmlFor='checkDefault' className='pl-2 text-sm'>
              Đặt làm mặc định
            </label>
          </div>
        </div>
        <div className='mt-6 px-4 w-full py-4 rounde-sm shadow border-t border-slate-300  flex justify-end items-center'>
          <BackBtn handleBack={handleCancel} />
          {SaveOrUpdate ? <UpdateBtn handleUpdate={handleUpdate} /> : <SaveShopBtn loading={loading} handleSave={handleSave} />}
        </div>
        {/* Else */}
      </div>
    </div>
  )
}

export default UpdateAddressBox
