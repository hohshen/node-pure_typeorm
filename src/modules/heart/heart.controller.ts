import { Controller, Get } from '@nestjs/common';
import { HeartService } from './heart.service';
import { UserService } from '../user/user.service';
import { User } from '../../entity/user.entity';
import { Heart } from '../../entity/heart.entity';

@Controller('/heart')
export class HeartController {
  constructor(
    private readonly heartService: HeartService,
    private readonly userService: UserService
  ) { }

  @Get()
  getHello(): string {
    return this.heartService.getHello();
  }
  @Get('/root')
  async root() {
    const user = new User();
    user.name = "Bears";
    user.email = "fdsa@dsaf";
    const heart = new Heart();
    heart.name = "Bear's heart";
    heart.user = user;
    try {
      const c1 = await this.userService.setUser(user);
      const c2 = await this.heartService.setHeart(heart);
      const result = await this.heartService.getHeart();
      const result2 = await this.heartService.getHeartUser();
      const revert = await this.userService.findHeart();
      return ({ c1, c2, result, result2, revert });
    } catch (e) {
      throw e;
    }
  }
}
