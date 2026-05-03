import { Exclude } from 'class-transformer';
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  userId: number;

  @Column()
  name: string;

  @Column()
  role: 'PT' | 'PATIENT';

  @Column({ unique: true })
  email: string;

  @Exclude()
  @Column()
  password: string;
}
