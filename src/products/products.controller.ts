import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
} from '@nestjs/common';
import { ProductsService } from './products.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { Product } from './entities/product.entity';

@ApiTags('products')
@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Post()
  @ApiOperation({ summary: 'Criar um produto' })
  create(@Body() dto: CreateProductDto): Promise<Product | void> {
    return this.productsService.create(dto);
  }

  @Get()
  @ApiOperation({ summary: 'Visualizar todos os produtos' })
  findAll(@Query() query: Partial<Product>): Promise<Product[]> {
    return this.productsService.findAll(query);
  }

  @Get(':id')
  @ApiOperation({ summary: 'Visualizar um produto' })
  findOne(@Param('id') id: string) {
    return this.productsService.findOne(id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Atualizar um produto' })
  update(
    @Param('id') id: string,
    @Body() dto: UpdateProductDto,
  ): Promise<Product | void> {
    return this.productsService.update(id, dto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Deletar um produto' })
  remove(@Param('id') id: string) {
    return this.productsService.remove(id);
  }
}
