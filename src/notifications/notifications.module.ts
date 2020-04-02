import { Module } from '@nestjs/common';
import { NotificationsController } from './notifications.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Notification } from './notifications.entity';
import { NotificationRepository } from './notifications.repository';
import { NotificationsService } from './notifications.service';

@Module({
  imports: [TypeOrmModule.forFeature([Notification, NotificationRepository])],
  exports: [TypeOrmModule],
  controllers: [NotificationsController],
  providers: [NotificationsService]
})
export class NotificationsModule {}
