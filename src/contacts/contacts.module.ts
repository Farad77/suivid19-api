import { Module } from '@nestjs/common';
import { ContactsController } from './contacts.controller';
import { ContactsService } from './contacts.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Contact } from './contacts.entity';
import { ContactRepository } from './contacts.repository';

@Module({
  imports: [TypeOrmModule.forFeature([Contact, ContactRepository])],
  exports: [TypeOrmModule],
  controllers: [ContactsController],
  providers: [ContactsService]
})
export class ContactsModule {}
