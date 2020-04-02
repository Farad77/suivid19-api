import { Module } from '@nestjs/common';
import { TestsController } from './tests.controller';
import { TestsService } from './tests.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Test } from './tests.entity';
import { TestsRepository } from './tests.repository';

@Module({
  imports: [TypeOrmModule.forFeature([Test, TestsRepository])],
  exports: [TypeOrmModule],
  controllers: [TestsController],
  providers: [TestsService]
})
export class TestsModule {}
