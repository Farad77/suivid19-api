import { Module } from '@nestjs/common';
import { PatientsController } from './patients.controller';
import { PatientsService } from './patients.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Patient } from './patients.entity';
import { PatientRepository } from './patients.repository';

@Module({
  imports: [TypeOrmModule.forFeature([Patient, PatientRepository])],
  exports: [TypeOrmModule],
  controllers: [PatientsController],
  providers: [PatientsService]
})
export class PatientsModule {}
