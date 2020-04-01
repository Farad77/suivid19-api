import { Module } from '@nestjs/common';
import { PersonsController } from './persons.controller';
import { PersonsService } from './persons.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Person } from './persons.entity';
import { PersonRepository } from './persons.repository';

@Module({
  imports: [TypeOrmModule.forFeature([Person, PersonRepository])],
  exports: [TypeOrmModule],
  controllers: [PersonsController],
  providers: [PersonsService]
})
export class PersonsModule {}
