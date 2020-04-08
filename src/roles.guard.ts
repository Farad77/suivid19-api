import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Reflector } from '@nestjs/core';

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(private readonly reflector: Reflector) {}

  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> {
    const roles = this.reflector.get<string[]>(
      'roles',
      context.getHandler(),
    );

    return !roles || roles.indexOf(context.getArgs()[0].user.role) > -1;
  }
}
