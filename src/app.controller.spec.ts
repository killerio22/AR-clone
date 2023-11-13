import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { AppService } from './app.service';

describe('AppController', () => {
  let appController: AppController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [AppService],
    }).compile();

    appController = app.get<AppController>(AppController);
  });

  describe('registerUser', () => {
    it('should register a user', () => {
      const username = 'testUser';
      const password = 'testPassword';
      const result = appController.registerUser({ username, password }); // Оновлено тут
      expect(result).toBe(`User ${username} registered successfully.`);
    });
  });
});
