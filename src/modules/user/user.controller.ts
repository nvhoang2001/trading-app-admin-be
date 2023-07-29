import { Body, Controller, Delete, Get, Patch, Path, Post, Put, Queries, Route, Tags } from 'tsoa'
import { UserArgs } from './dto/user.args'
import { UserService } from './user.service'
import { UserInput, UserUpdateInput } from './dto/user.input'

@Route('users')
@Tags('Users')
export class UsersController extends Controller {
  private readonly service: UserService

  constructor() {
    super()
    this.service = new UserService()
  }

  @Get()
  public async search(@Queries() queries: UserArgs) {
    return this.service.search(queries)
  }

  @Get('{id}')
  public async getOne(@Path() id: number) {
    return this.service.findOne(id)
  }

  @Post()
  public async createOne(@Body() input: UserInput) {
    return this.service.createOne(input)
  }

  @Put('{id}')
  public async updateOne(@Path() id: number, @Body() input: UserUpdateInput) {
    return this.service.updateOne(id, input)
  }

  @Delete('{id}')
  public async deleteOne(@Path() id: number) {
    return this.service.deleteOne(id)
  }
}
