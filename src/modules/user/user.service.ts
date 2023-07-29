import AppDataSource from 'configs/typeorm.config'
import { Repository } from 'typeorm'
import { UserArgs } from './dto/user.args'
import { User } from './user.entity'
import { OrderBy } from 'common/common.enum'

export class UserService {
  protected repo: Repository<User>

  constructor() {
    this.repo = AppDataSource.getRepository(User)
  }

  async getAll(queries: UserArgs = {}) {
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

    const queryBuilder = this.repo.createQueryBuilder('u')

    // TODO: move to repository file
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

    // TODO: util func
    const [data, total] = await Promise.all([
      queryBuilder.skip(offset).take(limit).getMany(),
      queryBuilder.getCount(),
    ])

    return {
      data,
      total,
    }
  }

  async getOne(id: number) {
    return (await this.repo.findOneBy({ id })) || {}
  }
}
