import { useMyContext } from "../../../context/context"
interface GetProductsTypes {
  title?: string
  route?: string
}
export function getPrices() {
  const { language } = useMyContext()
  function handleNavigatePrices() {}
  return language?.center.products.views.map((item: GetProductsTypes, index: number) => {
    return (
      <option key={index} value={item.route} className='cursor-pointer whitespace-nowrap max-md:text-[11px]' onClick={handleNavigatePrices}>
        {item.title}
      </option>
    )
  })
}
