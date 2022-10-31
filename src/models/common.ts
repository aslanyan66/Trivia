import { Theme } from '@mui/material'

export type IUniqueId = number | string

export type IDropdownListItem = {
  id: IUniqueId
  name: string
}
export type IDropDownList = IDropdownListItem[]
