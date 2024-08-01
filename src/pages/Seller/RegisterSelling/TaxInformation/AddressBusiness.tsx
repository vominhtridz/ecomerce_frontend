import AddAddress from "@/components/AddressBox/AddAddress/AddAddress"
import ChangeAddressBox from "@/components/AddressBox/AddAddress/ChangeAddressBox"
import { ChangeEvent, useState } from "react"

const AddressBusiness = () => {
  const [visiAddress, setVisiAddress] = useState<boolean>(false)
  const [Ward, setWard] = useState<string>("")
  const [Province, setProvince] = useState<string>("")
  const [district, setDistrict] = useState<string>("")
  const handleShowAddress = () => setVisiAddress(!visiAddress)
  return (
    <nav className='flex  py-2'>
      <div className='flex pt-1 mr-4 whitespace-nowrap w-[11rem] justify-end text-[13.5px]'>
        <p className='text-lg text-red-500'>*</p>
        Địa chỉ đăng ký kinh doanh
      </div>
      <div className='w-1/2'>
        <AddAddress
          isvisibleText={true}
          handleShowAddress={handleShowAddress}
          visiAddress={visiAddress}
          setVisiAddress={setVisiAddress}
          Ward={Ward}
          setWard={setWard}
          Province={Province}
          setProvince={setProvince}
          district={district}
          setDistrict={setDistrict}
        />
        <textarea
          data-v-0ea4e9de=''
          placeholder='Số nhà, tên đường, vv...'
          rows={2}
          className='w-full border px-4 py-1.5 mt-2 text-[13px] border-gray-200 outline-none'
        ></textarea>
      </div>
    </nav>
  )
}

export default AddressBusiness
