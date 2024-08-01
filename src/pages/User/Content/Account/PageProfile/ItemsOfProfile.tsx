import { ChangeEvent } from "react"
import AccountUserName from "./Input/AccountUserName"
import AddPhoneNumber from "./button/AddPhoneNumber"
import PartSex from "./Input/Sex"
import UserEmail from "./button/Email"
import BirthdayField from "./Input/BirthDay"
import { ProfileItemsType } from "@/typescript/UserTypes"
import DefaultName from "./Input/defaultName"
import { checkSpaceRegex } from "@/components/Regex"
export const ItemsOfProfile = ({
  userName,
  defaultName,
  day,
  month,
  setUserName,
  year,
  setGender,
  setDay,
  setMonth,
  setYear,
  setDefaultName,
  userNameErr,
  setUserNameErr,
  gender,
}: ProfileItemsType) => {
  const Notification = userNameErr ? "tên đăng nhập không được có dấu cách." : "Tên Đăng Nhập chỉ được thay đổi 1 lần."
  const errusername = userNameErr ? "text-red-500" : "text-black"
  const handleGenderChange = (e: string) => setGender(e)
  const ChangeUserName = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    if (value.length >= 16) return
    // check space
    else if (checkSpaceRegex.test(value)) setUserNameErr(true)
    else {
      setUserName(value)
      setUserNameErr(false)
    }
  }
  const ChangeDay = (e: ChangeEvent<HTMLSelectElement>) => setDay(e.target.value)
  const ChangeMonth = (e: ChangeEvent<HTMLSelectElement>) => setMonth(e.target.value)
  const ChangeYear = (e: ChangeEvent<HTMLSelectElement>) => setYear(e.target.value)
  const ChangeDefaultName = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    if (value.length >= 16) return
    else setDefaultName(value)
  }
  return (
    <div className='py-6 pr-16 pl-6 text-sm  text-black'>
      <AccountUserName ChangeUserName={ChangeUserName} userName={userName} userNameErr={userNameErr} />
      <p className={`${errusername} ml-28 text-[11px]  leading-3 itlaic`}>{Notification}</p>
      <DefaultName defaultName={defaultName} ChangeDefaultName={ChangeDefaultName} />
      <UserEmail />
      <AddPhoneNumber />
      <PartSex handleGenderChange={handleGenderChange} gender={gender} />
      <BirthdayField ChangeDay={ChangeDay} ChangeMonth={ChangeMonth} ChangeYear={ChangeYear} day={day} month={month} year={year} />
    </div>
  )
}
export default ItemsOfProfile
