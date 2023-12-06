import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity({ name: 'users' })
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
}
