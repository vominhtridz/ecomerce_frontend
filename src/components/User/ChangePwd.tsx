import { useNavigate, useParams } from "react-router-dom"
import { ChangeEvent, FormEvent, useEffect, useState } from "react"
import { ContainLanguages } from "../../languages/Languages"
import { languageType } from "../../typescript/language"
import { useMyContext } from "../../context/context"
import { LoadingIcon } from "../../images/centerIcons"
import PasswordInput from "../Input/User/Password"
import SendBtn from "../button/SendBtn"
import ConfirmPwd from "@/pages/Register/Input/Confirmpwd"
import { handleCuccessLabel, handleFailLabel } from "../func/funcVisiLabel"
import { ResetPwdUser } from "@/apis/apis"
export const ChangePwdPage = () => {
  const { lang } = useParams()
  const navigate = useNavigate()
  const { setLanguage, dataUser, setLangCode, setMessageLabel, setVisiCuccessLabel, setVisilFailLabel } = useMyContext()
  const [loading, setLoading] = useState<boolean>(false)
  const [loadingPage, setLoadingPage] = useState<boolean>(false)
  const [pwdErr, setPwdErr] = useState<boolean>(false)
  const [confirmPwdErr, setConfirmPwdErr] = useState<boolean>(false)
  const [pwd, setpwd] = useState<string>("")
  const [confirmpwd, setConfirmPwd] = useState<string>("")
  // -------------------------------SET LANGUAGE ----------------------------------------
  useEffect(() => {
    try {
      if (lang && ContainLanguages.hasOwnProperty(lang)) {
        setLanguage(ContainLanguages[lang] as languageType)
        setLangCode(lang)
      }
    } catch (error) {
      console.error("Error parsing JSON:", error)
    }
  }, [setLanguage, setLangCode])
  // -------------------------------HANDLE CHANGE PASSWORD  ----------------------------------------
  const handleChangePwd = (e: FormEvent<HTMLFormElement | HTMLButtonElement>) => {
    e.preventDefault()
    if (pwd == "") {
      setPwdErr(true)
      return
    }
    if (confirmpwd != pwd) {
      setConfirmPwdErr(true)
      return
    }
    setLoading(true)
    const option = { newpwd: pwd, userid: dataUser?.userid, oldpwd: dataUser?.pwd }
    ResetPwdUser(option)
      .then(res => {
        const logCuccess = res ? res.data.message : "Đổi mật khẩu thành công."
        setLoading(false)
        setLoadingPage(true)
        handleCuccessLabel(logCuccess, 2500, setMessageLabel, setVisiCuccessLabel)
        setpwd("")
        setConfirmPwd("")
        setTimeout(() => {
          setLoadingPage(false)
          navigate(`/${lang}/user/account/profile`)
        }, 1000)
      })
      .catch(err => {
        const logErr = err ? err.response.data.message : "lỗi hệ thống"
        setLoading(false)
        handleFailLabel(logErr, 600, setMessageLabel, setVisilFailLabel)
      })
  }
  const changeConfirmpwd = (e: ChangeEvent<HTMLInputElement>) => {
    setConfirmPwdErr(false)
    setConfirmPwd(e.target.value)
  }
  const Changepwd = (e: ChangeEvent<HTMLInputElement>) => {
    setPwdErr(false)
    setpwd(e.target.value)
  }
  // -------------------------------RENDER ELEMENT ----------------------------------------
  return loadingPage ? (
    <p className='text-7xl h-[30rem] flex items-center justify-center text-blue-400 shadow w-full uppercase'>{LoadingIcon}</p>
  ) : (
    <section className='min-h-[54vh] mt-6 flex items-center justify-center'>
      <div className=' w-[35rem] justify-center px-4 py-2 rounded-md shadow border border-gray-10 0 '>
        <div className='pt-1 pb-5 px-6'>
          <h1 className='text-2xl px-4 py-4 flex items-center justify-center  mx-auto text-slate-800'>Đặt lại mật khẩu</h1>
          <form action='' onSubmit={handleChangePwd} className=''>
            <div className='relative mb-4 pt-2'>
              <label
                htmlFor='password'
                className={`${pwdErr ? "text-red-500" : ""} text-[10px] absolute left-1 top-[-8px] z-20 px-1 bg-white`}
              >
                Mật khẩu
              </label>
              <PasswordInput error={pwdErr} Changepwd={Changepwd} pwd={pwd} />
              {pwdErr && <p className='text-[10px] leading-4 pl-1.5 text-red-500 m-0'>Mật khẩu không được để trống.</p>}
            </div>
            <div className='relative my-2'>
              <label
                htmlFor='password'
                className={`${confirmPwdErr ? "text-red-500" : ""} text-[10px] absolute left-1 top-[-8px] z-20 px-1 bg-white`}
              >
                Xác nhận mật khẩu
              </label>
              <ConfirmPwd error={confirmPwdErr} ChangeConfirm={changeConfirmpwd} conFirmPwd={confirmpwd} />
              {confirmPwdErr && <p className='text-[10px] leading-4 pl-1.5 text-red-500 m-0'>Mật khẩu không khớp.</p>}
            </div>
            <SendBtn handleSend={handleChangePwd} loading={loading} />
          </form>
        </div>
      </div>
    </section>
  )
}
export default ChangePwdPage
