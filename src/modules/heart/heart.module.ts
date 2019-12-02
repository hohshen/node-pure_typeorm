import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Heart } from '../../entity/heart.entity'
import { HeartController } from './heart.controller';
import { HeartService } from './heart.service';
import { User } from '../../entity/user.entity';
import { UserService } from '../user/user.service';
@Module({
    imports: [TypeOrmModule.forFeature([Heart, User])],
    controllers: [HeartController],
    providers: [HeartService, UserService],
})
export class HeartModule {
}