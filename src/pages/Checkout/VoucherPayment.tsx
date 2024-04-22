import { VoucherIcon } from "../../images/centerIcons"

const VoucherPayment = () => {
  return (
    <div className='bg-white my-6 text-[13px]  rounded-sm p-5 '>
      <div className='flex items-cetner items-center pb-4 border-b border-slate-300 text-lg font-bold'>
        <p className='px-1.5 text-xl text-red-500'>{VoucherIcon}</p>
        <h2 className='text-lg'>Livegood Voucher</h2>
      </div>
      <div className='flex items-center py-3 my-1 justify-between bg-green-200'>
        <label htmlFor='' className='mx-2 text-lg'>
          Voucher Giảm 30%
        </label>
        <button className='bg-red-50 text-base mr-4 text-red-500 border-red-300 border px-6 py-1.5'>
          Chọn Voucher
        </button>
      </div>
    </div>
  )
}

export default VoucherPayment
