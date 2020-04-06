
import { EntityRepository, Repository } from 'typeorm';
import { NotificationModel } from './notification-model.entity';
import { CreateNotificationModelDto } from './dto/create-notification-model.dto';

@EntityRepository(NotificationModel)
export class NotificationModelRepository extends Repository<NotificationModel> {
  async createNotification(createNotificationModelDto: CreateNotificationModelDto) {
    const notificationModel = new NotificationModel();
    notificationModel.text = createNotificationModelDto.text;
    notificationModel.status = createNotificationModelDto.status;
    
    return await this.save(notificationModel);
  }
}