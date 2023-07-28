import { Repository } from 'typeorm'
import { User } from './user.entity'
import AppDataSource from 'configs/typeorm.config'

export class UserService {
  protected repo: Repository<User>

  constructor() {
    this.repo = AppDataSource.getRepository(User)
  }

  async getAll() {
    
  }
}
