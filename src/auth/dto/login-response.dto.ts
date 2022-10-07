import { ApiProperty } from '@nestjs/swagger';

export class LoginResponseDto {
  @ApiProperty({
    description: 'JWT generated in login',
    example: 'TOKEN_GENERATED_AUTOMATICALLY',
  })
  token: string;

  @ApiProperty({
    description: 'Authenticated user data',
  })
  user: string;
}
