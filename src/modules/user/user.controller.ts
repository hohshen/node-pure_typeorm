import { Controller, Get, Inject } from '@nestjs/common';
import { UserService } from './user.service';
import { TYPES } from '../../types';


@Controller('/user')
export class UserController {

    constructor(
        @Inject(TYPES.UserService)
        private readonly userService: UserService
    ) { }

    @Get()
    getHello(): string {
        return this.userService.getHello();
    }
    @Get('/root')
    async root() {
        return this.userService.root();
    }

    @Get('/set')
    setUser() {
        return this.userService.setUser();
    }
    @Get('/get')
    getUser() {
        return this.userService.getUser();
    }
    @Get('/upd')
    updUser() {
        return this.userService.updUser();
    }
    @Get('/del')
    delUser() {
        return this.userService.delUser();
    }
}
