// src/products/dto/create-product.dto.ts

import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, IsInt, IsNumber } from 'class-validator';

export class CreateProductDto {
  @ApiProperty({
    description: "Product's name",
    type: String,
    example: 'Product A',
  })
  @IsNotEmpty()
  @IsString()
  readonly name: string;

  @ApiProperty({
    description: "Path to the product's image",
    type: String,
    example: 'path/to/image.jpg',
    required: false,
  })
  @IsString()
  readonly img_path?: string;

  @ApiProperty({
    description: 'Available quantity of the product',
    type: Number,
    example: 100,
  })
  @IsNotEmpty()
  @IsInt()
  readonly available_quantity: number;

  @ApiProperty({
    description: 'Unit of measurement for the product',
    type: String,
    example: 'kg',
  })
  @IsNotEmpty()
  @IsString()
  readonly unit: string;

  @ApiProperty({
    description: 'Price of the product',
    type: Number,
    example: 25.99,
  })
  @IsNotEmpty()
  @IsNumber()
  readonly price: number;
}
