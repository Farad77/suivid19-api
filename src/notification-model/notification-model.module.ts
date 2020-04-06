import { Module } from '@nestjs/common';
import { NotificationModelController } from './notification-model.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { NotificationModel } from './notification-model.entity';
import { NotificationModelRepository } from './notification-model.repository';
import { NotificationModelService } from './notification-model.service';

@Module({
  imports: [TypeOrmModule.forFeature([NotificationModel, NotificationModelRepository])],
  exports: [TypeOrmModule],
  controllers: [NotificationModelController],
  providers: [NotificationModelService]
})
export class NotificationModelModule {}
