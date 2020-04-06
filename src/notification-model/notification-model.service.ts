import { Injectable } from '@nestjs/common';
import { NotificationModel } from './notification-model.entity';
import { NotificationModelRepository } from './notification-model.repository';
import { CreateNotificationModelDto } from './dto/create-notification-model.dto';
import { UpdateNotificationModelDto } from './dto/update-notification-model.dto';
import { UpdateResult } from 'typeorm';
@Injectable()
export class NotificationModelService {
    constructor(private notificationModelRepository: NotificationModelRepository) { }

    findAll(): Promise<NotificationModel[]> {
      return this.notificationModelRepository.find();
    }
  
    create(notification: CreateNotificationModelDto): Promise<NotificationModel> {
      return this.notificationModelRepository.createNotification(notification);
    }
  
    findOne(id: string): Promise<NotificationModel> {
      return this.notificationModelRepository.findOne(id);
    }
  
    update(id: string, updateNotificationModelDto: UpdateNotificationModelDto): Promise<UpdateResult> {
      return this.notificationModelRepository.update(id, updateNotificationModelDto);
    }
  
    async remove(id: string): Promise<void> {
      await this.notificationModelRepository.delete(id);
    }
}
