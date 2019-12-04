import { Controller, Get, Inject } from '@nestjs/common';
import { GroupService } from './group.service';
import { TYPES } from 'src/types';
@Controller('/group')
export class GroupController {
    constructor(
        @Inject(TYPES.GroupService)
        private readonly groupService: GroupService
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
