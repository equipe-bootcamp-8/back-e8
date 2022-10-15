import { ApiProperty } from '@nestjs/swagger';
import {
  IsBoolean,
  IsNotEmpty,
  IsNumber,
  IsString,
  IsUrl,
  IsUUID,
} from 'class-validator';

export class CreateProductDto {
  @IsNumber({
    maxDecimalPlaces: 2,
  })
  @IsNotEmpty()
  @ApiProperty({
    description: 'Product Code Number',
    example: 2883746657329,
  })
  code: number;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    description: 'Product"s name',
    example: 'Tenis nike',
  })
  name: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    description: 'Product Description',
    example: 'Tenis com tamanho 40',
  })
  description: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    description: 'Product Category name',
    example: 'Calçados',
  })
  categoryName: string;

  @IsUrl()
  @ApiProperty({
    description: 'Product Image',
    example:
      'https://media.istockphoto.com/photos/beautiful-background-from-texture-closeup-decorative-venetian-stucco-picture-id1189093751',
  })
  image: string;

  @IsNumber({
    maxDecimalPlaces: 2,
  })
  @IsNotEmpty()
  @ApiProperty({
    description: 'Product Price',
    example: 19.99,
  })
  price: number;

  @IsBoolean()
  @IsNotEmpty()
  @ApiProperty({
    description: 'Product Availability',
    example: true,
  })
  available: boolean;
}
