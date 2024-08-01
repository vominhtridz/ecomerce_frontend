import { ChangeEvent, FormEvent, useState } from "react"
import CheckFormInput from "./CheckFormInput"
import { useNavigate } from "react-router-dom"
import { useMyContext } from "../../../context/context"
import EmailInput from "../../../components/Input/User/EmailInput"
import ConfirmPwd from "./Confirmpwd"
import ButtonRegister from "../../../components/button/RegisterBtn"
import { RegisterUser } from "../../../apis/apis"
import UserName from "../../../components/Input/User/UserName"
import PasswordInput from "../../../components/Input/User/Password"
import { VNPhoneNumberRegex, VietnameseRegex, emailRegex, pwdRegex } from "@/components/Regex"
import { handleFailLabel, handleCuccessLabel } from "@/components/func/funcVisiLabel"
import PhoneNumberInput from "@/components/Input/User/PhoneNumberRegi"
import { usersTypes } from "@/typescript/UserTypes"
const RegisterInput = () => {
  const navigate = useNavigate()
  const { langCode, setVisiCuccessLabel, setVisilFailLabel, setMessageLabel } = useMyContext()
  const [pwd, setpwd] = useState<string>("")
  const [email, setEmail] = useState<string>("")
  const [username, setUserName] = useState<string>("")
  const [conFirmPwd, setConFirmPwd] = useState<string>("")
  const [phonenumber, setPhoneNumber] = useState<string>("")
  const [conFirmPwdError, setconFirmPwdError] = useState<boolean>(false)
  const [emailError, setEmailError] = useState<boolean>(false)
  const [phonenumErr, setPhoneNumErr] = useState<boolean>(false)
  const [usernameErr, setUserNameErr] = useState<boolean>(false)
  const [pwdError, setpwdError] = useState<boolean>(false)
  function handleRegister(e: FormEvent) {
    e.preventDefault()
    setEmailError(false)
    setpwdError(false)
    setconFirmPwdError(false)

    if (checkInformation() == false) return
    const option: usersTypes = { email, pwd, username, phonenumber: phonenumber.toString() }
    RegisterUser(option)
      .then(respone => {
        console.log(respone)
        navigate(`/${langCode}/login`)
        handleCuccessLabel("Đăng Kí thành công !", 3500, setMessageLabel, setVisiCuccessLabel)
      })
      .catch(err => {
        console.log(err)
        const data = err.response.data
        handleFailLabel(data.message, 3500, setMessageLabel, setVisilFailLabel)
        return
      })
  }
  const Changepwd = (e: ChangeEvent<HTMLInputElement>) => setpwd(e.target.value)
  const ChangeConfirm = (e: ChangeEvent<HTMLInputElement>) => setConFirmPwd(e.target.value)
  const ChangeEmail = (e: ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)
  const ChangeUserName = (e: ChangeEvent<HTMLInputElement>) => setUserName(e.target.value)
  const ChangePhoneNumber = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    const valueStartsWithZero = value.startsWith("0")
    const isValidPhoneNumber = VNPhoneNumberRegex.test("84" + value)
    if (value.length === 0) {
      setPhoneNumber("")
      setPhoneNumErr(false)
    } else if (value.length > 10) {
      setPhoneNumErr(true)
      setPhoneNumber(value.substring(0, 10))
    } else if (!valueStartsWithZero) {
      setPhoneNumber("0" + value)
    } else {
      setPhoneNumber(value)
      setPhoneNumErr(!isValidPhoneNumber)
    }
  }
  const checkInformation = () => {
    const inputWithoutSpaces = username.replace(/\s/g, "")
    if (!/^[a-zA-Z0-9]+$/.test(inputWithoutSpaces) && !VietnameseRegex.test(username)) {
      setUserNameErr(true)
      return false
    } else setUserNameErr(false)

    if (!emailRegex.test(email)) {
      setEmailError(true)
      return false
    } else setEmailError(false)
    //Check pwd
    if (!pwdRegex.test(pwd)) {
      setpwdError(true)
      return false
    } else setpwdError(false)
    // check Confirm pwd
    if (pwd !== conFirmPwd) {
      setconFirmPwdError(true)
      return false
    } else setconFirmPwdError(false)
  }
  return (
    <div className=''>
      <h1 className='flex justify-center items-center text-4xl text-slate-600 uppercase font-bold'>Register</h1>
      <CheckFormInput
        pwdError={pwdError}
        emailError={emailError}
        conFirmPwdError={conFirmPwdError}
        phonenumErr={phonenumErr}
        usernameErr={usernameErr}
      />
      <form className='py-6 px-96 ' onSubmit={handleRegister}>
        <UserName userName={username} ChangeUserName={ChangeUserName} error={usernameErr} />
        <EmailInput email={email} ChangeEmail={ChangeEmail} error={usernameErr} />
        <PasswordInput pwd={pwd} Changepwd={Changepwd} error={pwdError} />
        <ConfirmPwd conFirmPwd={conFirmPwd} ChangeConfirm={ChangeConfirm} />
        <PhoneNumberInput ChangePhoneNumber={ChangePhoneNumber} phoneNumber={phonenumber} error={phonenumErr} />
        <ButtonRegister handleRegister={handleRegister} />
      </form>
    </div>
  )
}
export default RegisterInput
