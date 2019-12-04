import { Injectable, Inject } from '@nestjs/common';
import { Group } from '../../entity/group.entity';
import {  UserRepository } from '../../repositories/user.repository';
import { GroupRepository } from '../../repositories/group.repository';
import { User } from '../../entity/user.entity';
import { TYPES } from 'src/types';
export interface GroupService {
    getHello();
    root()
}
@Injectable()
export class GroupServiceImpl implements GroupService{

    constructor(
        @Inject(TYPES.GroupRepository)
        private readonly groupRepository: GroupRepository,
        @Inject(TYPES.UserRepository)
        private readonly userRepository:UserRepository,
    ) { }
    getHello(): string {
        return 'Hello World!';
    }
    async root() {
        /*CreateUser*/
        const user1 = new User();
        user1.name = "add group1,2";
        user1.email = "fdsa@dsaf";
        const user2 = new User();
        user2.name = "add group1,2";
        user2.email = "fdsa@dsaf";
        const Group1 = new Group();
        Group1.name = "have user1,2";
        Group1.member = [user1, user2]; //key
        const Group2 = new Group();
        Group2.name = "have user1,2";
        Group2.member = [user1, user2]; //key
        try {
            const c1 = await this.userRepository.setUser(user1);
            const c2 = await this.userRepository.setUser(user2);
            const c3 = await this.groupRepository.setGroup(Group1);
            const c4 = await this.groupRepository.setGroup(Group2);
            const r1 = await this.groupRepository.getGroup();
            const result = await this.groupRepository.getGroupUser();
            const revert = await this.userRepository.findGroup();
            return ({ u1: c1, u2: c2, g1: c3, g2: c4, r: r1, result: result, revert: revert });
        } catch (e) {
            throw (e);
        }
    }
}
