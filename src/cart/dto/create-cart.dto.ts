// create-cart.dto.ts

import { ApiProperty } from '@nestjs/swagger';
import { IsInt, IsDecimal, IsNotEmpty, IsString } from 'class-validator';

export class CreateCartDto {
  @ApiProperty({
    description: 'ID of the product in the cart',
    example: 1,
  })
  @IsInt()
  @IsNotEmpty()
  product_id: number;

  @ApiProperty({
    description: 'ID of the buyer in the cart',
    example: 1,
  })
  @IsInt()
  @IsNotEmpty()
  buyer_id: number;

  @ApiProperty({
    description: 'Selected quantity of the product in the cart',
    example: 2,
  })
  @IsInt()
  @IsNotEmpty()
  selected_quantity: number;

  @ApiProperty({
    description: 'Total price of the product in the cart',
    example: 25.99,
  })
  @IsDecimal({ decimal_digits: '2' })
  @IsNotEmpty()
  total_price: number;

  @ApiProperty({
    description: 'Status of the cart (pending, completed, canceled)',
    example: 'pending',
  })
  @IsString()
  @IsNotEmpty()
  status: string;
}
