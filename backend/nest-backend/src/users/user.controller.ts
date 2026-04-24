import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Controller('users')
export class UserController {
    constructor(private readonly userService: UserService) {}

    @Post()
    async create(@Body() createUserDto: CreateUserDto) {
        return await this.userService.create(createUserDto);
    }

    @Get()
    async findAll() {
        return await this.userService.findAll();
    }

    @Get(':id')
    async findOne(@Param('id') id: number) {
        return await this.userService.findOneId(id);
    }

    @Get(':id')
    async findOneEmail(@Param('email') email: string) {
        return await this.userService.findOneEmail(email);
    }

    @Patch(':id')
    async update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
        return await this.userService.update(+id, updateUserDto);
    }

    @Delete(':id')
    async remove(@Param('id') id: number) {
        return await this.userService.remove(+id);
    }
}
