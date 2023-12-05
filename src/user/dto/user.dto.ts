import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsString } from 'class-validator';

export class UserCredDTO {
  @ApiProperty({
    name: 'email',
    description: "User's Email",
    type: String,
    example: 'dev@company.com',
  })
  readonly email: string;

  @ApiProperty({
    name: 'password',
    description: "User's Password",
    type: String,
    example: 'abc123',
  })
  readonly password: string;
}

export class CreateUserDto {
  @ApiProperty({
    name: 'username',
    description: "User's username",
    type: String,
    example: 'XYZ',
  })
  @IsString()
  readonly username: string;

  @ApiProperty({
    name: 'password',
    description: "User's password",
    type: String,
    example: 'XYZ',
  })
  @IsString()
  readonly password: string;

  @ApiProperty({
    name: 'email',
    description: "User's email",
    type: String,
    example: 'dev@company.com',
  })
  @IsString()
  readonly email: string;

  @ApiProperty({
    name: 'phone',
    description: "User's phone",
    type: String,
    example: '1234567890',
  })
  @IsString()
  readonly phone: string;

  @ApiProperty({
    name: 'address',
    description: "User's address",
    type: String,
    example: '123 Main St, City',
  })
  @IsString()
  readonly address: string;

  @ApiProperty({
    name: 'role',
    description: "User's role",
    type: String,
    example: 'buyer',
  })
  @IsString()
  @IsOptional()
  readonly role?: string;
}
