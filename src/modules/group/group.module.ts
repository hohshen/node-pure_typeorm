import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Group } from '../../entity/group.entity'
import { GroupController } from './group.controller';
import { GroupService } from './group.service';
import { UserService } from '../user/user.service';
import { User } from '../../entity/user.entity';
@Module({
    imports: [TypeOrmModule.forFeature([Group, User])],
    controllers: [GroupController],
    providers: [GroupService, UserService],
})
export class GroupModule {
}