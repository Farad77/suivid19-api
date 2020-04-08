import { Injectable } from '@nestjs/common';
import { Notification } from './notifications.entity';
import { NotificationRepository } from './notifications.repository';
import { CreateNotificationDto } from './dto/create-notification.dto';
import { UpdateNotificationDto } from './dto/update-notification.dto';
import { UpdateResult } from 'typeorm';
import { User } from 'src/users/users.entity';

@Injectable()
export class NotificationsService {
  constructor(private notificationsRepository: NotificationRepository) { }

  findAll(currentUser: User): Promise<Notification[]> {
    return this.notificationsRepository.find({ where: { user: currentUser } });
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
