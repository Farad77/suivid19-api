import { Module } from '@nestjs/common';
import { RelativesController } from './relatives.controller';
import { RelativesService } from './relatives.service';
import { Relative } from './relatives.entity';
import { RelativeRepository } from './relatives.repository';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Relative, RelativeRepository])],
  exports: [TypeOrmModule],
  controllers: [RelativesController],
  providers: [RelativesService]
})
export class RelativesModule {}
