import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Heart } from '../../entity/heart.entity'
import { HeartController } from './heart.controller';
import { HeartService } from './heart.service';
import { User } from '../../entity/user.entity';
import { UserService } from '../user/user.service';
import { HeartRepository } from './heart.repository';
import { UserRepository } from '../user/user.repository';
@Module({
    imports: [TypeOrmModule.forFeature([Heart,HeartRepository, User,UserRepository])],
    controllers: [HeartController],
    providers: [HeartService, UserService],
})
export class HeartModule {
}