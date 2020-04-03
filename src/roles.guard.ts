import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';
import { Reflector } from '@nestjs/core';
import { UsersService } from './users/users.service';

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(private readonly reflector: Reflector, private usersService: UsersService) {}

  async canActivate(
    context: ExecutionContext,
  ): Promise<boolean> {
    const roles = this.reflector.get<string[]>(
      'roles',
      context.getHandler(),
    );
    
    if (!roles) {
      return true;
    }

    const userRole = await this.usersService.getRole(context.getArgs()[0].user.id);

    return roles.indexOf(userRole) > -1;
  }
}
