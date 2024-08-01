import { LoadingIcon } from "../../images/centerIcons"

const LoadingPage = () => {
  return (
    <div className='fixed top-0 left-0 bottom-0 right-0'>
      <p className=' absolute top-1/3 left-1/2 text-blue-500 shadow-lg bg-gray-100 rounded-full border border-gray-200 text-6xl'>
        {LoadingIcon}
      </p>
    </div>
  )
}

export default LoadingPage
