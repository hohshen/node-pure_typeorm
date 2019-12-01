import { UserRepo } from "../repository/User";
import { EyeRepo } from "../repository/Eye";
import { User } from "../entity/User";
import { Eye } from "../entity/Eye";

export default class EyeService {
    userRepo: UserRepo;
    eyeRepo: EyeRepo
    constructor(userRepo: UserRepo, eyeRepo: EyeRepo) {
        this.userRepo = userRepo;
        this.eyeRepo = eyeRepo;
    }
    async eye() {
        /*CreateUser*/
        const user = new User();
        user.name = "eye";
        user.email = "fdsa@dsaf";

        /*CreateEye*/
        const leftEye = new Eye();
        leftEye.name = "EyeMan's leftEye";
        leftEye.user = user;
        const rightEye = new Eye();
        rightEye.name = "EyeMan's rightEye";
        rightEye.user = user;
        try {
            const c1 = await this.userRepo.setUser(user);
            const c2 = await this.eyeRepo.setEye(leftEye);
            const c3 = await this.eyeRepo.setEye(rightEye);
            const result3 = await this.eyeRepo.getEye();
            const result4 = await this.eyeRepo.getEyeUser();
            const revert = await this.userRepo.findEye();
            return ({ c1, c2, c3, result3, result4, revert });
        } catch (e) {
            throw (e);
        }
    }
}