import { Controller, UseGuards, Post, Request, Get } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { LocalAuthGuard } from './auth/local-auth.guard';
import { AuthService } from './auth/auth.service';

@Controller()
export class AppController {
  constructor(private authService: AuthService) {}
  
  @ApiTags('authentification')
  @UseGuards(LocalAuthGuard)
  @Post('auth/login')
  async login(@Request() req) {
    return this.authService.login(req.user);
  }
}
