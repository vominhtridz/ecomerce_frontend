import { FC } from "react"
import NameAndAddress from "./NameAndAddress"
import EmailAndPhoneNumber from "./EmailAndPhoneNumber"
import VerifyPhoneNumber from "../../../../../components/Input/VerifyPhoneNumber"
import SendBtn from "../../../../../components/button/SendBtn"
import { AddInforShopSellerTypes } from "../../../../../typescript/AddressTypes"
import ResendLater from "../../../../../components/button/ResendLater"

const AddInforShopSeller: FC<AddInforShopSellerTypes> = ({
  handleChangeAdress,
  handleChangeName,
  nameShopInput,
  ChangeEmail,
  email,
  phoneNumber,
  PhoneNumerBoolean,
  sendingTime,
  ChangePhoneNumber,
  verifyCode,
  ChangeVerify,
  handleSend,
  handleFixedAddress,
  checkVeriPhoneNum,
}) => {
  return (
    <div className='border-b border-slate-300 pb-10 w-full'>
      <div className='pl-36'>
        <NameAndAddress
          handleFixedAddress={handleFixedAddress}
          handleChangeAdress={handleChangeAdress}
          handleChangeName={handleChangeName}
          nameShopInput={nameShopInput}
        />
        {/* email */}
        <EmailAndPhoneNumber
          checkVeriPhoneNum={checkVeriPhoneNum}
          ChangeEmail={ChangeEmail}
          email={email}
          PhoneNumerBoolean={PhoneNumerBoolean}
          PhoneNumber={phoneNumber}
          ChangePhoneNumber={ChangePhoneNumber}
        />
        {/* verify code */}
        {!checkVeriPhoneNum && (
          <div className='flex items-center '>
            <div className='px-6 ml-[7.4rem]'>
              <VerifyPhoneNumber verifyCode={verifyCode} ChangeVerify={ChangeVerify} />
            </div>

            <div className='flex items-center'>
              {PhoneNumerBoolean || sendingTime === 0 || sendingTime == 60 ? (
                <SendBtn handleSend={handleSend} />
              ) : (
                <ResendLater time={sendingTime} />
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default AddInforShopSeller
