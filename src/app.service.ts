import { Injectable } from '@nestjs/common';
import * as console from 'console';

@Injectable()
export class AppService {
  get password(): string {
    return this._password;
  }
  private registeredUsers: string[] = [];
  private _password: string;

  registerUser(username: string, password: string): void {
    this._password = password;
    if (!this.registeredUsers.includes(username)) {
      this.registeredUsers.push(username);
      console.log(`User ${username} registered successfully.`);
    } else {
      console.log(`User ${username} is already registered.`);
    }
  }
}
