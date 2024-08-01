import InputCustom from "@/components/Input/InputCustom"
import CCCDInput from "@/components/Input/User/CCCDInput"
import BackBtn from "@/components/button/BackBtn"
import NextBtn from "@/components/button/NextBtn"
import { CCCDInforType } from "@/typescript/UserTypes"
const CCCDInfor = ({ loading, handleNext, handleBack, ChangeCCCDNum, CCCDNum, ChangeName, userBankName }: CCCDInforType) => {
  return (
    <div className='absolute z-50 top-40 left-1/3 w-[30rem] bg-white shadow rounded-sm px-4 py-2 overflow-y-auto border border-gray-200'>
      <h2 className='py-5 px-1 text-xl'>Thông tin người dùng</h2>
      <div className='relative'>
        <InputCustom placeHolder='Tên' value={userBankName} length={30} changeValue={ChangeName} />
        <p className={`text-[10px] absolute left-0.5 top-[-8px] z-20 px-1 text-black bg-white`}>Tên </p>
      </div>
      <div className='relative my-4'>
        <CCCDInput number={CCCDNum} ChangeNumber={ChangeCCCDNum} />
        <p className={`text-[10px] absolute left-0.5 top-[-8px] z-20 px-1 text-black bg-white`}>Số Căn cước công dân </p>
      </div>

      <div className='flex mt-10 py-2 justify-end'>
        <BackBtn handleBack={handleBack} />
        <NextBtn loading={loading} handleNext={handleNext} />
      </div>
    </div>
  )
}

export default CCCDInfor
