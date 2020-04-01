import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { CreateAgentDto } from './dto/create-agent.dto';
import { ApiTags } from '@nestjs/swagger';
import { AgentsService } from './agents.service';
import { Agent } from './agents.entity';
import { UpdateAgentDto } from './dto/update-agent.dto';
import { UpdateResult } from 'typeorm';

@ApiTags('agents')
@Controller('agents')
export class AgentsController {
  constructor(private agentsService: AgentsService) { }

  @Get()
  getAll(): Promise<Agent[]> {
    return this.agentsService.findAll();
  }

  @Post()
  create(@Body() Agent: CreateAgentDto): Promise<Agent> {
    return this.agentsService.create(Agent);
  }

  @Get(':id')
  get(@Param('id') id: string): Promise<Agent> {
    return this.agentsService.findOne(id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() Agent: UpdateAgentDto): Promise<UpdateResult> {
    return this.agentsService.update(id, Agent);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<void> {
    return this.agentsService.remove(id);
  }
}
