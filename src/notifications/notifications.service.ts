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

  findOne(currentUser: User, id: string): Promise<Notification[]> {
    return this.notificationsRepository.find({ where: { id: id, user: currentUser } });
  }

  setViewed(currentUser: User, id: string, isViewed: boolean, viewDate: Date): Promise<UpdateResult> {
      return this.notificationsRepository.update(id, { isViewed: isViewed, viewDate: viewDate});    
  }

  update(id: string, updateNotificationDto: UpdateNotificationDto): Promise<UpdateResult> {
    return this.notificationsRepository.update(id, updateNotificationDto);
  }

  async remove(id: string): Promise<void> {
    await this.notificationsRepository.delete(id);
  }
}
