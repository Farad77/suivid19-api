import { Controller, Get, Post, Put, Delete, Body, Param, UseGuards } from '@nestjs/common';
import { CreateNotificationModelDto } from './dto/create-notification-model.dto';
import { ApiTags, ApiBearerAuth } from '@nestjs/swagger';
import { NotificationModelService } from './notification-model.service';
import { NotificationModel } from './notification-model.entity';
import { UpdateNotificationModelDto } from './dto/update-notification-model.dto';
import { UpdateResult } from 'typeorm';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@ApiTags('notification-model')
@ApiBearerAuth()
@UseGuards(JwtAuthGuard)
@Controller('notification-model')
export class NotificationModelController {
    constructor(private notificationModelService: NotificationModelService) { }
  
    @Get()
    getAll(): Promise<NotificationModel[]> {
      return this.notificationModelService.findAll();
    }
  
    @Get(':id')
    get(@Param('id') id: string): Promise<NotificationModel> {
      return this.notificationModelService.findOne(id);
    }

    @Post()
    create(@Body() notificationModel: CreateNotificationModelDto) {
        return notificationModel;
    }
  
    @Put(':id')
    update(@Param('id') id: string, @Body() notificationModel: UpdateNotificationModelDto): Promise<UpdateResult> {
      return this.notificationModelService.update(id, notificationModel);
    }
  
    @Delete(':id')
    remove(@Param('id') id: string): Promise<void> {
      return this.notificationModelService.remove(id);
    }
}
