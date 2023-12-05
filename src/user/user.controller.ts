import {
  Body,
  Controller,
  Get,
  Post,
  Param,
  NotFoundException,
} from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto, UserCredDTO } from './dto/user.dto';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get(':email')
  async getUserByEmail(@Param('email') email: string) {
    const user = await this.userService.getUserByEmail(email);
    if (!user) {
      throw new NotFoundException(`User with email ${email} not found`);
    }
    return user;
  }

  @Post('create')
  async createUser(@Body() createUserDTO: CreateUserDto) {
    return this.userService.createUser(createUserDTO);
  }

  @Post('login')
  userLogin(@Body() userCredential: UserCredDTO): any {
    return this.userService.userAuth(userCredential);
  }
}
