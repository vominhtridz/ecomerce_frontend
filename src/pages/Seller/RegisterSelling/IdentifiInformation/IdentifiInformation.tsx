import BackBtn from "@/components/button/BackBtn"
import { ChangeEvent, useState } from "react"
import NextBtn from "@/components/button/NextBtn"
import FormIdentifi from "./FormIdentifi"
import CCCDNumber from "./CCCDNumber"
import FistAndLastName from "./FistAndLastName"
import ImgVerifiBeHold from "./ImgVerifiBeHold"
import ImgVerifi from "./ImgVerifi"
import CusCheckBox from "@/components/Input/CusCheckBox"
import CheckBox from "@/components/Input/CheckBox"
import CMNDNumber from "./CMNDNumber"
import PassPortNumber from "./PassPortNumber"
import SaveShopBtn from "@/components/button/SaveShopBtn"
import CompleteBtn from "@/components/button/CompleteBtn"
import SaveWhiteBtn from "@/components/button/SaveWhiteBtn"

const IdentifiInfor = () => {
  const [loading, setLoading] = useState<boolean>(false)
  const [formIdentifi, setFormIdentifi] = useState<string>("CCCD")
  const [CCCDErr, setCCCDErr] = useState<boolean>(false)
  const [CMNDErr, setCMNDErr] = useState<boolean>(false)
  const [PassPortErr, setPassPortErr] = useState<boolean>(false)
  const [ImgCCCDErr, setImgCCCDErr] = useState<boolean>(false)
  const [ImgHoldErr, setImgHoldErr] = useState<boolean>(false)
  const [NameErr, setNameErr] = useState<boolean>(false)
  const [Checked, setChecked] = useState<boolean>(false)
  const handleBack = () => {}
  const handleSave = () => {}
  const handleComplete = () => {}
  const ChangeChecked = (e: ChangeEvent<HTMLInputElement>) => setChecked(e.target.checked)
  return (
    <div className='pt-4 px-14'>
      <div className='pl-14'>
        {/* -----------ROUTE---------- */}
        <FormIdentifi setFormIdentifi={setFormIdentifi} formIdentifi={formIdentifi} />
        {/* -----------OPTION---------- */}
        {formIdentifi == "CCCD" ? <CCCDNumber CCCDErr={CCCDErr} /> : ""}
        {formIdentifi == "CMND" ? <CMNDNumber CMNDErr={CMNDErr} /> : ""}
        {formIdentifi == "passport" ? <PassPortNumber PassPortErr={PassPortErr} /> : ""}

        <FistAndLastName NameErr={NameErr} />
        <ImgVerifi ImgCCCDErr={ImgCCCDErr} />
        <ImgVerifiBeHold ImgHoldErr={ImgHoldErr} />
        <div className='flex items-center bg-gray-50 my-2 px-2 py-2 rounded-md'>
          <CheckBox changeValue={ChangeChecked} check={Checked} id='identifiAll' />
          <label htmlFor='identifiAll' className='text-[12.5px] select-none px-2'>
            Tôi xác nhận tất cả dữ liệu đã cung cấp là chính xác và trung thực. Tôi đã đọc và đồng ý với Chính Sách Bảo Mật của Sango.
          </label>
        </div>
      </div>

      <div className='flex justify-between pt-8'>
        <BackBtn handleBack={handleBack} />
        <div className='flex'>
          <div className='px-4'>
            <SaveWhiteBtn handleSave={handleSave} loading={loading} />
          </div>
          <CompleteBtn handleComplete={handleComplete} />
        </div>
      </div>
    </div>
  )
}

export default IdentifiInfor
