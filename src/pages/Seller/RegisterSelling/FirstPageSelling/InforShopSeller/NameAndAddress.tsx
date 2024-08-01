import { useEffect, useState } from "react"
import NameShopInput from "../../../../../components/Input/NameShopInput"
import ChangeBtn from "../../../../../components/button/ChangeBtn"
import { useMyContext } from "../../../../../context/context"
import EditBtn from "../../../../../components/button/EditBtn"
import { NameAndAddressType, sellerPickupaddr } from "@/typescript/SellingTypes"
import UpdateAddressBox from "@/components/AddressBox/AddShopAddress"
import { AddSellerPickUpAddress, GetSellerAddress, UPDATEPickUpaddress } from "@/apis/apis"
import { handleCuccessLabel, handleFailLabel } from "@/components/func/funcVisiLabel"

const NameAndAddress = ({ NameShopErr, handleChangeName, nameShopInput }: NameAndAddressType) => {
  const { Seller, setVisilFailLabel, setVisiCuccessLabel, setMessageLabel, dataUser } = useMyContext()
  const [Ward, setWard] = useState<string>("")
  const [Province, setProvince] = useState<string>("")
  const [district, setDistrict] = useState<string>("")
  const [Name, setName] = useState<string>("")
  const [detailAdress, setDetailAdress] = useState<string>("")
  const [Phonenumber, setPhonenumber] = useState<string>("")
  const [PickUpAddrData, setPickUpAddrData] = useState<sellerPickupaddr | null>(null)
  const [showAdresBoxItem, setShowAdresBoxItem] = useState<boolean>(false)
  const [numberErr, setNumberErr] = useState<boolean>(false)
  const [nameErr, setNameErr] = useState<boolean>(false)
  const [loading, setLoading] = useState<boolean>(false)
  const [AddressErr, setAddressErr] = useState<boolean>(false)
  const [showAdres, setShowAdres] = useState<boolean>(false)
  const [update, setUpdate] = useState<boolean>(false)
  const [Default, setDefault] = useState<boolean>(false)
  useEffect(() => {
    try {
      const basicUsers = JSON.parse(localStorage.getItem("basicUsers") as string)
      if (basicUsers) {
        GetSellerAddress({ userid: basicUsers?.userid })
          .then(res => {
            setPickUpAddrData(res.data[0])
          })
          .catch(err => console.log(err))
      }
    } catch (error) {
      console.error("Error parsing JSON:", error)
    }
  }, [])
  //------------handleSave
  const handleSaveAddr = () => {
    if (!CheckFinished()) return
    setLoading(true)
    const options = {
      addr: `${Province}/${district}/${Ward}`,
      sellerName: Name,
      phone: Phonenumber,
      detailaddr: detailAdress,
      setdefault: Default,
      userid: dataUser?.userid,
    }
    AddSellerPickUpAddress(options)
      .then(res => {
        const logCuccess = res ? res.data.message : "Lưu thành công"
        setLoading(false)
        console.log(res)
        handleCancelAdresBox()
        setPickUpAddrData(res.data.data[0])
        handleCuccessLabel(logCuccess, 2000, setMessageLabel, setVisiCuccessLabel)
      })
      .catch(err => {
        const logErr = err ? err.response.data.message : "lỗi hệ thống"
        setLoading(false)
        handleFailLabel(logErr, 2000, setMessageLabel, setVisilFailLabel)
      })
  }
  // render address
  const RenderSellerAddress = () => (
    <div className='text-[13px] text-black'>
      <div className='flex items-center '>
        <p className=''>{PickUpAddrData?.sellerName}</p>
        <p className='px-2 text-base'>|</p>
        <p className=''>{PickUpAddrData?.phone}</p>
      </div>
      <div className='pb-1'>
        <p className=''>{PickUpAddrData?.detailaddr}</p>
        <p className=''>{PickUpAddrData?.addr}</p>
      </div>
      <EditBtn handleChange={handleFixedAddress} />
    </div>
  )
  console.log("check rerender")
  //----------------------------HANDLE UPDATE-------------------------
  const handleUpdate = () => {
    if (!CheckFinished()) return
    setLoading(true)
    const options = {
      addressid: PickUpAddrData?.AddressID,
      addr: `${Province}/${district}/${Ward}`,
      sellerName: Name,
      phone: Phonenumber,
      detailaddr: detailAdress,
      setdefault: Default,
      userid: dataUser?.userid,
    }

    UPDATEPickUpaddress(options)
      .then(res => {
        const logCuccess = res ? res.data.message : "Lưu thành công"
        setLoading(false)
        console.log(res)
        handleCancelAdresBox()
        setPickUpAddrData(res.data.data[0])
        handleCuccessLabel(logCuccess, 2000, setMessageLabel, setVisiCuccessLabel)
      })
      .catch(err => {
        const logErr = err ? err.response.data.message : "lỗi hệ thống"
        setLoading(false)
        handleFailLabel(logErr, 2000, setMessageLabel, setVisilFailLabel)
      })
  }
  const handleFixedAddress = () => {
    const address = PickUpAddrData?.addr.split("/") as string[]
    setShowAdres(true)
    setUpdate(true)
    console.log(address)
    setWard(address[2])
    setProvince(address[0])
    setDefault(PickUpAddrData?.setdefault as boolean)
    setDistrict(address[1])
    setName(PickUpAddrData?.sellerName as string)
    setDetailAdress(PickUpAddrData?.detailaddr as string)
    setPhonenumber(PickUpAddrData?.phone as string)
    setShowAdresBoxItem(false)
    setNumberErr(false)
    setNameErr(false)
    setAddressErr(false)
  }
  console.log(showAdres)
  const CheckFinished = () => {
    if (Name == "") {
      setNameErr(true)
      return false
    }
    if (detailAdress == "") {
      setAddressErr(true)
      return false
    }
    if (Phonenumber == "") {
      setNumberErr(true)
      return false
    }
    return true
  }
  //----------------------HANDLE ADDRESS-----------------------
  const handleCancelAdresBox = () => {
    setWard("")
    setProvince("")
    setDistrict("")
    setName("")
    setDetailAdress("")
    setPhonenumber("")
    setShowAdresBoxItem(false)
    setNumberErr(false)
    setNameErr(false)
    setAddressErr(false)
    setShowAdres(false)
  }
  const handleShowAddr = () => setShowAdres(true)

  return (
    <div className=''>
      <nav className='flex items-center py-2'>
        <div className='flex items-center mr-4 whitespace-nowrap w-[8rem] justify-end'>
          <p className='text-lg text-red-500'>*</p>Tên Shop
        </div>
        <div className='w-[26rem] relative'>
          <NameShopInput
            handleChangeName={handleChangeName}
            error={NameShopErr}
            nameShopInput={Seller?.sellerName ? Seller?.sellerName : nameShopInput}
          />
          <div className='flex text-sm  absolute right-2 top-1.5 items-center text-slate-500'>
            <p className='text-sm'>{nameShopInput ? nameShopInput.length : "0"}</p>/30
          </div>
        </div>
      </nav>
      <nav className='flex  py-4'>
        <div className='flex mr-4  w-[8rem] justify-end'>
          <p className='text-lg text-red-500'>*</p>Địa chỉ lấy hàng
        </div>
        {PickUpAddrData ? RenderSellerAddress() : <ChangeBtn handleChange={handleShowAddr} />}
      </nav>
      {showAdres && (
        <UpdateAddressBox
          setDefault={setDefault}
          Default={Default}
          loading={loading}
          SaveOrUpdate={update}
          handleUpdate={handleUpdate}
          Province={Province}
          Ward={Ward}
          district={district}
          detailAdress={detailAdress}
          showAdresBoxItem={showAdresBoxItem}
          setShowAdresBoxItem={setShowAdresBoxItem}
          numberErr={numberErr}
          nameErr={nameErr}
          Name={Name}
          setName={setName}
          handleSave={handleSaveAddr}
          phonenumber={Phonenumber}
          AddressErr={AddressErr}
          setWard={setWard}
          setProvince={setProvince}
          setDistrict={setDistrict}
          setDetailAdress={setDetailAdress}
          setPhonenumber={setPhonenumber}
          handleCancel={handleCancelAdresBox}
        />
      )}
    </div>
  )
}

export default NameAndAddress
