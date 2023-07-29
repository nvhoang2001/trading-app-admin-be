import { compare } from 'bcrypt'
import AppDataSource from 'configs/typeorm.config'
import ENV from 'constants/environment'
import { sign } from 'jsonwebtoken'
import { User } from 'modules/user/user.entity'
import { Repository } from 'typeorm'
import { showError } from 'utils/show-error'
import { LoginDTO } from './dto/auth.dto'
import { LoginInput } from './dto/auth.input'

export class AuthService {
  protected repo: Repository<User>

  constructor() {
    this.repo = AppDataSource.getRepository(User)
  }

  async test() {
    const test = await this.repo.find()

    console.log('22343')

    console.log(test)
    return test
  }

  // async register(req: Request, res: Response, next: NextFunction): Promise<Response> {
  //   const registerData = req.body;

  //   const dto = new RegisterDTO();
  //   dto.email = registerData.email;
  //   dto.name = registerData.name;
  //   dto.password = registerData.password;

  //   await validateOrReject(dto);

  //   const repo = AppDataSource.getRepository(User);
  //   const user = repo.create(registerData);
  //   await repo.save(user);

  //   return ResponseUtil.sendResponse(res, "Successfully registered", user, null);
  // }

  async login(body: LoginInput): Promise<LoginDTO> {
    const { username, password } = body
    const dto = new LoginInput()
    dto.username = username
    dto.password = password

    // await validateOrReject(dto);

    const user = await this.repo.findOneBy({ username })
    if (!user) return showError('Invalid credentials', 401)

    let passwordMatches = await compare(password, user.password)
    if (!passwordMatches) return showError('Invalid credentials', 401)

    let accessToken = sign({ id: user.id }, ENV.ACCESS_TOKEN_SECRET, {
      expiresIn: '3d',
    })

    return {
      accessToken,
      user,
    }
  }
}
