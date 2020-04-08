import { Module } from '@nestjs/common';
import { TemperatureController } from './temperature.controller';
import { TemperatureService } from './temperature.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Temperature } from './temperature.entity';
import { TemperatureRepository } from './temperature.repository';

@Module({

  imports: [TypeOrmModule.forFeature([Temperature, TemperatureRepository])],
  exports: [TypeOrmModule],
  controllers: [TemperatureController],
  providers: [TemperatureService]
})
export class TemperatureModule {}
