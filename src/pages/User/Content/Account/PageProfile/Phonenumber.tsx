import PhoneNumberInput from "@/components/Input/PhoneNumberInput"
import { useMyContext } from "../../../../../context/context"
import { ChangeEvent, FormEvent, useEffect, useState } from "react"
import SendBtn from "@/components/button/SendBtn"
import { VNPhoneNumberRegex } from "@/components/Regex"
import { handleCuccessLabel, handleFailLabel } from "@/components/func/funcVisiLabel"
import { ChangePhoneNumber } from "@/apis/apis"
import { useNavigate } from "react-router-dom"

export const UserPhoneNunber = () => {
  const navigate = useNavigate()
  const { langCode, dataUser, setDataUser, setMessageLabel, setVisiCuccessLabel, setVisilFailLabel } = useMyContext()
  const [number, setNumber] = useState<string>(dataUser?.phonenumber || "")
  const [disable, setDisable] = useState<boolean>(false)
  const [loading, setLoading] = useState<boolean>(false)
  const [error, setError] = useState<boolean>(false)
  useEffect(() => {}, [setDataUser])
  const handleSend = (e: FormEvent<HTMLButtonElement | HTMLFormElement>) => {
    e.preventDefault()
    if (error || number.length < 10) {
      handleCuccessLabel("Số điện thoại không hợp lệ!", 3000, setMessageLabel, setVisilFailLabel)
      return
    }
    setDisable(true)
    setLoading(true)
    const cutzero = number.slice(1, number.length)
    ChangePhoneNumber({ phonenumber: cutzero, email: dataUser?.email })
      .then(() => {
        setLoading(false)
        setDisable(false)
        handleCuccessLabel("Gửi mã thành công !", 3000, setMessageLabel, setVisiCuccessLabel)
        navigate(`/${langCode}/user/account/profile`)
      })
      .catch(err => {
        handleFailLabel(err.response.data.message, 3000, setMessageLabel, setVisilFailLabel)
        setLoading(false)
        setDisable(false)
      })
  }
  const ChangeNumber = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    const valueStartsWithZero = value.startsWith("0")
    if (value.length > 10) return
    const isValidPhoneNumber = VNPhoneNumberRegex.test("84" + value)
    if (value.length === 0) {
      setNumber("")
      setError(false)
    } else if (value.length > 10) {
      setError(true)
      setNumber(value.substring(0, 10))
    } else if (!valueStartsWithZero) {
      setNumber("0" + value)
    } else {
      setNumber(value)
      setError(!isValidPhoneNumber)
    }
  }

  return (
    <div className='bg-white'>
      <h2 className='text-[19px]  px-6 py-4 border-b  vorder-slate-400 '>Thay đổi số điện thoại</h2>
      <div className='py-4 px-2 flex '>
        <label htmlFor={`userpn`} className='text-base font-normal pt-1'>
          - Số điện thoại mới
        </label>
        <form onSubmit={handleSend} className='w-1/3 pl-6'>
          <div className=''>
            <PhoneNumberInput handleChangeNumber={ChangeNumber} number={number} disable={disable} error={error} />
          </div>
          <p className='py-1'></p>
          <SendBtn handleSend={handleSend} loading={loading} />
        </form>
      </div>
    </div>
  )
}
export default UserPhoneNunber
