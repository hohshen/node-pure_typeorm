import { Controller, Get, Inject } from '@nestjs/common';
import { EyeService } from './eye.service';
import { TYPES } from 'src/types';
@Controller('/eye')
export class EyeController {
    constructor(
        @Inject(TYPES.EyeService)
        private readonly eyeService: EyeService
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
