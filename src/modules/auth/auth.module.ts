import { Module } from '@nestjs/common';
import { PermissionsModule } from '../../shared/permissions/permissions.module';
import { AuthService } from './auth.service';
import { UserService } from '../user/user.service';
import { JwtModule } from '@nestjs/jwt';
import { AuthController } from './auth.controller';
import { LocalStrategy } from '../user/strategies/local.strategy';

@Module({
  imports: [
    PermissionsModule,
    JwtModule.register({
      secret: 'MySecretKey!@',
      signOptions: { expiresIn: '1h' },
    }),
  ],
  controllers: [AuthController],
  providers: [AuthService, UserService, LocalStrategy],
  exports: [AuthService, UserService],
})
export class AuthModule {}
