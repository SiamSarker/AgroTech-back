// user.model.ts

import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Products } from './product.model';
import { Cart } from './cart.model';

@Entity('users')
export class Users {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 255 })
  username: string;

  @Column({ length: 255 })
  password: string;

  @Column({ length: 320, nullable: true })
  email: string;

  @Column({ length: 20 })
  phone: string;

  @Column({ length: 255 })
  address: string;

  @Column({ length: 50, default: 'buyer', nullable: true })
  role: string;

  @OneToMany(() => Products, (product) => product.farmer)
  products: Products[];

  @OneToMany(() => Cart, (cart) => cart.buyer) // Add this line for the Cart relationship
  cartEntries: Cart[];
}
