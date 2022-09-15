import { ApiProperty } from '@nestjs/swagger';
import {
  IsAlphanumeric,
  IsEmail,
  IsNotEmpty,
  IsString,
  Matches,
  MinLength,
} from 'class-validator';

export class CreateUserDto {
  @IsNotEmpty()
  @IsString()
  @ApiProperty({
    description: 'Name user',
    example: 'Robert',
  })
  name: string;

  @IsEmail()
  @ApiProperty({
    description: 'E-email user',
    example: 'robert@email.com',
  })
  email: string;

  @IsAlphanumeric()
  @MinLength(8)
  @Matches(/((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, {
    message: 'Weak password',
  })
  @ApiProperty({
    description: 'Password user',
    example: 'Abc1234@',
  })
  password: string;
}
