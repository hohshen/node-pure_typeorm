import { Controller, Get } from '@nestjs/common';
import { EyeService } from './eye.service';
import { UserServiceImpl } from '../user/user.service';
@Controller('/eye')
export class EyeController {
    constructor(
        private readonly eyeService: EyeService,
    ) { }

    @Get()
    getHello(): string {
        return this.eyeService.getHello();
    }
    @Get('/root')
    async root() {
        return this.eyeService.root();
    }
}
