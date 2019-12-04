import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Eye } from '../../entity/eye.entity'
import { EyeController } from './eye.controller';
import { EyeServiceImpl } from './eye.service';

import { User } from '../../entity/user.entity';
import { UserRepositoryImpl } from '../user/user.repository';
import { EyeRepositoryImpl } from './eye.repository';
import { TYPES } from 'src/types';
import { UserModule } from '../user/user.module';
const modules = [
    {
        provide: TYPES.UserRepository,
        useClass: UserRepositoryImpl,
    },
    {
        provide: TYPES.EyeRepository,
        useClass: EyeRepositoryImpl,
    },
    {
        provide: TYPES.EyeService,
        useClass: EyeServiceImpl,
    }
];
@Module({
    imports: [TypeOrmModule.forFeature([Eye, User]),UserModule],
    controllers: [EyeController],
    providers: modules,
})
export class EyeModule {
}