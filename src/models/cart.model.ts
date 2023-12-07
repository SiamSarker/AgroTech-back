// cart.model.ts

import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { Products } from './product.model';
import { Users } from './user.model';

@Entity('cart')
export class Cart {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'integer' })
  product_id: number;

  @Column({ type: 'integer' })
  buyer_id: number;

  @Column({ type: 'integer' })
  selected_quantity: number;

  @Column({ type: 'decimal', precision: 10, scale: 2 })
  total_price: number;

  @Column({ type: 'varchar', length: 50, default: 'pending' })
  status: string;

  @CreateDateColumn({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  created_at: Date;

  @UpdateDateColumn({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  updated_at: Date;

  @ManyToOne(() => Products, (product) => product.cartEntries)
  @JoinColumn({ name: 'product_id' })
  product: Products;

  @ManyToOne(() => Users, (user) => user.cartEntries)
  @JoinColumn({ name: 'buyer_id' })
  buyer: Users;
}
