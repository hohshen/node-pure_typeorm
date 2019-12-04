import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from '../../entity/user.entity'
import { UserController } from './user.controller';
import { UserServiceImpl } from './user.service';
import { TYPES } from '../../types';
import { UserRepositoryImpl } from './user.repository';
const modules = [
  {
    provide:TYPES.UserService,
    useClass: UserServiceImpl,
  },
  {
    provide:TYPES.UserRepository,
    useClass: UserRepositoryImpl,
  }
];
@Module({
  imports: [TypeOrmModule.forFeature([User])],
  controllers: [UserController],
  providers: modules,
  //exports: modules
})
export class UserModule {
}