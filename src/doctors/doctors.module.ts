import { Module } from '@nestjs/common';
import { DoctorsController } from './doctors.controller';
import { DoctorsService } from './doctors.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Doctor } from './doctors.entity';
import { DoctorRepository } from './doctors.repository';

@Module({
  imports: [TypeOrmModule.forFeature([Doctor, DoctorRepository])],
  exports: [TypeOrmModule],
  controllers: [DoctorsController],
  providers: [DoctorsService]
})
export class DoctorsModule {}
