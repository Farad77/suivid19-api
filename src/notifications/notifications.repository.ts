import { EntityRepository, Repository } from 'typeorm';
import { Notification } from './notifications.entity';
import { CreateNotificationDto } from './dto/create-notification.dto';

@EntityRepository(Notification)
export class NotificationRepository extends Repository<Notification> {
  async createNotification(createNotificationDto: CreateNotificationDto) {
    const notification = new Notification();
    notification.user = createNotificationDto.user;
    notification.type = createNotificationDto.type;
    notification.text = createNotificationDto.text;
    notification.creationDate = createNotificationDto.creationDate;
    notification.sendDate = createNotificationDto.sendDate;
    notification.isViewed = createNotificationDto.isViewed;
    notification.viewDate = createNotificationDto.viewDate;

    return await this.save(notification);
  }
}