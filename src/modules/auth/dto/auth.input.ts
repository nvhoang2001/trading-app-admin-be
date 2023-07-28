import { IsEmail, IsNotEmpty, MaxLength, MinLength } from "class-validator";
// import { IsUnique } from "../validators/IsUniqueValidator";
// import { User } from "modules/user/user.entity";

export class RegisterInput {
  @IsNotEmpty()
  @MinLength(3)
  @MaxLength(20)
  username: string;

  // @IsNotEmpty()
  // @IsEmail()
  // @IsUnique(User, "email")
  // email: string;

  @IsNotEmpty()
  @MinLength(5)
  @MaxLength(20)
  password: string;
}

export class LoginInput {
  @IsNotEmpty()
  @MinLength(3)
  @MaxLength(20)
  username: string;

  @IsNotEmpty()
  @MinLength(5)
  @MaxLength(20)
  password: string;
}
