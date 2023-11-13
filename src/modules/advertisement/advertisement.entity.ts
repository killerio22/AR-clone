import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { User } from '../user/user.entity';

@Entity()
export class Advertisement {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => User, (user) => user.advertisements)
  seller: User;

  @Column()
  title: string;

  @Column()
  description: string;

  @Column()
  year: number;

  @Column()
  mileage: number;

  @Column()
  bodyType: string;

  @Column()
  price: number;

  @Column()
  currency: string;

  @Column({ type: 'simple-array' })
  images: string[];
}
