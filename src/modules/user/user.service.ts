import { showError } from 'utils/show-error'
import { UserArgs } from './dto/user.args'
import { UserInput, UserUpdateInput } from './dto/user.input'
import UserRepository from './user.repository'

// TODO: base service - generic - CRUD
export class UserService {
  protected repo = UserRepository

  async search(queries: UserArgs = {}) {
    const [data, total] = await this.repo.getPaging(queries)

    return {
      data,
      total,
    }
  }

  async findOne(id: number) {
    return (await this.repo.findOneBy({ id })) || {}
  }

  async createOne(input: UserInput) {
    const user = await this.repo.findOneBy({ username: input.username })
    if (user) return showError('Người dùng đã tồn tại!', 409)

    return await this.repo.save(this.repo.create(input))
  }

  async updateOne(id: number, input: UserUpdateInput) {
    const user = await this.repo.findOneBy({ id })
    if (!user) return showError('Người dùng không tồn tại!', 409)

    return !!(await this.repo.update({ id }, input)).affected
  }

  async deleteOne(id: number) {
    const user = await this.repo.findOneBy({ id })
    if (!user) return showError('Người dùng không tồn tại!', 409)

    const test = await this.repo.softDelete({ id })
    return !!test.affected
  }
}
