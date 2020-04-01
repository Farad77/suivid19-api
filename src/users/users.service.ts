import { Injectable } from '@nestjs/common';
import { User } from './users.entity';
import { UserRepository } from './users.repository';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UpdateResult } from 'typeorm';

@Injectable()
export class UsersService {
  constructor(private usersRepository: UserRepository) { }

  findAll(): Promise<User[]> {
    return this.usersRepository.find();
  }

  create(user: CreateUserDto): Promise<User> {
    return this.usersRepository.createUser(user);
  }

  findOne(id: string): Promise<User> {
    return this.usersRepository.findOne(id);
  }

  update(id: string, updateUserDto: UpdateUserDto): Promise<UpdateResult> {
    return this.usersRepository.update(id, updateUserDto);
  }

  async remove(id: string): Promise<void> {
    await this.usersRepository.delete(id);
  }
}