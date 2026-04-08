import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TeaService } from './tea.service';
import { CreateTeaDto } from './dto/create-tea.dto';
import { UpdateTeaDto } from './dto/update-tea.dto';
import {Tea} from "./entities/tea.entity";


@Controller('tea')
export class TeaController {
  constructor(private readonly teaService: TeaService) {}

  @Post()
  async create(@Body() createTeaDto: CreateTeaDto) {
    return await this.teaService.create(createTeaDto);
  }

  @Get()
  async findAll(): Promise<Tea[]> {
    return await this.teaService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.teaService.findOne(+id);
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateTeaDto: UpdateTeaDto) {
    return await this.teaService.update(+id, updateTeaDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return await this.teaService.remove(+id);
  }
}
