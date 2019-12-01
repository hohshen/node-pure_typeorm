import { UserRepoInterface } from "../repository/User";
import { User } from "../entity/User";
import { injectable, inject } from "inversify";
import { TYPES } from "../Types";
export interface UserServiceInterface {
    user()
}
@injectable()
export default class UserService {
    constructor(@inject(TYPES.UserRepoInterface) private userRepo: UserRepoInterface) {
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