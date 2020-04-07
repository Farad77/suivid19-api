import { createParamDecorator, ExecutionContext } from '@nestjs/common';

export const Payload = createParamDecorator(
  (data: unknown, ctx: ExecutionContext) => {
    const request = ctx.switchToHttp().getRequest();
    return JSON.parse(Buffer.from(request.headers.authorization.split(' ').pop().split('.')[1], 'base64').toString('utf8'));
  },
);