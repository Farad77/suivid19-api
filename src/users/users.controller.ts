import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('users')
@Controller('users')
export class UsersController {
  @Get()
  getAll() {
    return 'we get all users';
  }

  @Post()
  create(@Body() user: CreateUserDto) {
    return user;
  }

  @Get(':id')
  get(@Param('id') id: string) {
    return `we get the user with the id ${id}`;
  }

  @Put(':id')
  update(@Param('id') id: string) {
    return `we update the user with the id ${id}`;
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return `we delete the user with the id ${id}`;
  }
}
