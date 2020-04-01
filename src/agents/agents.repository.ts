import { EntityRepository, Repository } from 'typeorm';
import { Agent } from './agents.entity';
import { CreateAgentDto } from './dto/create-agent.dto';

@EntityRepository(Agent)
export class AgentRepository extends Repository<Agent> {
  async createAgent(createAgentDto: CreateAgentDto) {
    const agent = new Agent();
    agent.firstName = createAgentDto.firstName;
    agent.lastName = createAgentDto.lastName;
    agent.email = createAgentDto.email;
    agent.password = createAgentDto.password;
    agent.address = createAgentDto.address;
    agent.city = createAgentDto.city;
    agent.postalCode = createAgentDto.postalCode;
    agent.phone = createAgentDto.phone;
    agent.company = createAgentDto.company;

    return await this.save(agent);
  }
}