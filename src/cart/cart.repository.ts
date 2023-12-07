// cart.repository.ts

import { EntityRepository, Repository } from 'typeorm';
import { Cart } from 'src/models/cart.model';

@EntityRepository(Cart)
export class CartRepository extends Repository<Cart> {
  async findOneById(id: number): Promise<Cart | undefined> {
    return this.createQueryBuilder('cart')
      .where('cart.id = :id', { id })
      .getOne();
  }
}
