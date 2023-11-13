import { PermissionService } from './permission.service';
import { Module } from '@nestjs/common';

@Module({
  providers: [PermissionService],
  exports: [PermissionService],
})
export class PermissionsModule {}
