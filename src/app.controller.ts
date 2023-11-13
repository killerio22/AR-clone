import { Controller, Post, Body } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post('/register')
  registerUser(
    @Body() userData: { username: string; password: string },
  ): string {
    // Оновлено тут
    const { username, password } = userData;
    this.appService.registerUser(username, password);
    return `User ${username} registered successfully.`;
  }
}
