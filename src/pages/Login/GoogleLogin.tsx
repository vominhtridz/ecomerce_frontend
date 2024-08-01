import { UserLoggedIn } from "@/apis/apis"
import { handleCuccessLabel, handleFailLabel } from "@/components/func/funcVisiLabel"
import { useMyContext } from "@/context/context"
import JwtPayload from "@/typescript/AuthenticationType"
import { usersTypes } from "@/typescript/UserTypes"
import { GoogleLogin } from "@react-oauth/google"
import { jwtDecode } from "jwt-decode"
import { useNavigate } from "react-router-dom"
import Cookies from "universal-cookie"
interface googleType {
  setloading: (e: boolean) => void
}
const GOOGLELOGIN = ({ setloading }: googleType) => {
  const cookies = new Cookies()
  const { langCode, setDataUser, setMessageLabel, setVisiCuccessLabel, setVisilFailLabel } = useMyContext()
  const navigate = useNavigate()
  return (
    <GoogleLogin
      onSuccess={credentialResponse => {
        const credentialResponseDecoded = jwtDecode<JwtPayload>(credentialResponse.credential as any)
        console.log(credentialResponseDecoded)
        const defaultName = credentialResponseDecoded.name
        const email = credentialResponseDecoded.email
        const img = credentialResponseDecoded.picture
        setloading(true)
        UserLoggedIn({ defaultName, email, img, googlelogin: true } as usersTypes)
          .then(res => {
            const basicUsers = JSON.stringify({
              defaultName: res.data[0].defaultName,
              userid: res.data[0].userid,
              LoggedIn: true,
            })
            setDataUser(res.data[0] as usersTypes)
            localStorage.setItem("basicUsers", basicUsers)
            cookies.set("loggedIn", "true", { path: "/", maxAge: 30 * 24 * 60 * 60 })
            handleCuccessLabel("Đăng nhập thành công !", 3500, setMessageLabel, setVisiCuccessLabel)
            setTimeout(() => {
              setloading(false)
              navigate(`/${langCode}`)
            }, 2500)
          })
          .catch(err => {
            console.log(err)
            handleFailLabel("Lỗi đăng nhập !", 3500, setMessageLabel, setVisilFailLabel)
          })
      }}
      onError={() => {
        handleFailLabel("Lỗi đăng nhập !", 3500, setMessageLabel, setVisilFailLabel)
      }}
    />
  )
}
export default GOOGLELOGIN
