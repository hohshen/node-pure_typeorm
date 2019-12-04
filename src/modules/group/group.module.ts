import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Group } from '../../entity/group.entity'
import { GroupController } from './group.controller';
import {  GroupServiceImpl } from './group.service';
import { User } from '../../entity/user.entity';
import {  GroupRepositoryImpl } from './group.repository';
import { UserRepositoryImpl } from '../user/user.repository';
import { TYPES } from 'src/types';
import { UserModule } from '../user/user.module';
const modules = [
    {
        provide: TYPES.UserRepository,
        useClass: UserRepositoryImpl,
    },
    {
        provide: TYPES.GroupRepository,
        useClass: GroupRepositoryImpl,
    },
    {
        provide: TYPES.GroupService,
        useClass: GroupServiceImpl,
    }
];
@Module({
    imports: [TypeOrmModule.forFeature([Group, User]),UserModule],
    controllers: [GroupController],
    providers: modules,
})
export class GroupModule {
}