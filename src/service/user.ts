import { UserRepo } from "../repository/User";
import { User } from "../entity/User";
export default class UserService {
    userRepo: UserRepo;
    constructor(userRepo: UserRepo) {
        this.userRepo = userRepo;
    }
    async user() {
        try {
            const user = new User();
            user.name = "Bears";
            user.email = "fdsa@dsaf";
            const c1 = await this.userRepo.setUser(user);
            const c2 = await this.userRepo.setUser(user);
            const u = await this.userRepo.updUser(2, "abc");
            const r = await this.userRepo.getUser();
            const d = await this.userRepo.delUser(c1.id);
            const all = await this.userRepo.findAll();
            return { c1, c2, u, r, d, all };
        } catch (e) {
           throw e;
        }
    }
}