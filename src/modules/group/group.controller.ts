import { Controller, Get } from '@nestjs/common';
import { GroupService } from './group.service';
@Controller('/group')
export class GroupController {
    constructor(
        private readonly groupService: GroupService,
    ) { }

    @Get()
    getHello(): string {
        return this.groupService.getHello();
    }
    @Get('/root')
    async root() {
        return this.groupService.root();
    }
}
