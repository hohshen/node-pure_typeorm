import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Group } from '../../entity/group.entity'
import { GroupController } from './group.controller';
import { GroupService } from './group.service';
import { UserServiceImpl } from '../user/user.service';
import { User } from '../../entity/user.entity';
import { GroupRepository } from './group.repository';
import { UserRepositoryImpl } from '../user/user.repository';
@Module({
    // imports: [TypeOrmModule.forFeature([Group,GroupRepository, User,UserRepositoryImpl])],
    // controllers: [GroupController],
    // providers: [GroupService, UserServiceImpl],
})
export class GroupModule {
}