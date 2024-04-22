export const AddNewAddress = () => {
  const handleAddAddress = () => {}
  return (
    <button
      className=' bg-red-500 text-white px-4 py-1 text-sm rounded-sm flex items-center '
      onClick={handleAddAddress}
    >
      <p className='text-xl px-2 text-slate-50'>+</p> Thêm địa chỉ mới
    </button>
  )
}
export default AddNewAddress
