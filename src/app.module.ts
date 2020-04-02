import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';
import { Connection } from 'typeorm';
import { TestsModule } from './tests/tests.module';
import { PersonsModule } from './persons/persons.module';
import { RelativesModule } from './relatives/relatives.module';
import { DoctorsModule } from './doctors/doctors.module';
import { AdminsModule } from './admins/admins.module';
import { AgentsModule } from './agents/agents.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(),
    UsersModule,
    TestsModule,
    PersonsModule,
    RelativesModule,
    DoctorsModule,
    AdminsModule,
    AgentsModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  constructor(private connection: Connection) { }
}
