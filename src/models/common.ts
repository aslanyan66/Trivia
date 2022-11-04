export type IUniqueId = number | string

export type IDropdownListItem = {
  id: IUniqueId
  name: string
}
export type IDropDownList = IDropdownListItem[]

export interface IFinalResult {
  categoryId: IUniqueId
  date: string
  score: string
}
