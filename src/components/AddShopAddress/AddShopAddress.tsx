import { useMyContext } from "../../context/context"
import { ChangeEvent, useEffect, useState } from "react"
import OptionsAddress from "./OptionsAddress"
import Loading from "../Loading/Loading"
import { AddSellerPickUpAddress } from "../../apis/apis"

const AddShopAddress = () => {
  const { setShopAddress, setvisibleLabel, dataUser, sellerAddress, setSellerAddress } = useMyContext()
  const [Ward, setWard] = useState<string>(sellerAddress?.Ward || "")
  const [Province, setProvince] = useState<string>(sellerAddress?.Province || "")
  const [district, setDistrict] = useState<string>(sellerAddress?.district || "")
  const [nameSelling, setNameSelling] = useState<string>(sellerAddress?.sellerName || "")
  const [detailAdress, setDetailAdress] = useState<string>(sellerAddress?.detailAdress || "")
  const [Phonenumber, setPhonenumber] = useState<number>(sellerAddress?.Phonenumber || 0)
  const [visiAddress, setVisiAddress] = useState<boolean>(false)
  const [numberErr, setNumberErr] = useState<boolean>(false)
  const [nameErr, setNameErr] = useState<boolean>(false)
  const [AddressErr, setAddressErr] = useState<boolean>(false)
  const [isloading, setIsLoading] = useState<boolean>(true)
  useEffect(() => {
    const TimeLoading = setTimeout(() => {
      setIsLoading(false)
    }, 1000)
    return () => {
      clearTimeout(TimeLoading)
    }
  }, [])
  function handleSave() {
    const AddressSeller = {
      SellerID: dataUser?.userID || 0,
      sellerName: nameSelling,
      email: dataUser?.email.toLowerCase() || "",
      detailAdress: detailAdress,
      Phonenumber: Phonenumber,
      Ward: Ward,
      Province: Province,
      district: district,
      locate: "10.1205.10102",
    }

    // check PhoneNumber, address , name is corrected?
    if (!validateShopAddress()) return
    else if (validateShopAddress()) {
      setShopAddress(false)
    }
    //send address to server
    AddSellerPickUpAddress(AddressSeller).then(res => setSellerAddress(res.data[0]))
    setTimeout(() => {
      setvisibleLabel(true)
    }, 1000)
  }
  const handleBack = () => setShopAddress(false)
  const ChangeInput = (e: ChangeEvent<HTMLInputElement>) => setNameSelling(e.target.value)
  const ChangeAddress = (e: ChangeEvent<HTMLTextAreaElement>) => setDetailAdress(e.target.value)
  const handleShopOff = () => setShopAddress(false)
  const handleShowAddress = () => setVisiAddress(!visiAddress)
  const ChangeNumber = (e: ChangeEvent<HTMLInputElement>) => setPhonenumber(parseInt(e.target.value))
  const validateShopAddress = () => {
    if (!Ward && !Province && !district && !AddressErr && !numberErr && !nameErr) {
      setNumberErr(true)
      setNameErr(true)
      setAddressErr(true)
      return false
    } else if (!Ward && !Province && !district && AddressErr && numberErr && nameErr) {
      setNumberErr(true)
      setNameErr(true)
      setAddressErr(true)
      return false
    }
    setNumberErr(false)
    setNameErr(false)
    setAddressErr(false)
    return true
  }

  return (
    <div className='fixed flex items-center justify-center left-0 right-0 bottom-0 top-0 bg-[rgba(0,0,0,0.4)] z-30 p-50'>
      <div className=' bg-white shadow  rounded-sm text-[15px] w-[40rem] h-[38rem] '>
        <div className='w-full   flex items-center justify-between px-6 pt-2'>
          <h2 className='text-lg '>Thêm Địa Chỉ Mới</h2>
          <button onClick={handleShopOff} className='text-2xl text-black'>
            x
          </button>
        </div>
        {isloading ? (
          <Loading />
        ) : (
          <OptionsAddress
            numberErr={numberErr}
            nameErr={nameErr}
            AddressErr={AddressErr}
            Ward={Ward}
            setWard={setWard}
            Province={Province}
            setProvince={setProvince}
            district={district}
            setDistrict={setDistrict}
            handleBack={handleBack}
            visiAddress={visiAddress}
            nameError={nameErr}
            number={Phonenumber}
            detailAdress={detailAdress}
            ShopInput={nameSelling}
            ChangeInput={ChangeInput}
            numberError={numberErr}
            handleSave={handleSave}
            handleShowAddress={handleShowAddress}
            ChangeNumber={ChangeNumber}
            ChangeAddress={ChangeAddress}
            setVisiAddress={setVisiAddress}
          />
        )}
      </div>
    </div>
  )
}

export default AddShopAddress
