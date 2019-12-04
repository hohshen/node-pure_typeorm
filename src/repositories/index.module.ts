import { Module, Global } from '@nestjs/common';
import { TYPES } from '../types';
import { UserRepositoryImpl } from '../modules/user/user.repository';
const modules = [
  { provide: TYPES.UserRepository, useClass: UserRepositoryImpl },
];

@Module({
  // providers: modules,
  // exports: modules,
})
export class RepoModule { }