import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SymptomsService } from './symptoms.service';
import { Symptoms } from './symptoms.entity';
import { SymptomsRepository } from './symptoms.repository';
import { SymptomsController } from './symptoms.controller';

@Module({

        imports: [TypeOrmModule.forFeature([Symptoms, SymptomsRepository])],
        exports: [TypeOrmModule],
        controllers: [SymptomsController],
        providers: [SymptomsService]

})
export class SymptomsModule {}
