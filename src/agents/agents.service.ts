import { Injectable } from '@nestjs/common';
import { Agent } from './agents.entity';
import { AgentRepository } from './agents.repository';
import { CreateAgentDto } from './dto/create-agent.dto';
import { UpdateAgentDto } from './dto/update-agent.dto';
import { UpdateResult } from 'typeorm';

@Injectable()
export class AgentsService {
  constructor(private agentsRepository: AgentRepository) { }

  findAll(): Promise<Agent[]> {
    return this.agentsRepository.find();
  }

  create(Agent: CreateAgentDto): Promise<Agent> {
    return this.agentsRepository.createAgent(Agent);
  }

  findOne(id: string): Promise<Agent> {
    return this.agentsRepository.findOne(id);
  }

  update(id: string, updateAgentDto: UpdateAgentDto): Promise<UpdateResult> {
    return this.agentsRepository.update(id, updateAgentDto);
  }

  async remove(id: string): Promise<void> {
    await this.agentsRepository.delete(id);
  }
}