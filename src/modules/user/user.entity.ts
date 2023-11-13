import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Advertisement } from '../advertisement/advertisement.entity';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  username: string;

  @Column()
  password: string;

  @OneToMany(() => Advertisement, (advertisement) => advertisement.seller)
  advertisements: Advertisement[];

  @Column()
  accountType: 'Basic' | 'Premium';

  @Column({ type: 'simple-array' })
  roles: string[];
}
