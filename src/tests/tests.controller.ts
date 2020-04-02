import { Controller, Get, Body, Param, Put, Delete } from '@nestjs/common';
import { Test } from './tests.entity';
import { TestsService } from './tests.service';
import { ApiTags } from '@nestjs/swagger';
import { UpdateResult } from 'typeorm';
import { UpdateTestDto }from './dto/update-test.dto'

@ApiTags('tests')
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

  @Put(':id')
  update(@Param('id') id: string, @Body() test: UpdateTestDto): Promise<UpdateResult> {
    return this.testService.update(id, test);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<void> {
    return this.testService.remove(id);
  }
}
