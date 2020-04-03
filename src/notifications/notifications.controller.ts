import { Controller, Get, Post, Put, Delete, Body, Param, UseGuards } from '@nestjs/common';
import { CreateNotificationDto } from './dto/create-notification.dto';
import { ApiTags, ApiBearerAuth } from '@nestjs/swagger';
import { NotificationsService } from './notifications.service';
import { Notification } from './notifications.entity';
import { UpdateNotificationDto } from './dto/update-notification.dto';
import { UpdateResult } from 'typeorm';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@ApiTags('notifications')
@ApiBearerAuth()
@UseGuards(JwtAuthGuard)
@Controller('notifications')
export class NotificationsController {
    constructor(private notificationsService: NotificationsService) { }
  
    @Get()
    getAll(): Promise<Notification[]> {
      return this.notificationsService.findAll();
    }
  
    @Get(':id')
    get(@Param('id') id: string): Promise<Notification> {
      return this.notificationsService.findOne(id);
    }

    @Post()
    create(@Body() notification: CreateNotificationDto) {
        return notification;
    }
  
    @Put(':id')
    update(@Param('id') id: string, @Body() notification: UpdateNotificationDto): Promise<UpdateResult> {
      return this.notificationsService.update(id, notification);
    }
  
    @Delete(':id')
    remove(@Param('id') id: string): Promise<void> {
      return this.notificationsService.remove(id);
    }
}
