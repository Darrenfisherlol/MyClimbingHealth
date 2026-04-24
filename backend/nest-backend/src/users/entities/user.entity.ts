import {Entity, Column, PrimaryGeneratedColumn, ManyToMany} from 'typeorm';

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    userId: number;

    @Column()
    name: string;


    @Column()
    role: 'PT' | 'PATIENT';

    @Column()
    email: string;

    @Column()
    password: string;
}
