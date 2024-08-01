interface AddressBtnType {
  handleAdd: () => void
}
export const AddressBtn = ({ handleAdd }: AddressBtnType) => {
  return (
    <button className=' bg-green-500 text-white px-4 py-1 text-sm rounded-sm flex items-center ' onClick={handleAdd}>
      <p className='text-xl px-2 text-slate-50'>+</p> Thêm địa chỉ mới
    </button>
  )
}
export default AddressBtn
