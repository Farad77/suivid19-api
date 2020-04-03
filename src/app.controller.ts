import { Controller, UseGuards, Post, Request, Get, Body } from '@nestjs/common';
import { ApiTags, ApiProperty } from '@nestjs/swagger';
import { LocalAuthGuard } from './auth/local-auth.guard';
import { AuthService } from './auth/auth.service';

class LoginDto {
  @ApiProperty()
  username: string;

  @ApiProperty()
  password: string;
}

@Controller()
export class AppController {
  constructor(private authService: AuthService) {}
  
  @ApiTags('authentification')
  @UseGuards(LocalAuthGuard)
  @Post('auth/login')
  async login(@Body() loginDto: LoginDto, @Request() req) {
    return this.authService.login(req.user);
  }
}
