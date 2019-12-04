import { Injectable, Inject } from '@nestjs/common';
import { User } from '../../entity/user.entity';
import { UserRepository } from '../../repositories/user.repository';
import { TYPES } from '../../types';
export interface UserService {
    getHello();
    root()
    setUser();
    getUser();
    updUser();
    delUser();
}
@Injectable()
export class UserServiceImpl implements UserService {
    constructor(
        @Inject(TYPES.UserRepository)
        private readonly userRepository: UserRepository,
    ) { }
    getHello(): string {
        return 'Hello World!';
    }
    async root() {
        try {
            console.log("user root service")
            const user1 = new User();
            user1.name = "Bears1";
            user1.email = "fdsa@dsaf1";
            const user = new User();
            user.name = "Bears";
            user.email = "fdsa@dsaf";
            const c1 = await this.userRepository.setUser(user1);
            const c2 = await this.userRepository.setUser(user);
            const u = await this.userRepository.updUser(c2.id, "abc");
            const r = await this.userRepository.getUser();
            const d = await this.userRepository.delUser(c1.id);
            //const all = await this.userService.findAll();
            return { c1, c2, u, r, d, /*all */ };
        } catch (e) {
            throw e;
        }
    }
    setUser() {
        const user = new User();
        user.name = "Bears";
        user.email = "fdsa@dsaf";
        return this.userRepository.setUser(user);
    }
    getUser() {
        return this.userRepository.getUser();
    }
    updUser() {
        return this.userRepository.updUser(2, "abc");
    }
    delUser() {
        return this.userRepository.delUser(1);
    }
}
