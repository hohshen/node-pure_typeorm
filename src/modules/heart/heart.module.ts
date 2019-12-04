import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Heart } from '../../entity/heart.entity'
import { HeartController } from './heart.controller';
import { HeartServiceImpl } from './heart.service';
import { User } from '../../entity/user.entity';
import {  HeartRepositoryImpl } from './heart.repository';
import { UserRepositoryImpl } from '../user/user.repository';
import { TYPES } from 'src/types';
import { UserModule } from '../user/user.module';
const modules = [
    {
        provide: TYPES.UserRepository,
        useClass: UserRepositoryImpl,
    },
    {
        provide: TYPES.HeartRepository,
        useClass: HeartRepositoryImpl,
    },
    {
        provide: TYPES.HeartService,
        useClass: HeartServiceImpl,
    }
];
@Module({
    imports: [TypeOrmModule.forFeature([Heart, User]),UserModule],
    controllers: [HeartController],
    providers: modules,
})
export class HeartModule {
}