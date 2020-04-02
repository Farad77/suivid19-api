import { Module } from '@nestjs/common';
import { LabosController } from './labos.controller';
import { LabosService } from './labos.service';

@Module({
  controllers: [LabosController],
  providers: [LabosService]
})
export class LabosModule {}
