import { IsDateString, IsEnum, IsOptional, IsString } from 'class-validator'
import { BaseQueryArgs } from 'common/base-query.args'
import { UserRole } from 'common/common.enum'

enum SearchUserSortBy {
  vipRegisterTime = 'vipRegisterTime',
  vipId = 'vipId',
  role = 'role',
}

// TODO: check Pick type
export class UserArgs extends BaseQueryArgs {
  @IsString()
  @IsOptional()
  username?: string

  @IsEnum(UserRole)
  @IsOptional()
  role?: UserRole

  @IsString()
  @IsOptional()
  vipId?: string

  @IsDateString()
  @IsOptional()
  vipRegisterTime?: Date

  // @IsDateString()
  // @IsEnum(SearchUserSortBy)
  // sortBy?: SearchUserSortBy

  // @IsDateString()
  // @IsOptional()
  // expiredTime?: Date
}
