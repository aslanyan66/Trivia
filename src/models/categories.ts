import { IUniqueId } from './common'

export interface ICategory {
  id: IUniqueId
  name: string
}

export interface IServerCategoryResponse {
  trivia_categories: ICategory[]
}
