import { Controller, Get, Body, Param, Put, Delete, UseGuards, Post } from '@nestjs/common';
import { Test } from './tests.entity';
import { TestsService } from './tests.service';
import { ApiTags, ApiBearerAuth } from '@nestjs/swagger';
import { UpdateResult } from 'typeorm';
import { UpdateTestDto }from './dto/update-test.dto'
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { CreateTestDto } from './dto/create-test.dto';

@ApiTags('tests')
@ApiBearerAuth()
@UseGuards(JwtAuthGuard)
@Controller('tests')
export class TestsController {

  constructor(private testService: TestsService){}

  @Get()
    getAll(): Promise<Test[]> {
    return this.testService.findAll();
    }
    
  @Get(':id')
  get(@Param('id') id: string): Promise<Test> {
    return this.testService.findOne(id);
  }

  @Post()
  create(@Body() test: CreateTestDto): Promise<Test> {
    return this.testService.create(test);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() test: UpdateTestDto): Promise<UpdateResult> {
    return this.testService.update(id, test);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<void> {
    return this.testService.remove(id);
  }
}
