import { Module } from '@nestjs/common';
import { SurveycategorieController } from './surveycategorie.controller';
import { SurveycategorieService } from './surveycategorie.service';
import { Surveycategorie } from './surveycategorie.entity';
import { SurveycategorieRepository } from './surveycategorie.repostitory';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Surveycategorie, SurveycategorieRepository])],
  exports: [TypeOrmModule, SurveycategorieService],
  controllers: [SurveycategorieController],
  providers: [SurveycategorieService]
})
export class SurveycategorieModule {}
