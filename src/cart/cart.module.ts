// cart.module.ts

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Cart } from 'src/models/cart.model';
import { CartController } from './cart.controller';
import { CartService } from './cart.service';
import { CartRepository } from './cart.repository';

@Module({
  imports: [TypeOrmModule.forFeature([Cart, CartRepository])],
  controllers: [CartController],
  providers: [CartService],
})
export class CartModule {}
