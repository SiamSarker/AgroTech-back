// cart.controller.ts

import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  NotFoundException,
  Put,
  Delete,
} from '@nestjs/common';
import { CartService } from './cart.service';
import { CreateCartDto } from './dto/create-cart.dto';
import { UpdateResult, DeleteResult } from 'typeorm';
import { Cart } from 'src/models/cart.model';

@Controller('cart')
export class CartController {
  constructor(private readonly cartService: CartService) {}

  @Post()
  async create(@Body() createCartDto: CreateCartDto): Promise<Cart> {
    return this.cartService.create(createCartDto);
  }

  @Get()
  async findAll(): Promise<Cart[]> {
    return this.cartService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Cart> {
    const cart = await this.cartService.findOne(parseInt(id, 10));
    if (!cart) {
      throw new NotFoundException(`Cart entry with id ${id} not found`);
    }
    return cart;
  }

  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() updateCartDto: CreateCartDto,
  ): Promise<UpdateResult> {
    return this.cartService.update(parseInt(id, 10), updateCartDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string): Promise<DeleteResult> {
    const result = await this.cartService.remove(parseInt(id, 10));
    if (result.affected === 0) {
      throw new NotFoundException(`Cart entry with id ${id} not found`);
    }
    return result;
  }
}
