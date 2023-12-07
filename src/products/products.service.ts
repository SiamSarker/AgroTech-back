// src/products/products.service.ts

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, UpdateResult, DeleteResult } from 'typeorm';
import { Products } from 'src/models/product.model';
import { CreateProductDto } from './dto/create-product.dto';

@Injectable()
export class ProductsService {
  constructor(
    @InjectRepository(Products)
    private readonly productsRepository: Repository<Products>,
  ) {}

  async create(createProductDto: CreateProductDto): Promise<Products> {
    const product = this.productsRepository.create(createProductDto);
    return this.productsRepository.save(product);
  }

  async findAll(): Promise<Products[]> {
    return this.productsRepository.find();
  }

  async findOne(id: number): Promise<Products | undefined> {
    return this.productsRepository.findOneById(id);
  }

  async update(
    id: number,
    updateProductDto: CreateProductDto,
  ): Promise<UpdateResult> {
    return this.productsRepository.update(id, updateProductDto);
  }

  async remove(id: number): Promise<DeleteResult> {
    return this.productsRepository.delete(id);
  }
}
