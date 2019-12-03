import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from '../../entity/user.entity'
import { UserController } from './user.controller';
import { UserService, USER_SERVICE } from './user.service';
import { UserRepository } from './user.repository';
const modules = [
    {
      provide: USER_SERVICE,
      useClass: UserService,
    }
  ];
@Module({
    imports: [TypeOrmModule.forFeature([User,UserRepository])],
    controllers: [UserController],
    providers: modules,
})
export class UserModule {
}