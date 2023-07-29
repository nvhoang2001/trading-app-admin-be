import { UserRole } from 'common/common.enum'

export class UserInput {
  username: string
  password: string
  avatar?: string
  role?: UserRole
}

export class UserUpdateInput {
  username: string
  avatar?: string
  role?: UserRole
}
