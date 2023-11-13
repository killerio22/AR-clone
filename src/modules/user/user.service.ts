import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
  private users = [];

  async registerUser(username: string, password: string): Promise<string> {
    this.users.push({ username, password });
    return 'User registered successfully.';
  }

  async findByUsername(username: string): Promise<any | undefined> {
    return this.users.find((user) => user.username === username);
  }
}
