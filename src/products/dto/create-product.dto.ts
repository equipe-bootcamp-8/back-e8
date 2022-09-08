import { ApiProperty } from '@nestjs/swagger';
import {
  IsBoolean,
  IsNotEmpty,
  IsNumber,
  IsString,
  IsUUID,
} from 'class-validator';

export class CreateProductDto {
  @IsNumber({
    maxDecimalPlaces: 2,
  })
  @IsNotEmpty()
  @ApiProperty({
    description: 'Numero do codigo do produto',
    example: 2883746657329,
  })
  code: number;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    description: 'Nome do produto',
    example: 'Tenis nike',
  })
  name: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    description: 'Descrição do produto',
    example: 'Tenis com tamanho 40',
  })
  description: string;

  @IsString()
  @IsUUID()
  @IsNotEmpty()
  @ApiProperty({
    description: 'Categoria do produto',
    example: 'Calçados',
  })
  categoryId: string;

  @IsNumber({
    maxDecimalPlaces: 2,
  })
  @IsNotEmpty()
  @ApiProperty({
    description: 'Preço do produto',
    example: `R$ ${20.0}`,
  })
  price: number;

  @IsBoolean()
  @IsNotEmpty()
  @ApiProperty({
    description: 'Disponibilidade do produto',
    example: true,
  })
  available: boolean;
}
