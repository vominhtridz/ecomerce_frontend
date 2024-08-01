import RemoveBtn from "@/components/button/RemoveBtn"
import img from "..//..//..//..//..//..//images/CardImg/agribank_icon.jpg"

const BankAccounts = ({ data, handleRemove }: any) => {
  const getUserBanks = () =>
    data.map((item: any, index: number) => (
      <div className='flex justify-between w-full py-4' key={index}>
        <div className='flex w-full '>
          <div className=' rounded-lg shadow border border-gray-100 mr-6   overflow-hidden w-24 h-20 '>
            <img src={img} alt='' className='  w-full h-full' />
          </div>
          <div className='w-full'>
            <div className='flex items-center justify-between w-full'>
              <p className='text-black uppercase text-base whitespace-nowrap'>{item.namebank}</p>
              <div className='flex  '>
                <label className='text-[12px] text-slate-500 select-none px-4'>Đã kiểm tra</label>
                {item.setdefault && (
                  <label htmlFor='' className='bg-green-600 text-white px-1  select-none rounded-sm text-[11px] py-1'>
                    Mặc định
                  </label>
                )}
                <RemoveBtn handleRemove={() => handleRemove(item.bankid, item.userid)} />
              </div>
            </div>
            <p className='text-[12.5px] text-black pt-2'>Họ và tên: {item.defaultname}</p>
            <p className='text-[12.5px] text-black'>Chi nhánh: {item.namebranch}</p>
          </div>
        </div>
      </div>
    ))
  return <div className=''> {getUserBanks()}</div>
}

export default BankAccounts
