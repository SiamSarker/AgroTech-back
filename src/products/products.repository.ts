// src/products/products.repository.ts

import { EntityRepository, Repository } from 'typeorm';
import { Products } from 'src/models/product.model';

@EntityRepository(Products)
export class ProductsRepository extends Repository<Products> {
  async findOneById(id: number): Promise<Products | undefined> {
    return this.createQueryBuilder('product')
      .where('product.id = :id', { id })
      .getOne();
  }
}
