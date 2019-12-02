import { Controller, Get } from '@nestjs/common';
import { EyeService } from './eye.service';
import { UserService } from '../user/user.service';
import { User } from '../../entity/user.entity';
import { Eye } from '../../entity/eye.entity';
@Controller('/eye')
export class EyeController {
    constructor(private readonly eyeService: EyeService,
        private readonly userService: UserService
    ) { }

    @Get()
    getHello(): string {
        return this.eyeService.getHello();
    }
    @Get('/root')
    async root() {
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
            const c1 = await this.userService.setUser(user);
            const c2 = await this.eyeService.setEye(leftEye);
            const c3 = await this.eyeService.setEye(rightEye);
            const result3 = await this.eyeService.getEye();
            const result4 = await this.eyeService.getEyeUser();
            const revert = await this.userService.findEye();
            return ({ c1, c2, c3, result3, result4, revert });
        } catch (e) {
            throw (e);
        }
    }
}
