import { AmericanExpressIcon, CardIcon, JCBIcon, VisaIcon } from "@/images/centerIcons"
import CartNumber from "../../../../../components/Input/User/CartNumber"
import { ChangeEvent, memo } from "react"
import ExpirationDay from "../../../../../components/Input/User/ExpirationDay"
import CodeCvvInput from "../../../../../components/Input/User/CodeCvv"
import InputCustom from "../../../../../components/Input/InputCustom"
import AddressInput from "../../../../../components/Input/User/AddressInput"
import PrimaryPost from "../../../../../components/Input/User/PrimaryPost"
import BackBtn from "../../../../../components/button/BackBtn"
import SendBtn from "../../../../../components/button/SendBtn"
import validator from "validator"
import { VietnameseRegex, checkNumberRegex } from "@/components/Regex"
import { CardBoxType } from "@/typescript/UserTypes"
const listCards = [VisaIcon, CardIcon, JCBIcon, AmericanExpressIcon]
const CardBox = ({
  cardNum,
  valueDay,
  codeCvv,
  Name,
  address,
  primaryCode,
  cardErr,
  setCardNum,
  setValueDay,
  setCodeCvv,
  setName,
  setAddress,
  setPrimaryCode,
  setCardErr,
  setNameErr,
  setprimaryPostErr,
  NameErr,
  handleSend,
  loading,
  primaryPostErr,
  handleBack,
}: CardBoxType) => {
  const getCardIcon = () =>
    listCards.map((icon, index) => (
      <div key={index} className='px-1 text-2xl'>
        {icon}
      </div>
    ))
  const changeCardNum = (value: string) => {
    if (validator.isCreditCard(value)) {
      setCardErr(false)
    } else {
      setCardErr(true)
    }
    setCardNum(value)
  }
  const ChangeValueDay = (value: string) => {
    if (value.length == 6) {
      return
    }
    if (!checkNumberRegex.test(value)) {
      if (value == "") setValueDay("")
      setValueDay(value.slice(-1) == "/" ? value.slice(0, -1) : value)
      return
    }
    if (value.length == 2) {
      setValueDay(value + "/")
      return
    }
    setValueDay(value)
  }
  const ChangeCodeCvv = (value: string) => {
    if (value.length > 3) return
    if (!checkNumberRegex.test(value)) {
      if (value == "") setCodeCvv("")
      return
    }
    setCodeCvv(value)
  }
  console.log("CHECK RERENDER CARD BOX")
  const ChangeName = (value: string) => {
    if (!VietnameseRegex.test(value)) {
      setNameErr(true)
      setName(value)
    } else {
      setNameErr(false)
      setName(value)
    }
  }
  const ChangeAddress = (e: ChangeEvent<HTMLInputElement>) => setAddress(e.target.value)
  const ChangePrimaryCode = (value: string) => {
    if (value.length > 6) return
    if (!checkNumberRegex.test(value)) {
      setprimaryPostErr(true)
      if (value == "") setPrimaryCode("")
    } else {
      setprimaryPostErr(false)
      setPrimaryCode(value)
    }
  }
  return (
    <div className='fixed z-30 left-0 right-0 top-0 bottom-0 '>
      <div className='absolute z-50 top-12 left-1/3 w-1/3 h-[80%] bg-white shadow rounded-sm px-4 py-2 overflow-y-auto border border-gray-200'>
        <h2 className='py-2 px-1 text-xl'>Thêm thẻ</h2>
        <div className=' py-2 px-4 border bg-green-50 border-green-300 shadow-sm text-[11.5px] text-slate-500'>
          Thông tin thẻ của bạn được bảo vệ. Sango không truy cập vào thẻ cá nhân của bạn.
        </div>
        <div className='flex items-center justify-between py-4'>
          <label htmlFor='' className='text-base text-slate-700'>
            Chi tiết thẻ
          </label>
          <div className='flex items-center'>{getCardIcon()}</div>
        </div>
        <form onSubmit={handleSend} className=''>
          <div className='relative'>
            <CartNumber cartNum={cardNum} error={cardErr} ChangeCartNum={changeCardNum} />
            <label
              htmlFor='cardnumber'
              className={`${cardErr ? "text-red-500" : ""} text-[10px] absolute left-1 top-[-8px] z-20 px-1 bg-white`}
            >
              Số thẻ
            </label>
            {cardErr && <p className='text-[11px] leading-4 pl-1 text-red-500 m-0'>số thẻ không chính xác</p>}
          </div>

          <div className='flex items-center my-4 '>
            <div className='relative mr-2 w-full'>
              <ExpirationDay valueday={valueDay} ChangeValueDay={ChangeValueDay} />
              <label
                htmlFor='expDay'
                className={`${cardErr ? "text-red-500" : ""} text-[10px] absolute left-1 top-[-8px] z-20 px-1 bg-white`}
              >
                Tháng và năm hết hạn
              </label>
            </div>
            <div className='relative '>
              <CodeCvvInput codeCvv={codeCvv} ChangeCodeCvv={ChangeCodeCvv} />
              <label htmlFor='codecvv' className={` text-[10px] absolute left-1 top-[-8px] z-20 px-1 bg-white`}>
                Mã CVV
              </label>
            </div>
          </div>
          <div className='relative'>
            <InputCustom error={NameErr} htmlFor={"first_lastname"} placeHolder='Họ và tên chủ thẻ' value={Name} changeValue={ChangeName} />
            <label
              htmlFor='first_lastname'
              className={`${cardErr ? "text-red-500" : ""} text-[10px] absolute left-1 top-[-8px] z-20 px-1 bg-white`}
            >
              Họ và tên chủ thẻ
            </label>
            {NameErr && <p className='text-[10px] leading-4 pl-1.5 text-red-500 m-0'>Vui lòng nhập chữ cái không có dấu.</p>}
          </div>

          <h2 className='text-sm text-slate-600 my-2.5'>- Địa chỉ đăng ký thẻ Tín dụng/Ghi nợ</h2>
          <div className='relative pb-4'>
            <AddressInput address={address} ChangeAddress={ChangeAddress} />
            <label htmlFor='addr' className={`text-[10px] absolute left-1 top-[-8px] z-20 px-1 bg-white`}>
              Địa chỉ
            </label>
          </div>
          <div className='relative'>
            <PrimaryPost error={primaryPostErr} ChangePrimaryCode={ChangePrimaryCode} primaryCode={primaryCode} />
            <label htmlFor='PRICode' className={`text-[10px] absolute left-1 top-[-8px] z-20 px-1 bg-white`}>
              Mã bưu chính
            </label>
            {primaryPostErr && <p className='text-[10px] leading-4 pl-1.5 text-red-500 m-0'>Mã bưu chính không chính xác.</p>}
          </div>

          <div className='flex mt-6 justify-end'>
            <BackBtn handleBack={handleBack} />
            <SendBtn loading={loading} handleSend={handleSend} />
          </div>
        </form>
      </div>
    </div>
  )
}

export default CardBox
