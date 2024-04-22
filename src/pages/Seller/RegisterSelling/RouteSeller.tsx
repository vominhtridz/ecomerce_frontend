import { useParams } from "react-router-dom"

const ManageRouteSeller = [
  { title: "Thông tin shop", route: "100" },
  { title: "Cài đặt vận chuyển", route: "200" },
  { title: "Thông tin thuế", route: "300" },
  { title: "Thông tin định danh", route: "400" },
  { title: "Hoàn tất", route: "500" },
]

const RouteSeller = () => {
  const { registrasionPortal } = useParams()
  // get Route Navigate Seller
  const getManageRouteSeller = () =>
    ManageRouteSeller.map((route, index) => {
      // checkoldRoute
      const OldPram = parseInt(registrasionPortal || "")
      const RouteNumber = parseInt(route.route || "")
      const RouteCurrent = route.route == registrasionPortal
      const RouteOld = OldPram > RouteNumber

      return (
        <div className={`px-10 `} key={index}>
          <p
            className={`${RouteCurrent || RouteOld ? "bg-red-500" : "bg-slate-300"} relative mx-auto my-2.5 w-3 h-3 bg-red-500 rounded-full`}
          >
            {route.title !== "Hoàn tất" ? (
              <span
                className={`${RouteOld ? "border-red-500" : "border-slate-300"} block absolute w-36 border-b  top-1/2 left-full ml-4`}
              ></span>
            ) : (
              ""
            )}
          </p>

          <p className={`${RouteCurrent || RouteOld ? "text-red-500" : "text-slate-300"} text-sm whitespace-nowrap`}>
            {route.title}
          </p>
        </div>
      )
    })
  return (
    <nav className='p-4 border-b border-slate-200 w-full px-10 flex items-center justify-center'>
      {getManageRouteSeller()}
    </nav>
  )
}

export default RouteSeller
