import { OrderBy } from './common.enum'

export class BaseQueryArgs {
  offset?: number
  limit?: number
  orderBy?: OrderBy
  // TODO: consider use generic to list fields select on swagger
  sortBy?: string
}
