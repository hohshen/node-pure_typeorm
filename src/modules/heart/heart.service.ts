import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Heart } from '../../entity/heart.entity';
import { UserRepositoryImpl } from '../user/user.repository';
import { HeartRepository } from './heart.repository';
import { User } from '../../entity/user.entity';

@Injectable()
export class HeartService {
    constructor(
        @InjectRepository(HeartRepository)
        private readonly heartRepository: HeartRepository,
        @InjectRepository(UserRepositoryImpl)
        private readonly userRepository: UserRepositoryImpl,
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
