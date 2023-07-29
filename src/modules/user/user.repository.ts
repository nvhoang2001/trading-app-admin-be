import { OrderBy } from 'common/common.enum'
import AppDataSource from 'configs/typeorm.config'
import { UserArgs } from './dto/user.args'
import { User } from './user.entity'

const UserRepository = AppDataSource.getRepository(User).extend({
  getPaging(queries: UserArgs = {}) {
    const {
      role,
      username,
      vipId,
      vipRegisterTime,

      // TODO: default value
      limit = 30,
      offset = 0,
      orderBy = OrderBy.ASC,
      sortBy = 'createdAt',
    } = queries

    const queryBuilder = this.createQueryBuilder('u').skip(offset).take(limit)

    if (username) {
      queryBuilder.andWhere('u.username = :username', { username })
    }
    if (role) {
      queryBuilder.andWhere('u.role = :role', { role })
    }
    if (vipId) {
      queryBuilder.andWhere('u.vipId :vipId', { username })
    }
    if (vipRegisterTime) {
      queryBuilder.andWhere('u.vipRegisterTime :vipRegisterTime', { username })
    }
    if (sortBy) {
      queryBuilder.orderBy(sortBy, orderBy)
    }

    return queryBuilder.getManyAndCount()
  },
})

export default UserRepository
