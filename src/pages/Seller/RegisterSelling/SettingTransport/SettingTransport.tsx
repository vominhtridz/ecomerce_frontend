import BackBtn from "@/components/button/BackBtn"
import NextBtn from "@/components/button/NextBtn"
import { useState } from "react"

const SettingTransport = () => {
  const [loading, setLoading] = useState<boolean>(false)
  const handleBack = () => {}
  const handleNext = () => {}
  return (
    <div className='pt-4'>
      <div className='pt-4 px-20'>
        <h2 className='text-2xl leading-6'>Phương thức Vận chuyển </h2>
        <p className='text-[11px] pb-4 leading-3 text-slate-500 pl-0.5'>Kích hoạt phương thức vận chuyển phù hợp</p>
        <div className='flex items-center  py-4'>
          <label htmlFor='fastest' className='text-xl select-none w-60 whitespace-nowrap block'>
            Hỏa tốc
          </label>
          <input type='checkbox' id='fastest' className='w-6 h-6' />
        </div>
        <div className='flex items-center  py-4'>
          <label htmlFor='fast' className='text-xl select-none w-60 whitespace-nowrap block'>
            Nhanh
          </label>
          <input type='checkbox' id='fast' className='w-6 h-6' />
        </div>
        <div className='flex items-center  py-4'>
          <label htmlFor='saveMoney' className='text-xl select-none w-60 whitespace-nowrap block'>
            Tiết kiệm
          </label>
          <input type='checkbox' id='saveMoney' className='w-6 h-6' />
        </div>
        <div className='flex items-center  py-4'>
          <label htmlFor='heavythings' className='text-xl select-none w-60 whitespace-nowrap block'>
            Hàng cồng kềnh
          </label>
          <input type='checkbox' id='heavythings' className='w-6 h-6' />
        </div>
      </div>
      <div className='flex items-center justify-between pt-4 px-4'>
        <BackBtn handleBack={handleBack} />
        <NextBtn handleNext={handleNext} loading={loading} />
      </div>
    </div>
  )
}

export default SettingTransport
