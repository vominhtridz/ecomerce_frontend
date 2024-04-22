import axios from "axios"
import { RegisterUserTypes, LogginUserTypes } from "../typescript/UserTypes"
import { AddSellerPickUpAddressTypes, GetSellerAddressTypes } from "../typescript/AddressTypes"
const Api = "http://localhost:1000"
const ApiUsers = "http://localhost:1000/users"
// Seller Address
export const AddSellerPickUpAddress = async (payload: AddSellerPickUpAddressTypes) =>
  await axios.post(`${Api}/seller/address`, payload)
export const GetSellerAddress = async (payload: GetSellerAddressTypes) =>
  await axios.post(`${Api}/seller/addresses`, payload)
// User
export const getUser = async () => await axios.get(`${ApiUsers}`)
export const UserLoggedIn = async (payload: LogginUserTypes) => await axios.post(`${ApiUsers}/login`, payload)
export const RegisterUser = async (payload: RegisterUserTypes) => await axios.post(`${ApiUsers}/register`, payload)

