import {
  IsNumber,
  IsEmail,
  IsString,
  IsOptional,
  IsEnum,
  IsArray,
  ArrayNotEmpty,
} from 'class-validator'
import { UserStatus } from 'common/common.enum'

export class User {
  @IsNumber()
  id: number

  @IsEmail()
  email: string

  @IsString()
  name: string

  @IsOptional()
  @IsEnum(UserStatus)
  status?: 'Happy' | 'Sad'

  @IsArray()
  @ArrayNotEmpty()
  phoneNumbers: string[]
}
