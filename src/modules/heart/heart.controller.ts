import { Controller, Get } from '@nestjs/common';
import { HeartService } from './heart.service';
@Controller('/heart')
export class HeartController {
  constructor(
    private readonly heartService: HeartService,
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
