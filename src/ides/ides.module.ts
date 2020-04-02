import { Module } from '@nestjs/common';
import { IdesController } from './ides.controller';
import { IdesService } from './ides.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Ide } from './ides.entity';
import { IdeRepository } from './ides.repository';

@Module({
  imports: [TypeOrmModule.forFeature([Ide, IdeRepository])],
  exports: [TypeOrmModule],
  controllers: [IdesController],
  providers: [IdesService]
})
export class IdesModule {}
