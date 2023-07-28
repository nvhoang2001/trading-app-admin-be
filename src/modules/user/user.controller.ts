import { Body, Controller, Get, Path, Post, Query, Route, SuccessResponse, Tags } from 'tsoa'
import { User } from './dto/user.dto'
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
  public async getAll(@Query() name?: string) {
    return this.service.getAll()
  }
}
