import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Eye } from '../../entity/eye.entity'
import { EyeController } from './eye.controller';
import { EyeService } from './eye.service';
import { UserService } from '../user/user.service';
import { User } from '../../entity/user.entity';
import { UserRepository } from '../user/user.repository';
import { EyeRepository } from './eye.repository';
@Module({
    imports: [TypeOrmModule.forFeature([Eye,EyeRepository, User,UserRepository])],
    controllers: [EyeController],
    providers: [EyeService, UserService],
})
export class EyeModule {
}