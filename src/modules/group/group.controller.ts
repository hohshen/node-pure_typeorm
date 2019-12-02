import { Controller, Get } from '@nestjs/common';
import { GroupService } from './group.service';
import { UserService } from '../user/user.service';
import { User } from '../../entity/user.entity';
import { Group } from '../../entity/group.entity';
@Controller('/group')
export class GroupController {
    constructor(private readonly groupService: GroupService,
        private readonly userService: UserService
    ) { }

    @Get()
    getHello(): string {
        return this.groupService.getHello();
    }
    @Get('/root')
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
            const c1 = await this.userService.setUser(user1);
            const c2 = await this.userService.setUser(user2);
            const c3 = await this.groupService.setGroup(Group1);
            const c4 = await this.groupService.setGroup(Group2);
            const r1 = await this.groupService.getGroup();
            const result = await this.groupService.getGroupUser();
            const revert = await this.userService.findGroup();
            return ({ u1: c1, u2: c2, g1: c3, g2: c4, r: r1, result: result, revert: revert });
        } catch (e) {
            throw (e);
        }
    }
}
