import { Controller, Get, Inject } from '@nestjs/common';
import { HeartService } from './heart.service';
import { TYPES } from 'src/types';
@Controller('/heart')
export class HeartController {
  constructor(
    @Inject(TYPES.HeartService)
    private readonly heartService: HeartService
  ) { }
  @Get()
  getHello(): string {
    return this.heartService.getHello();
  }
  @Get('/root')
  async root() {
    return this.heartService.root();
  }
}
