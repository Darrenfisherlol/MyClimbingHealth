import { Injectable } from '@nestjs/common';
import {InjectRepository} from "@nestjs/typeorm";
import {Repository} from "typeorm";
import * as bcrypt from 'bcrypt';

import { User } from './entities/user.entity';
import { CreateUserDto } from "./dto/create-user.dto";
import { UpdateUserDto } from './dto/update-user.dto';
import {Patient} from "../patient/entities/patient.entity";


// This should be a real class/interface representing a user entity

@Injectable()
export class UserService {

    constructor(
        @InjectRepository(User)
        private readonly userRepository: Repository<User>,
    ) {}

    // private readonly users = [
    //     {
    //         userId: 1,
    //         email: 'john',
    //         password: 'changeme',
    //     },
    //     {
    //         userId: 2,
    //         email: 'maria',
    //         password: 'guess',
    //     },
    // ];

    // encrypt the password
    // goal is to never showcase password in plain txt

    async findOneId(id: number){

        return this.userRepository.findOneBy({ userId: id });
    }

    async findOneEmail(email: string): Promise<User | undefined> {
        // encrypt the password
        // goal is to never showcase password in plain txt
        const user =  await this.userRepository.findOneBy({ email: email });

        if (!user) {
            return undefined;
        }

        return user;
    }

    async findAll() {
        return await this.userRepository.find();
    }

    async create(createUserDto : CreateUserDto)
    {
        const saltRounds = 10;

        const hashedPassword = await bcrypt.hash(createUserDto.password, saltRounds);

        return await this.userRepository.save(createUserDto);
    }
    async update(id: number, updateUserDto : UpdateUserDto)
    {

    }
    async remove(id: number)
    {

    }


}
