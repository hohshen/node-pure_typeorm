import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Heart } from '../../entity/heart.entity'
import { HeartController } from './heart.controller';
import { HeartServiceImpl } from './heart.service';
import { User } from '../../entity/user.entity';
import {  HeartRepositoryImpl } from '../../repositories/heart.repository';
import { TYPES } from 'src/types';
const modules = [
    {
        provide: TYPES.HeartService,
        useClass: HeartServiceImpl,
    }
];
@Module({
    imports: [TypeOrmModule.forFeature([Heart])],
    controllers: [HeartController],
    providers: modules,
    exports: modules,
})
export class HeartModule {
}