import { UserRepo } from "../repository/User";
import { HeartRepo } from "../repository/Heart";
import { User } from "../entity/User";
import { Heart } from "../entity/Heart";

export default class HeartService {
    userRepo: UserRepo;
    heartRepo: HeartRepo
    constructor(userRepo: UserRepo, heartRepo: HeartRepo) {
        this.userRepo = userRepo;
        this.heartRepo = heartRepo;
    }
    async heart() {
        const user = new User();
        user.name = "Bears";
        user.email = "fdsa@dsaf";
        const heart = new Heart();
        heart.name = "Bear's heart";
        heart.user = user;
        try {
            const c1 = await this.userRepo.setUser(user);
            const c2 = await this.heartRepo.setHeart(heart);
            const result = await this.heartRepo.getHeart();
            const result2 = await this.heartRepo.getHeartUser();
            const revert = await this.userRepo.findHeart();
            return ({ c1, c2, result, result2, revert });
        } catch (e) {
            throw e;
        }
    }
}