import { Controller, Get, Path, Queries, Route, Tags } from 'tsoa'
import { UserArgs } from './dto/user.args'
import { UserService } from './user.service'

@Route('users')
@Tags('Users')
export class UsersController extends Controller {
  private readonly service: UserService

  constructor() {
    super()
    this.service = new UserService()
  }

  @Get()
  public async getAll(@Queries() queries: UserArgs) {
    return this.service.getAll(queries)
  }

  @Get('{id}')
  public async getOne(@Path() id: number) {
    return this.service.getOne(id)
  }
}
