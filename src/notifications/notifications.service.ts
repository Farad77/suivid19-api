import { Injectable } from '@nestjs/common';
import { Notification } from './Notifications.entity';
import { NotificationRepository } from './Notifications.repository';
import { CreateNotificationDto } from './dto/create-Notification.dto';
import { UpdateNotificationDto } from './dto/update-Notification.dto';
import { UpdateResult } from 'typeorm';

@Injectable()
export class NotificationsService {
    constructor(private notificationsRepository: NotificationRepository) { }

    findAll(): Promise<Notification[]> {
      return this.notificationsRepository.find();
    }
  
    create(notification: CreateNotificationDto): Promise<Notification> {
      return this.notificationsRepository.createNotification(notification);
    }
  
    findOne(id: string): Promise<Notification> {
      return this.notificationsRepository.findOne(id);
    }
  
    update(id: string, updateNotificationDto: UpdateNotificationDto): Promise<UpdateResult> {
      return this.notificationsRepository.update(id, updateNotificationDto);
    }
  
    async remove(id: string): Promise<void> {
      await this.notificationsRepository.delete(id);
    }
}
