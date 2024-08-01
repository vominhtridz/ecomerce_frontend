import { ChangeEvent } from "react"

export default interface RegisterTypes {
  conFirmPwd: string
  ChangeConfirm: (e: ChangeEvent<HTMLInputElement>) => void
}
