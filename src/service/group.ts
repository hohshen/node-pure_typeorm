import { GroupRepo } from "../repository/Group";
import { UserRepo } from "../repository/User";
import { Group } from "../entity/Group";
import { User } from "../entity/User";

export default class GroupService {
    userRepo: UserRepo;
    groupRepo: GroupRepo
    constructor(userRepo: UserRepo, groupRepo: GroupRepo) {
        this.userRepo = userRepo;
        this.groupRepo = groupRepo;
    }
    async group() {
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
            const c1 = await this.userRepo.setUser(user1);
            const c2 = await this.userRepo.setUser(user2);
            const c3 = await this.groupRepo.setGroup(Group1);
            const c4 = await this.groupRepo.setGroup(Group2);
            const r1 = await this.groupRepo.getGroup();
            const result = await this.groupRepo.getGroupUser();
            const revert = await this.userRepo.findGroup();
            return ({ u1: c1, u2: c2, g1: c3, g2: c4, r: r1, result: result, revert: revert });
        } catch (e) {
            throw (e);
        }
    }
}