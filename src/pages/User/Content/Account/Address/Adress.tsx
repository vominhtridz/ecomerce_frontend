import { useMyContext } from "../../../../../context/context"
import ShowAdress from "./ShowAddress/ShowAddress"
import { AddressBtn } from "../../../../../components/button/AddNewAddress"
import { useEffect, useState } from "react"
import { handleCuccessLabel, handleFailLabel } from "@/components/func/funcVisiLabel"
import UpdateAddressBox from "@/components/AddressBox/AddShopAddress"
import { ChangeUserAddress, GetUserAddr, RemoveUserAddr, UpdateUserAddr } from "@/apis/apis"

export const PageAddress = () => {
  const { dataUser, setVisilFailLabel, setVisiCuccessLabel, setMessageLabel } = useMyContext()
  const [Ward, setWard] = useState<string>("")
  const [Province, setProvince] = useState<string>("")
  const [UserAddr, setUserAddr] = useState<object[]>()
  const [district, setDistrict] = useState<string>("")
  const [Name, setName] = useState<string>("")
  const [detailAdress, setDetailAdress] = useState<string>("")
  const [Phonenumber, setPhonenumber] = useState<string>("0")
  const [showAdresBoxItem, setShowAdresBoxItem] = useState<boolean>(false)
  const [numberErr, setNumberErr] = useState<boolean>(false)
  const [nameErr, setNameErr] = useState<boolean>(false)
  const [AddressErr, setAddressErr] = useState<boolean>(false)
  const [showAdres, setShowAdres] = useState<boolean>(false)
  const [Default, setDefault] = useState<boolean>(false)
  const [SaveOrUpdate, setSaveOrUpdate] = useState<boolean>(false)
  const [loading, setLoading] = useState<boolean>(false)
  const [addrid, setAddrid] = useState<number>(0)
  useEffect(() => {
    GetUserAddr({ userid: dataUser?.userid })
      .then(res => setUserAddr(res.data))
      .catch(err => console.error(err))
  }, [])
  console.log("useraddress", UserAddr)
  // --------------------------- HANDLE SAVE ADDRESS TO DATABASE--------------------
  function handleSave() {
    // check PhoneNumber, address , name is corrected?
    if (!validateShopAddress()) return
    const DataAddr = {
      userid: dataUser?.userid as number,
      first_lastname: Name,
      detailaddr: detailAdress,
      phonenumber: Phonenumber,
      addr: `${Province}/${district}/${Ward}`,
      setdefault: Default,
    }
    setLoading(true)
    ChangeUserAddress(DataAddr)
      .then(res => {
        setUserAddr(res.data.data)
        const logCuccess = res ? res.data.message : "Lưu thành công"
        handleCuccessLabel(logCuccess, 600, setMessageLabel, setVisiCuccessLabel)
        setShowAdres(false)
        setLoading(false)
      })
      .catch(err => {
        const logErr = err ? err.response.data.message : "lỗi hệ thống"
        setLoading(false)
        handleFailLabel(logErr, 600, setMessageLabel, setVisilFailLabel)
      })
  }
  // --------------------------HANDLE REMOVE AND UPDATE USER ADDRESS-----------------------
  const ShowUpdateBox = (userAddr: any) => {
    const address = userAddr.addr.split("/")
    setSaveOrUpdate(true)
    setShowAdres(true)
    setName(userAddr.first_lastname)
    setDefault(userAddr.setdefault)
    setPhonenumber(userAddr.phonenumber)
    setDetailAdress(userAddr.detailaddr)
    setDistrict(address[1])
    setProvince(address[0])
    setWard(address[2])
    setAddrid(userAddr.addrid)
  }
  const handleUpdateAddr = () => {
    if (!validateShopAddress()) return
    const DataAddr = {
      addrid: addrid,
      userid: dataUser?.userid as number,
      first_lastname: Name,
      detailaddr: detailAdress,
      phonenumber: Phonenumber,
      addr: `${Province}/${district}/${Ward}`,
      setdefault: Default,
    }
    console.log(Default)
    setLoading(true)
    UpdateUserAddr(DataAddr)
      .then(res => {
        setUserAddr(res.data.data)
        const logCuccess = res ? res.data.message : "Lưu thành công"
        handleCuccessLabel(logCuccess, 600, setMessageLabel, setVisiCuccessLabel)
        setShowAdres(false)
        setLoading(false)
      })
      .catch(err => {
        const logErr = err ? err.response.data.message : "lỗi hệ thống"
        setLoading(false)
        handleFailLabel(logErr, 600, setMessageLabel, setVisilFailLabel)
      })
  }
  const handleRemove = (addrid: number, userid: number) => {
    RemoveUserAddr({ addrid, userid }).then(res => setUserAddr(res.data))
  }
  // --------------------------VALIDATE SHOP ADDRESSS-----------------------
  const validateShopAddress = () => {
    if (Phonenumber.length < 10) {
      setNumberErr(true)
      return false
    }
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
  const ShowAdressBox = () => setShowAdres(true)
  const handleCancelAdresBox = () => {
    setShowAdres(false)
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

  // ------------------------RENDER ELEMENT --------------------------
  return (
    <section className='bg-white w-full p-4'>
      <nav className='flex justify-between px-2  border-b py-2 border-gray-200'>
        <h2 className=' text-black text-lg'>Địa chỉ của tôi</h2>
        <AddressBtn handleAdd={ShowAdressBox} />
      </nav>
      {/* -------------------- INFOR USER ADDRESS ALTER ADD */}
      {UserAddr && UserAddr.length > 0 ? <ShowAdress handleUpdate={ShowUpdateBox} handleRemove={handleRemove} data={UserAddr} /> : ""}
      {/* -------------------------ADD ADDRESS BOX -------------- */}
      {showAdres && (
        <UpdateAddressBox
          handleUpdate={handleUpdateAddr}
          SaveOrUpdate={SaveOrUpdate}
          loading={loading}
          Default={Default}
          setDefault={setDefault}
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
          handleSave={handleSave}
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
    </section>
  )
}
export default PageAddress
