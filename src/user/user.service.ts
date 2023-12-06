import { Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Users } from 'src/models/user.model';
import { CreateUserDto, UserCredDTO } from './dto/user.dto';

@Injectable()
export class UserService {
  private readonly email: string = 'abc@gmail.com';
  private readonly password: string = 'abc1234';

  constructor(
    @InjectRepository(Users) private readonly userRepository: Repository<Users>,
  ) {}

  async userAuth(userCredential: UserCredDTO): Promise<Users | null> {
    const user = await this.userRepository.findOne({
      where: { email: userCredential.email, password: userCredential.password },
    });

    if (!user) {
      throw new UnauthorizedException('Invalid credentials');
    }

    return user;
  }

  async createUser(createUserDTO: CreateUserDto) {
    const user = this.userRepository.create(createUserDTO);
    const result = await this.userRepository.save(user);
    return result;
  }

  async getUserByEmail(email: string): Promise<Users | undefined> {
    return this.userRepository.findOne({ where: { email } });
  }

  async getUserByID(id: number): Promise<Users | undefined> {
    return this.userRepository.findOne({ where: { id } });
  }
}
