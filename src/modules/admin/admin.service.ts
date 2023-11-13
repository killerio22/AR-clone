import { Injectable } from '@nestjs/common';

@Injectable()
export class AdminService {
  getAdminInfo(): string {
    const adminUsername = 'AdMiN';
    return `Admin username: ${adminUsername}`;
  }
}
