import CheckFormInputTypes from "@/typescript/CheckFormInputType"
import { FC } from "react"
const CheckFormInput: FC<CheckFormInputTypes> = ({
  emailError,
  pwdError,
  conFirmPwdError,
  phonenumErr,
  usernameErr,
}) => {
  return (
    <p className='flex justify-center flex-col items-center   text-red-500'>
      {emailError && (
        <span className='block'>- Email is reguired: obligatory have @gmail.com example jest@gmail.com.</span>
      )}
      {phonenumErr && <span className='block'>- Phone Number should be 10 digits</span>}
      {usernameErr && (
        <span className='block'>- User must be not have spaces and contains accents ex:vantruong123</span>
      )}
      {pwdError && (
        <span className='block'>
          - Password: must contain at least one letter and one number, and be at least 6 characters long.
        </span>
      )}
      {conFirmPwdError && <span className='block'>- password: does not match with confirm Password. </span>}
    </p>
  )
}
export default CheckFormInput
