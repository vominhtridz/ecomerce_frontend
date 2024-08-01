import { FC } from "react"
import { Navigate, Outlet, Route, Routes } from "react-router-dom"
import PageNotFound from "./pages/PageNotFound/PageNotFound"
import { MyProvider } from "./context/context"
import DefaultLayout from "./components/Defaultlayout/Defaultlayout"
import PageCart from "./pages/cart/Cart"
import PageLogin from "./pages/Login/Login"
import PageRegister from "./pages/Register/Register"
import PageSearch from "./pages/Search/Search"
import ChannelSeller from "./pages/Seller/LayoutSeller"
import FirstPageSelling from "./pages/Seller/RegisterSelling/FirstPageSelling/FirstPageSelling"
import SalesUser from "./pages/SalesUser/SalesUser"
import Checkout from "./pages/Checkout/Checkout"
import PageInformationProduct from "./pages/InformationProduct/InformationProduct"
import PageUsers from "./pages/User/PageUser"
import Home from "./pages/home/Home"
import RegisterSelling from "./pages/Seller/RegisterSelling/RegisterSelling"
import ForgotPassword from "./pages/Login/ForgotPassword/forgotPassword"
import ChangePwdPage from "./components/User/ChangePwd"
import PageProfile from "./pages/User/Content/Account/PageProfile/PageProfile"
import PageBank from "./pages/User/Content/Account/Bank/Bank"
import PageAddress from "./pages/User/Content/Account/Address/Adress"
import PageUserNotifyCations from "./pages/User/Content/Account/NotifyCations/NotifyCations"
import PageVoucherStore from "./pages/User/Content/SpecialOffers/VoucherStore/PageVoucherStore"
import UserNotifyCations from "./pages/User/Content/NotifiCations/NotifyCations"
import ChangeEmail from "./pages/User/Content/Account/PageProfile/ChangeEmail"
import UserPhoneNunber from "./pages/User/Content/Account/PageProfile/Phonenumber"
import SettingTransport from "./pages/Seller/RegisterSelling/SettingTransport/SettingTransport"
import TaxInformation from "./pages/Seller/RegisterSelling/TaxInformation/TaxInformation"
import Complete from "./pages/Seller/RegisterSelling/Complete/complete"
import IdentifiInfor from "./pages/Seller/RegisterSelling/IdentifiInformation/IdentifiInformation"
import LayoutSeller from "./pages/Seller/LayoutSeller"
import NewProduct from "./pages/Seller/Product/NewProduct/NewProduct"
import SellerHome from "./pages/Seller/Home/Home"
import ConfirmOrder from "./pages/Seller/Order/Confirm/ConfirmOrder"
import OrderAll from "./pages/Seller/Order/OrderAll/OrderAll"
import CancelOrder from "./pages/Seller/Order/Cancel/CancelOrder"
import ManageOrder from "./pages/Seller/Order/ManageOrder"
import WaitForDelivery from "./pages/Seller/Order/WaitForDelivery/WaitForDelivery"
import Shipping from "./pages/Seller/Order/Shipping/Shipping"
import CompleteOrder from "./pages/Seller/Order/CompleteOrder/CompleteOrder"
import UncuccessOrder from "./pages/Seller/Order/UncuccessOrder/UncuccessOrder"
import AllProduct from "./pages/Seller/Product/AllProduct/AllProduct"
import Evaluate from "./pages/Seller/Chat/ManageEvaluate/Evaluate"
import ManageChat from "./pages/Seller/Chat/ManageChat/ManageChat"
import ManageCustomer from "./pages/Seller/Chat/ManageCustomer"
import ManageFinance from "./pages/Seller/Finance/ManageFinance"
import Blance from "./pages/Seller/Finance/Blance/Blance"
import BankAccounts from "./pages/User/Content/Account/Bank/BankAccounts/BankAccounts"
import Revenue from "./pages/Seller/Finance/Revenue/Revenue"
import Bank_Account from "./pages/Seller/Finance/Bank_Account/Bank_Account"
import Analysis from "./pages/Seller/Data/Analysis/Analysis"
import Effective from "./pages/Seller/Data/Effective/Effective"
import ManageShop from "./pages/Seller/Shop/ManageShop"
import Profile from "./pages/Seller/Shop/Profile/Profile"
import Client from "./pages/Seller/Shop/Client/Client"
import Settings from "./pages/Seller/Shop/Settings/Settings"
const App: FC = () => {
  return (
    <div className='relative'>
      <MyProvider>
        <Routes>
          {/*--------------- ROUTE CLIENT CUSTOMER--- ---*/}
          <Route element={<DefaultLayout />} path=''>
            <Route element={<SalesUser />} path=':lang/sellerinfo' />
            <Route index element={<Home />} path='/:lang' />
            <Route element={<Home />} path='/' />
            <Route element={<PageCart />} path=':lang/cart' />
            {/* ------------login---------- */}
            <Route element={<ForgotPassword />} path='/:lang/resetpwd' />
            <Route element={<PageLogin />} path=':lang/login' />
            <Route element={<ChangePwdPage />} path=':lang/changepwd' />
            {/* -----------REGISTER----------------- */}
            <Route element={<PageRegister />} path=':lang/register' />
            {/* -------------------SEARCH PAGE----------------- */}
            <Route element={<PageSearch />} path=':lang/search/:keySearch' />
            {/* -------------------CHANNEL SELLER----------------- */}
            <Route element={<ChannelSeller />} path=':lang/seller' />

            {/* ----------------CHECKOUT---------- */}
            <Route element={<Checkout />} path=':lang/checkout' />
            <Route element={<PageInformationProduct />} path=':lang/infor' />
            {/* account */}
            <Route element={<PageUsers />} path=':lang/user'>
              {/* Profile */}
              <Route index element={<PageProfile />} path='account/profile' />
              <Route element={<PageBank />} path='account/bank' />
              <Route element={<PageAddress />} path='account/address' />
              <Route element={<ChangePwdPage />} path='account/changepwd' />
              <Route element={<UserPhoneNunber />} path='account/phonenumber' />
              <Route element={<ChangeEmail />} path='account/email' />
              <Route element={<PageUserNotifyCations />} path='account/setting-Notifycations' />
              {/* Notification */}
              <Route element={<UserNotifyCations />} path='Notifications' />
              <Route element={<PageVoucherStore />} path='voucher'></Route>
            </Route>
          </Route>
          {/*--------------- -----------ROUTE CLIENT SELLER -------------- ---*/}

          {/*--------------- ---------REGISTER SELLING ---------------- ---*/}
          <Route element={<RegisterSelling />} path='seller/register/portal'>
            <Route index element={<FirstPageSelling />} path='100' />
            <Route element={<SettingTransport />} path='200' />
            <Route element={<TaxInformation />} path='300' />
            <Route element={<IdentifiInfor />} path='400' />
            <Route element={<Complete />} path='500' />
          </Route>
          {/*----------------------- SELLER PAGE -----------------*/}
          <Route element={<LayoutSeller />} path='seller'>
            <Route index element={<SellerHome />} path='' />
            {/*----------------------- MANAGE ORDER -----------------*/}
            <Route element={<ManageOrder />} path='manage/order'>
              <Route element={<ConfirmOrder />} path='confirm' />
              <Route element={<OrderAll />} path='all' />
              <Route element={<CancelOrder />} path='cancel' />
              <Route element={<WaitForDelivery />} path='pickup' />
              <Route element={<Shipping />} path='shipping' />
              <Route element={<CompleteOrder />} path='complete' />
              <Route element={<UncuccessOrder />} path='uncuccess' />
            </Route>
            <Route element={<AllProduct />} path='manage/product/all' />

            {/*----------------------- MANAGE CHAT -----------------*/}
            <Route element={<ManageCustomer />} path='customer/'>
              <Route element={<ManageChat />} path='chat' />
              <Route element={<Evaluate />} path='evaluate' />
            </Route>
            {/*----------------------- MANAGE FINANCE -----------------*/}
            <Route element={<ManageFinance />} path='finance/'>
              <Route element={<Blance />} path='blance' />
              <Route element={<Bank_Account />} path='bank_account' />
              <Route element={<Revenue />} path='revenue' />
            </Route>
            {/*----------------------- SALE ANALYSIS -----------------*/}
            <Route element={<ManageFinance />} path='data/'>
              <Route element={<Analysis />} path='analysis' />
              <Route element={<Effective />} path='effective' />
            </Route>
            {/*----------------------- MANAGE SHOP -----------------*/}
            <Route element={<ManageShop />} path='manage/shop'>
              <Route element={<Profile />} path='profile' />
              <Route element={<Client />} path='client' />
              <Route element={<Settings />} path='settings' />
            </Route>
            {/*----------------------- ADD NEW PRODUCT -----------------*/}
          </Route>
          <Route element={<NewProduct />} path='seller/product/new' />
          {/* ------------------IF NOT FOUND PAGE RENDER PAGE NOT FOUND------------------ */}
          <Route path='*' element={<Navigate to='/' replace={true} />} />
        </Routes>
      </MyProvider>
    </div>
  )
}

export default App
