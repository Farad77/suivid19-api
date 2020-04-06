import { Module } from '@nestjs/common';
import { SurveychoicesController } from './surveychoices.controller';
import { SurveychoicesService } from './surveychoices.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Surveychoices } from './surveychoices.entity';
import { SurveychoicesRepository } from './surveychoices.repository';

@Module({
  imports: [TypeOrmModule.forFeature([Surveychoices, SurveychoicesRepository])],
  exports: [TypeOrmModule, SurveychoicesService],
  controllers: [SurveychoicesController],
  providers: [SurveychoicesService]
})
export class SurveychoicesModule {}
