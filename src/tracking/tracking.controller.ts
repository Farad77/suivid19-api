import { Controller, Get, Post, Put, Delete, Body, Param, UseGuards } from '@nestjs/common';
import { CreateTrackingDto } from './dto/create-tracking.dto';
import { ApiTags, ApiBearerAuth } from '@nestjs/swagger';
import { TrackingService } from './tracking.service';
import { Tracking } from './tracking.entity';
import { UpdateTrackingDto } from './dto/update-tracking.dto';
import { UpdateResult } from 'typeorm';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@ApiTags('tracking')
@ApiBearerAuth()
@UseGuards(JwtAuthGuard)
@Controller('tracking')
export class TrackingController {
    constructor(private trackingService: TrackingService) { }
  
    @Get()
    getAll(): Promise<Tracking[]> {
      return this.trackingService.findAll();
    }
  
    @Get(':id')
    get(@Param('id') id: string): Promise<Tracking> {
      return this.trackingService.findOne(id);
    }

    @Post()
    create(@Body() tracking: CreateTrackingDto) {
        return tracking;
    }
  
    @Put(':id')
    update(@Param('id') id: string, @Body() tracking: UpdateTrackingDto): Promise<UpdateResult> {
      return this.trackingService.update(id, tracking);
    }
  
    @Delete(':id')
    remove(@Param('id') id: string): Promise<void> {
      return this.trackingService.remove(id);
    }
}
