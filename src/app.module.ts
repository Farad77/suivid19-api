import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';
import { Connection } from 'typeorm';
import { PersonsModule } from './persons/persons.module';
import { RelativesModule } from './relatives/relatives.module';
import { DoctorsModule } from './doctors/doctors.module';
import { AdminsModule } from './admins/admins.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(),
    UsersModule,
    PersonsModule,
    RelativesModule,
    DoctorsModule,
    AdminsModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  constructor(private connection: Connection) { }
}
