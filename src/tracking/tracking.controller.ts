import { Controller, Get, Post, Put, Delete, Body, Param, UseGuards } from '@nestjs/common';
import { CreateTrackingDto } from './dto/create-tracking.dto';
import { ApiTags, ApiBearerAuth } from '@nestjs/swagger';
import { TrackingService } from './tracking.service';
import { Tracking } from './tracking.entity';
import { UpdateTrackingDto } from './dto/update-tracking.dto';
import { UpdateResult } from 'typeorm';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { CurrentUser } from 'src/current-user.decorator';
import { Roles } from 'src/roles.decorator';

@ApiTags('tracking')
@ApiBearerAuth()
@UseGuards(JwtAuthGuard)
@Controller('tracking')
export class TrackingController {
    constructor(private trackingService: TrackingService) { }
  
    @Get()
    getAll(@CurrentUser() currentUser): Promise<Tracking[]> {
      return this.trackingService.findAll(currentUser);
    }
  
    @Get(':id')
    get(@CurrentUser() currentUser, @Param('id') id: string): Promise<Tracking[]> {
      return this.trackingService.findOne(currentUser, id);
    }

    @Post()
    create(@Body() tracking: CreateTrackingDto) {
        return tracking;
    }
  
    @Roles('Admin')
    @Put(':id')
    update(@Param('id') id: string, @Body() tracking: UpdateTrackingDto): Promise<UpdateResult> {
      return this.trackingService.update(id, tracking);
    }
  
    @Roles('Admin')
    @Delete(':id')
    remove(@Param('id') id: string): Promise<void> {
      return this.trackingService.remove(id);
    }
}
