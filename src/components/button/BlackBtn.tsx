const BlackBtn = () => {
  function handleReplaceBlack() {}
  return (
    <button
      className='w-[73px] flex items-center whitespace-nowrap hover:text-green-500 hover:border-green-400 border
       border-slate-200 justify-center py-2 mx-1 rounded-sm '
      onClick={handleReplaceBlack}
    >
      Đen
    </button>
  )
}

export default BlackBtn
