import {
  Body,
  Controller,
  Get,
  Path,
  Post,
  Query,
  Route,
  SuccessResponse,
  Request,
  Response,
  Tags,
  Example,
  Middlewares,
} from 'tsoa'
import { AuthService } from './auth.service'
import { LoginInput } from './dto/auth.input'
import { LoginDTO } from './dto/auth.dto'
import authenticate from 'middlewares/authenticate.middleware'
import { Request as RequestEx } from 'express'

interface ValidateErrorJSON {
  message: 'Unauthorized'
}

@Route('auth')
@Tags('Auth')
export class AuthController extends Controller {
  private readonly service: AuthService

  constructor() {
    super()
    this.service = new AuthService()
  }

  @Post('login')
  @Response<ValidateErrorJSON>(401, 'Unauthorized!')
  public async login(@Body() body: LoginInput): Promise<LoginDTO> {
    return this.service.login(body)
  }

  @Post('refresh-token')
  // @Example<LoginDTO>({
  //   accessToken: 'many',
  //   user: {
  //     username: 'hello world',
  //   },
  // })
  @Middlewares(authenticate)
  public async refreshToken(@Request() req: RequestEx) {
    // TODO:-D define type
    // @ts-ignore
    return req.user
  }

  // @SuccessResponse('201', 'Created') // Custom success response
  // @Post()
  // public async createUser(@Body() requestBody: UserCreationParams): Promise<void> {
  //   this.setStatus(201) // set return status 201
  //   this.service.create(requestBody)
  //   return
  // }

  // @SuccessResponse('201', 'Created') // Custom success response
  // @Post('create-user')
  // public async createUser2(@Body() requestBody: UserCreationParams): Promise<void> {
  //   this.setStatus(201) // set return status 201
  //   this.service.create(requestBody)
  //   return
  // }
}
