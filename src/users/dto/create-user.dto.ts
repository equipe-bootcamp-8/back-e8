import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsString, Matches } from 'class-validator';

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

  @Matches(
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[$*&@#.])[0-9a-zA-Z$*&@#.]{8,}$/,
    {
      message:
        'Weak password! \n It must contain at least 8 characters, \n being an uppercase letter, \n a lowercase letter, \n a number and one of the special characters: $*&@#.',
    },
  )
  @ApiProperty({
    description: 'Password user',
    example: 'Abc1234@',
  })
  password: string;
}
