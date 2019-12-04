import { Injectable, Inject } from '@nestjs/common';
import { Eye } from '../../entity/eye.entity';
import { User } from '../../entity/user.entity';
import { EyeRepository } from './eye.repository';
import { UserRepository } from '../user/user.repository';
import { TYPES } from 'src/types';
export interface EyeService {
    getHello();
    root()
}
@Injectable()
export class EyeServiceImpl implements EyeService{
    constructor(
        @Inject(TYPES.EyeRepository)
        private readonly eyeRepository: EyeRepository,
        @Inject(TYPES.UserRepository)
        private readonly userRepository:UserRepository,
    ) { }
    getHello(): string {
        return 'Hello World!';
    }
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
            const c1 = await this.userRepository.setUser(user);
            const c2 = await this.eyeRepository.setEye(leftEye);
            const c3 = await this.eyeRepository.setEye(rightEye);
            const result3 = await this.eyeRepository.getEye();
            const result4 = await this.eyeRepository.getEyeUser();
            const revert = await this.userRepository.findEye();
            return ({ c1, c2, c3, result3, result4, revert });
        } catch (e) {
            throw (e);
        }
    }
}
