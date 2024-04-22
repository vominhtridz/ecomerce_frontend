import { FC } from "react"
import { Route, Routes } from "react-router-dom"
import PageNotFound from "./pages/PageNotFound/PageNotFound"
import { MyProvider } from "./context/context"
import DefaultLayout from "./components/Defaultlayout/Defaultlayout"
import PageCart from "./pages/cart/Cart"
import PageLogin from "./pages/Login/Login"
import PageRegister from "./pages/Register/Register"
import PageSearch from "./pages/Search/Search"
import ChannelSeller from "./pages/Seller/ChannelSeller"
import FirstPageSelling from "./pages/Seller/RegisterSelling/FirstPageSelling/FirstPageSelling"
import SecondPageSelling from "./pages/Seller/RegisterSelling/SecondPageSelling/SecondPageSelling"
import ThirdPageSelling from "./pages/Seller/RegisterSelling/ThirdPageSelling/ThirdPageSelling"
import FourthPageSelling from "./pages/Seller/RegisterSelling/FourthPageSelling/FourthPageSelling"
import SalesUser from "./pages/SalesUser/SalesUser"
import Checkout from "./pages/Checkout/Checkout"
import PageInformationProduct from "./pages/InformationProduct/InformationProduct"
import PageUsers from "./pages/User/PageUser"
import Home from "./pages/home/Home"
import RegisterSelling from "./pages/Seller/RegisterSelling/RegisterSelling"

const App: FC = () => {
  return (
    <div className='relative'>
      <MyProvider>
        <Routes>
          {/* Route */}
          <Route element={<DefaultLayout />} path=''>
            <Route index element={<Home />} path='/:lang' />
            <Route element={<Home />} path='/' />
            <Route element={<PageCart />} path=':lang/cart' />
            <Route element={<PageLogin />} path=':lang/login' />
            <Route element={<PageRegister />} path=':lang/register' />
            <Route element={<PageSearch />} path=':lang/search/:keySearch' />
            <Route element={<ChannelSeller />} path=':lang/seller' />
            <Route element={<RegisterSelling />} path=':lang/selling/portal'>
              <Route index element={<FirstPageSelling />} path=':registrasionPortal' />
              <Route element={<SecondPageSelling />} path=':registrasionPortal' />
              <Route element={<ThirdPageSelling />} path=':registrasionPortal' />
              <Route element={<FourthPageSelling />} path=':registrasionPortal' />
            </Route>
            <Route element={<SalesUser />} path=':lang/sales' />
            <Route element={<Checkout />} path=':lang/checkout' />
            <Route element={<PageInformationProduct />} path=':lang/information' />
            <Route element={<PageUsers />} path=':lang/user' />
          </Route>
          <Route path='*' element={<PageNotFound />} />
        </Routes>
      </MyProvider>
    </div>
  )
}

export default App
