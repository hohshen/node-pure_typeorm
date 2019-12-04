import { Injectable, Inject } from '@nestjs/common';
import { Heart } from '../../entity/heart.entity';
import { UserRepository } from '../../repositories/user.repository';
import { HeartRepository } from '../../repositories/heart.repository';
import { User } from '../../entity/user.entity';
import { TYPES } from 'src/types';
export interface HeartService {
    getHello();
    root()
}
@Injectable()
export class HeartServiceImpl implements HeartService {
    constructor(
        @Inject(TYPES.HeartRepository)
        private readonly heartRepository: HeartRepository,
        @Inject(TYPES.UserRepository)
        private readonly userRepository:UserRepository,
    ) { }
    getHello(): string {
        return 'Hello World!';
    }
    async root() {
        const user = new User();
        user.name = "Bears";
        user.email = "fdsa@dsaf";
        const heart = new Heart();
        heart.name = "Bear's heart";
        heart.user = user;
        try {
            const c1 = await this.userRepository.setUser(user);
            const c2 = await this.heartRepository.setHeart(heart);
            const result = await this.heartRepository.getHeart();
            const result2 = await this.heartRepository.getHeartUser();
            const revert = await this.userRepository.findHeart();
            return ({ c1, c2, result, result2, revert });
        } catch (e) {
            throw e;
        }
    }
}
