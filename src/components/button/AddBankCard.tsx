interface AddBankCardType {
  handleAddBank: () => void
}
export const AddBankCard = ({ handleAddBank }: AddBankCardType) => {
  return (
    <button className=' bg-green-500 text-white px-4 py-1 text-sm rounded-sm flex items-center ' onClick={handleAddBank}>
      <p className='text-2xl px-2 text-slate-50'>+</p> Thêm tài khoản ngân hàng
    </button>
  )
}
export default AddBankCard
