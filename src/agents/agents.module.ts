import { Module } from '@nestjs/common';
import { AgentsController } from './agents.controller';
import { AgentsService } from './agents.service';
import { AgentRepository } from './agents.repository';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Agent } from 'http';

@Module({
  imports: [TypeOrmModule.forFeature([Agent, AgentRepository])],
  exports: [TypeOrmModule],
  controllers: [AgentsController],
  providers: [AgentsService]
})
export class AgentsModule {}
