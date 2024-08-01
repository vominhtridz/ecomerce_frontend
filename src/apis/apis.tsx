import axios from "axios"
import {
  ApiGetType,
  RemoveAPIType,
  StoreSellerType,
  UpdateUserType,
  UserBankType,
  UserCardType,
  userAddressType,
  usersTypes,
} from "../typescript/UserTypes"
import { sellerPickupaddr } from "@/typescript/SellingTypes"
const Api = "http://localhost:1000"
const ApiUsers = "http://localhost:1000/users"
// -------------------------------SELLER -----------------------
export const AddSellerPickUpAddress = async (payload: sellerPickupaddr) => await axios.post(`${Api}/seller/pickupaddr`, payload)
export const GetSellerAddress = async (payload: ApiGetType) => await axios.post(`${Api}/seller/pickupaddr/get`, payload)
export const GetSeller = async (payload: ApiGetType) => await axios.post(`${Api}/seller/get`, payload)
export const StoreSeller = async (payload: StoreSellerType) => await axios.post(`${Api}/seller/storage`, payload)
export const UPDATEPickUpaddress = async (payload: sellerPickupaddr) => await axios.put(`${Api}/seller/pickupaddr/change`, payload)
// ----------------------------- GET, SIGN UP, LOGIN USER -----------------------------
export const GetUserCurrent = async (payload: usersTypes) => await axios.post(`${ApiUsers}`, payload)
export const UserLoggedIn = async (payload: usersTypes) => await axios.post(`${ApiUsers}/login`, payload)
export const RegisterUser = async (payload: usersTypes) => await axios.post(`${ApiUsers}/register`, payload)
// ----------------------------- VERIFICATION EMAIL FROM LOGIN , USER EMAIL  -----------------------------
export const VerifiEmail = async (payload: usersTypes) => await axios.post(`${ApiUsers}/verifiemail`, payload)
export const VerifiEmailUser = async (payload: usersTypes) => await axios.post(`${ApiUsers}/VerifiEmailUser`, payload)

// ----------------------------- PAGE USER  -----------------------------
// ----------------------------- USER CHANGE PHONE NUMBER, PROFILE, EMAIL -----------------------------
export const ChangePhoneNumber = async (payload: usersTypes) => await axios.post(`${ApiUsers}/phonenumber`, payload)
export const ChangeUserProfile = async (payload: UpdateUserType) => await axios.post(`${ApiUsers}/profile`, payload)
export const ChangeEmailUser = async (payload: usersTypes) => await axios.post(`${ApiUsers}/changeEmail`, payload)
export const ChangeUserAddress = async (payload: userAddressType) => await axios.post(`${ApiUsers}/address`, payload)
// ----------------------------- UPDATE USER -----------------------------
export const UpdateUserAddr = async (payload: userAddressType) => await axios.put(`${ApiUsers}/update/addr`, payload)
// ----------------------------- STORAGE USER BANK, USER CARD -----------------------------
export const GetUserBank = async (payload: ApiGetType) => await axios.post(`${ApiUsers}/get/userbank`, payload)
export const GetUserAddr = async (payload: ApiGetType) => await axios.post(`${ApiUsers}/get/address`, payload)
export const GetUserCard = async (payload: ApiGetType) => await axios.post(`${ApiUsers}/get/usercard`, payload)
export const StoreUserBank = async (payload: UserBankType) => await axios.post(`${ApiUsers}/bank`, payload)
export const StoreUserCard = async (payload: UserCardType) => await axios.post(`${ApiUsers}/card`, payload)
// ----------------------------- USER RESET PASSWORD  -----------------------------
export const ResetPwdUser = async (payload: any) => await axios.post(`${ApiUsers}/changepwd`, payload)
// ----------------------------- METHOD REMOVE -----------------------------
export const RemoveUserAddr = async (payload: RemoveAPIType) => await axios.post(`${ApiUsers}/remove/address`, payload)
export const RemoveUserBank = async (payload: RemoveAPIType) => await axios.post(`${ApiUsers}/remove/bank`, payload)
export const RemoveUserCard = async (payload: RemoveAPIType) => await axios.post(`${ApiUsers}/remove/card`, payload)

