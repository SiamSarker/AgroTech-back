// cart.service.ts

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, UpdateResult, DeleteResult } from 'typeorm';
import { Cart } from 'src/models/cart.model';
import { CreateCartDto } from './dto/create-cart.dto';

@Injectable()
export class CartService {
  constructor(
    @InjectRepository(Cart)
    private readonly cartRepository: Repository<Cart>,
  ) {}

  async create(createCartDto: CreateCartDto): Promise<Cart> {
    const cart = this.cartRepository.create(createCartDto);
    return this.cartRepository.save(cart);
  }

  async findAll(): Promise<Cart[]> {
    return this.cartRepository.find();
  }

  async findOne(id: number): Promise<Cart | undefined> {
    return this.cartRepository.findOneById(id);
  }

  async update(
    id: number,
    updateCartDto: CreateCartDto,
  ): Promise<UpdateResult> {
    return this.cartRepository.update(id, updateCartDto);
  }

  async remove(id: number): Promise<DeleteResult> {
    return this.cartRepository.delete(id);
  }
}
