import { ChangeEvent } from "react"

export interface SearchItemsTypes {
  checkFocus: boolean
  SearchInput: string
  ChangeSearch: (e: ChangeEvent<HTMLInputElement>) => void
  handleFocus: (e: ChangeEvent<HTMLInputElement>) => void
  handleClick: () => void
  handleBlur: () => void
}
