import { useState } from "react"
import AccountOfMine from "./AccountOfMine/AccountOfMine"
import EditAccount from "./EditAccount"
import Notifycations from "./Notifycations/Notifycations"
import PerchaseOrders from "./PerchaseOrders/PerchaseOrders"
import SpecialOffers from "./SpecialOffers/SpecialOffers"
const SideBar = () => {
  const [visibleItems, setvisibleItems] = useState<string>("account")
  return (
    <section className='px-10 py-2 lg:w-[290px] shadow border border-gray-200'>
      <EditAccount />
      <div className='border-t border-slate-200 pt-8'>
        <SpecialOffers setvisibleItems={setvisibleItems} visibleItems={visibleItems} />
        <AccountOfMine setvisibleItems={setvisibleItems} visibleItems={visibleItems} />
        <PerchaseOrders setvisibleItems={setvisibleItems} visibleItems={visibleItems} />
        <Notifycations setvisibleItems={setvisibleItems} visibleItems={visibleItems} />
      </div>
    </section>
  )
}
export default SideBar
