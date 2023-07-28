import {
  IsNumber,
  IsEmail,
  IsString,
  IsOptional,
  IsEnum,
  IsArray,
  ArrayNotEmpty,
} from 'class-validator'
import { UserStatus } from '../../../common/common.enum'
import { User } from 'modules/user/user.entity'

// export class User {
//   @IsString()
//   username: string
// }

export class LoginDTO {
  accessToken?: string
  user?: User
}
