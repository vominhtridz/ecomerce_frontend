import { MessageIcon } from "../../../images/centerIcons"

const NameOfStore = () => {
  return (
    <div className='bg-white flex items-center rounded-sm py-3 px-4 text-base rounded-b-none'>
      <input type='checkbox ' required name='' className='w-6 h-6 rounded-sm' id='' />
      <p className='px-4 flex items-center'>
        Nam duy Store <div className='text-xl text-green-500 px-2'>{MessageIcon}</div>
      </p>
    </div>
  )
}

export default NameOfStore
