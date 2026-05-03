import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';

import { User } from './entities/user.entity';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UserService {
    private readonly saltRounds = 10;

    constructor(
        @InjectRepository(User)
        private readonly userRepository: Repository<User>,
    ) {}

    async findOneId(id: number) {
        return this.userRepository.findOneBy({ userId: id });
    }

    async findOneEmail(email: string): Promise<User | null> {
        return this.userRepository.findOneBy({ email });
    }

    async update(id: number, dto: UpdateUserDto) {
        const user = await this.userRepository.findOneBy({ userId: id });
        if (!user) {
            throw new NotFoundException();
        }
        if (dto.name !== undefined) user.name = dto.name;
        if (dto.email !== undefined) user.email = dto.email;
        if (dto.password !== undefined) {
            user.password = await bcrypt.hash(dto.password, this.saltRounds);
        }
        return this.userRepository.save(user);
    }
}
