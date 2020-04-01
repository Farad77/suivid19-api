import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';
import { Connection } from 'typeorm';
import { PersonsModule } from './persons/persons.module';
import { RelativesModule } from './relatives/relatives.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(),
    UsersModule,
    PersonsModule,
    RelativesModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  constructor(private connection: Connection) { }
}
