import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Group } from '../../entity/group.entity'
import { GroupController } from './group.controller';
import {  GroupServiceImpl } from './group.service';

import {  GroupRepositoryImpl } from '../../repositories/group.repository';
import { TYPES } from 'src/types';

const modules = [
    {
        provide: TYPES.GroupService,
        useClass: GroupServiceImpl,
    }
];
@Module({
    imports: [TypeOrmModule.forFeature([Group])],
    controllers: [GroupController],
    providers: modules,
    exports: modules,
})
export class GroupModule {
}