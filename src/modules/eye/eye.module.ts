import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Eye } from '../../entity/eye.entity'
import { EyeController } from './eye.controller';
import { EyeService } from './eye.service';
import { UserServiceImpl } from '../user/user.service';
import { User } from '../../entity/user.entity';
import { UserRepositoryImpl } from '../user/user.repository';
import { EyeRepository } from './eye.repository';
@Module({
    // imports: [TypeOrmModule.forFeature([Eye,EyeRepository, User,UserRepositoryImpl])],
    // controllers: [EyeController],
    // providers: [EyeService, UserServiceImpl],
})
export class EyeModule {
}