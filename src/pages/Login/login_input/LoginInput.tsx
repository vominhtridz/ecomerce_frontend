import { ChangeEvent, FormEvent, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { useMyContext } from "../../../context/context"
import PasswordInput from "../../../components/Input/User/Password"
import ButtonLogin from "../../../components/button/loginBtn"
import CheckFormInput from "./CheckConfirmLogin"
import { UserLoggedIn } from "../../../apis/apis"
import { checkNumberRegex } from "@/components/Regex"
import NameLoginInput from "../../../components/Input/User/NameLoginInput"
import GOOGLELOGIN from "../GoogleLogin"
import { handleCuccessLabel, handleFailLabel } from "@/components/func/funcVisiLabel"
import { usersTypes } from "@/typescript/UserTypes"
import { LoadingIcon } from "@/images/centerIcons"
const LoginInput = () => {
  const navigate = useNavigate()
  const { langCode, setDataUser, setMessageLabel, setVisilFailLabel, setVisiCuccessLabel } = useMyContext()
  const [value, setValue] = useState<string>("")
  const [pwd, setpwd] = useState<string>("")
  const [emailError, setEmailError] = useState<boolean>(false)
  const [pwdErr, setpwdErr] = useState<boolean>(false)
  const [Incorect, setIncorect] = useState<boolean>(false)
  const [loading, setloading] = useState<boolean>(false)
  //---------------------------- HANDLE LOGIN  ---------------------
  const handleLogin = (e: FormEvent) => {
    e.preventDefault()
    e.stopPropagation()
    if (pwd.length < 8) {
      setpwdErr(true)
      handleFailLabel("Mật khẩu quá ngắn !", 3500, setMessageLabel, setVisilFailLabel)
      return
    }
    setloading(true)
    // check value is phone number ?
    const checkValue = checkNumberRegex.test(value) == true ? value.slice(1, value.length) : value
    UserLoggedIn({ value: checkValue, pwd })
      .then(res => {
        const basicUsers = JSON.stringify({
          defaultName: res.data[0].defaultName,
          userid: res.data[0].userid,
          LoggedIn: true,
        })
        setDataUser(res.data[0] as usersTypes)
        // SET LOCALSTRANGE VALUE
        localStorage.setItem("basicUsers", basicUsers)
        handleCuccessLabel("Đăng nhập thành công !", 3500, setMessageLabel, setVisiCuccessLabel)
        // alter 2 second move home page
        setTimeout(() => {
          setValue("")
          setpwd("")
          setloading(false)
          navigate(`/${langCode}`)
        }, 2500)
      })
      .catch(err => {
        setloading(false)
        handleFailLabel(err.response.data.message, 3500, setMessageLabel, setVisilFailLabel)
      })
  }
  const Changepwd = (e: ChangeEvent<HTMLInputElement>) => setpwd(e.target.value)
  const ChangeValue = (e: ChangeEvent<HTMLInputElement>) => setValue(e.target.value)
  //----------------------------RENDER ELEMENT----------------------
  return loading ? (
    <p className='text-4xl h-[100vh] flex items-center justify-center text-blue-400 shadow w-full uppercase'>{LoadingIcon}</p>
  ) : (
    <div className='pb-20'>
      <h1 className='flex justify-center items-center text-3xl text-slate-600 uppercase font-bold '>
        <p className='shadow-sm'>Login member</p>
      </h1>
      <CheckFormInput emailError={emailError} Incorect={Incorect} />
      <form onSubmit={handleLogin} className=' px-96'>
        <NameLoginInput value={value} ChangeValue={ChangeValue} />
        <PasswordInput pwd={pwd} Changepwd={Changepwd} error={pwdErr} />
        <ButtonLogin handleLogin={handleLogin} />
      </form>
      <div className='flex item-center justify-between   mt-2.5 px-96'>
        <Link to={`/${langCode}/resetpwd`} className='text-sm pt-2.5  text-blue-500 hover:underline'>
          Forgot Password
        </Link>
        <div className='flex items-center'>
          <p className='pr-2 text-sm'>login with</p>
          <GOOGLELOGIN setloading={setloading} />
        </div>
      </div>
    </div>
  )
}
export default LoginInput
