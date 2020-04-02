import { Module } from '@nestjs/common';
import { LabosController } from './labos.controller';
import { LabosService } from './labos.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Labo } from './labos.entity';
import { LaboRepository } from './labos.repository';

@Module({
  imports: [TypeOrmModule.forFeature([Labo, LaboRepository])],
  exports: [TypeOrmModule],
  controllers: [LabosController],
  providers: [LabosService]
})
export class LabosModule {}
