import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Eye } from '../../entity/eye.entity'
import { EyeController } from './eye.controller';
import { EyeService } from './eye.service';
import { UserService } from '../user/user.service';
import { User } from '../../entity/user.entity';
@Module({
    imports: [TypeOrmModule.forFeature([Eye, User])],
    controllers: [EyeController],
    providers: [EyeService, UserService],
})
export class EyeModule {
}