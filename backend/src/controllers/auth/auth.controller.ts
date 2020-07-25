import { AuthService } from '../../services/auth/auth.service';
import { LocalAuthGuard } from './../../Auth/auth/local-auth.guard';
import { Controller, Get, Request, UseGuards, Post } from '@nestjs/common';
import { JwtAuthGuard } from '../../Auth/auth/jwt-auth.guard';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @UseGuards(LocalAuthGuard)
  @Post('auth/login')
  async login(@Request() req) {
    return this.authService.login(req.user);
  }

  @UseGuards(JwtAuthGuard)
  @Get('profile')
  async getProfile(@Request() req) {
    return req.user;
  }
}
