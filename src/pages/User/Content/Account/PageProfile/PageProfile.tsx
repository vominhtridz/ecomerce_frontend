import { FormEvent, useEffect, useState } from "react"
import { useMyContext } from "../../../../../context/context"
import { UserImage } from "./Image/SetUpUserImage"
import ItemsOfProfile from "./ItemsOfProfile"
import SaveInfoBtn from "./button/SaveBtn"
import { handleCuccessLabel, handleFailLabel } from "@/components/func/funcVisiLabel"
import { ChangeUserProfile } from "@/apis/apis"
import { usersTypes } from "@/typescript/UserTypes"
import { Storage } from "@/Firebase/Firebase"
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage"
export const PageProfile = () => {
  let { dataUser, setDataUser, setMessageLabel, setVisilFailLabel, setVisiCuccessLabel } = useMyContext()
  let [img, setImg] = useState<string | any>(dataUser?.img as string)
  let [file, setFile] = useState<any>({})
  let [username, setUserName] = useState<string | any>(dataUser?.username as string)
  let [defaultName, setDefaultName] = useState<string | any>(dataUser?.defaultName as string)
  let [gender, setGender] = useState<string | any>(dataUser?.gender as string)
  let [day, setDay] = useState<string>("")
  let [month, setMonth] = useState<string>("")
  let [year, setYear] = useState<string>("")
  const [userNameErr, setUserNameErr] = useState<boolean>(false)
  const [loading, setLoading] = useState<boolean>(false)
  /// -----------------------------CALLBACK WHEN BIRTHDAY CHANGE ------------------------

  useEffect(() => {
    const newDate = new Date(dataUser?.birthday as string)
    const format = newDate.toLocaleDateString("en-US", { year: "numeric", month: "numeric", day: "numeric" })
    const [m, d, y] = format.split("/")
    setDay(d)
    setMonth(m)
    setYear(y)
  }, [])
  console.log(dataUser)
  /// -----------------------------HANDLE SAVE ------------------------
  const handleSave = (e: FormEvent<HTMLButtonElement | HTMLFormElement>) => {
    e.preventDefault()
    if (userNameErr) {
      handleFailLabel("tên đăng nhập không được có dấu cách", 2000, setMessageLabel, setVisilFailLabel)
      return
    }
    setLoading(true)
    /// ----------------------------- PATH STORE FILE AND UPLOAD IT TO FIREBASE STORAGE ------------------------
    const storageRef = ref(Storage, `/files/${file.name}`)
    const uploadTask = uploadBytesResumable(storageRef, file)
    // ------------------------ HANDLE GET URL AND SEND FORM DATA TO BACKEND --------------------
    getDownloadURL(uploadTask.snapshot.ref).then((url: URL | any) => {
      HandleSendData(url)
    })
  }
  // ----------------------------------- HANDLE SEND DATA TO BACKEND --------------------------
  function HandleSendData(url: URL) {
    const additionOneChange = username != dataUser?.username || dataUser?.onechangename == true ? 1 : 0
    let UserData = {
      img: url.toString(),
      username: username,
      defaultName: defaultName,
      gender: gender,
      onetimes: additionOneChange,
      email: dataUser?.email as string,
      birthday: `${year}/${month}/${day}`,
    }
    // ------------------------- CALL API---------------------------
    ChangeUserProfile(UserData)
      .then(res => {
        const logCuccess = res ? res.data.message : "Lưu thành công"
        const basicUsers = JSON.stringify({
          defaultName: defaultName,
          userid: res.data.data[0].userid,
          LoggedIn: true,
        })
        // --------------------------- SET VALUE TO LOCALSTRANGE  AND VISIBLE SUCCESS LABEL---------
        localStorage.setItem("basicUsers", basicUsers)
        setLoading(false)
        handleCuccessLabel(logCuccess, 2000, setMessageLabel, setVisiCuccessLabel)
        setDataUser(res.data.data[0] as usersTypes)
      })
      .catch(err => {
        const logErr = err ? err.response.data.message : "lỗi hệ thống"
        console.log(err)
        setLoading(false)
        handleFailLabel(logErr, 2000, setMessageLabel, setVisilFailLabel)
      })
  }

  /// -----------------------------RENDER ELEMENT ------------------------

  return (
    <form onSubmit={handleSave} encType='multipart/form-data' className=' bg-white '>
      <nav className='px-6 py-4 border-b  vorder-slate-400'>
        <h2 className='text-[19px]   '>Hồ sơ của tôi</h2>
        <p className='text-[12px] '>Quản lý thông tin hồ sơ để bảo mật tài khoản</p>
      </nav>
      <div className='rounded-sm flex  text-slate-700 px-6 py-4 w-full'>
        <ItemsOfProfile
          setUserNameErr={setUserNameErr}
          userNameErr={userNameErr}
          userName={username}
          setUserName={setUserName}
          defaultName={defaultName}
          setDefaultName={setDefaultName}
          day={day}
          month={month}
          year={year}
          setMonth={setMonth}
          setYear={setYear}
          setDay={setDay}
          setGender={setGender}
          gender={gender}
        />
        <UserImage img={img} file={file} setFile={setFile} setImg={setImg} />
      </div>
      <div className='pl-20 pb-4'>
        <SaveInfoBtn handleSave={handleSave} loading={loading} />
      </div>
    </form>
  )
}
export default PageProfile
