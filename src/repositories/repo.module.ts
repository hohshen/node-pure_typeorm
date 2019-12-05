import { Module, Global } from '@nestjs/common';
import { TYPES } from '../types';
import { UserRepositoryImpl } from './user.repository';
import { HeartRepositoryImpl } from './heart.repository';
import { EyeRepositoryImpl } from './eye.repository';
import { GroupRepositoryImpl } from './group.repository';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/entity/user.entity';
import { Heart } from 'src/entity/heart.entity';
import { Eye } from 'src/entity/eye.entity';
import { Group } from 'src/entity/group.entity';
export const modules = [
  { provide: TYPES.HeartRepository, useClass: HeartRepositoryImpl },
  { provide: TYPES.EyeRepository, useClass: EyeRepositoryImpl },
  { provide: TYPES.GroupRepository, useClass: GroupRepositoryImpl },
  { provide: TYPES.UserRepository, useClass: UserRepositoryImpl },
];
@Global()
@Module({
  imports: [TypeOrmModule.forFeature([User,Heart,Eye,Group])],
  providers: modules,
  exports: modules,
})
export class RepoModule { }