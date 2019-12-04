import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Heart } from '../../entity/heart.entity'
import { HeartController } from './heart.controller';
import { HeartService } from './heart.service';
import { User } from '../../entity/user.entity';
import { UserServiceImpl } from '../user/user.service';
import { HeartRepository } from './heart.repository';
import { UserRepositoryImpl } from '../user/user.repository';
@Module({
    // imports: [TypeOrmModule.forFeature([Heart,HeartRepository, User,UserRepositoryImpl])],
    // controllers: [HeartController],
    // providers: [HeartService, UserServiceImpl],
})
export class HeartModule {
}