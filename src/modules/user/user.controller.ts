import { Controller, Get } from '@nestjs/common';
import { UserService } from './user.service';
import { User } from '../../entity/user.entity';

@Controller('/user')
export class UserController {
    constructor(private readonly userService: UserService) { }

    @Get()
    getHello(): string {
        return this.userService.getHello();
    }
    @Get('/root')
    async root() {
        try {
            const user1 = new User();
            user1.name = "Bears1";
            user1.email = "fdsa@dsaf1";
            const user = new User();
            user.name = "Bears";
            user.email = "fdsa@dsaf";
            const c1 = await this.userService.setUser(user1);
            const c2 = await this.userService.setUser(user);
            const u = await this.userService.updUser(c2.id, "abc");
            const r = await this.userService.getUser();
            const d = await this.userService.delUser(c1.id);
            //const all = await this.userService.findAll();
            return { c1, c2, u, r, d, /*all */ };
        } catch (e) {
            throw e;
        }
    }
    @Get('/set')
    setUser() {
        const user = new User();
        user.name = "Bears";
        user.email = "fdsa@dsaf";
        return this.userService.setUser(user);
    }
    @Get('/get')
    getUser() {
        return this.userService.getUser();
    }
    @Get('/upd')
    updUser() {
        return this.userService.updUser(2, "abc");
    }
    @Get('/del')
    delUser() {
        return this.userService.delUser(1);
    }
}
