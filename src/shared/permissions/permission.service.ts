import { Injectable } from '@nestjs/common';
import { User } from '../../modules/user/user.entity';

@Injectable()
export class PermissionService {
  hasRole(user: User, roleName: string): boolean {
    return user.roles.includes(roleName);
  }
  hasAnyRole(user: User, roleNames: string[]): boolean {
    return roleNames.some((role) => user.roles.includes(role));
  }
  hasAllRoles(user: User, roleNames: string[]): boolean {
    return roleNames.every((role) => user.roles.includes(role));
  }
}
