import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Eye } from '../../entity/eye.entity'
import { EyeController } from './eye.controller';
import { EyeServiceImpl } from './eye.service';
import { EyeRepositoryImpl } from '../../repositories/eye.repository';
import { TYPES } from 'src/types';
const modules = [
    {
        provide: TYPES.EyeService,
        useClass: EyeServiceImpl,
    }
];
@Module({
    imports: [TypeOrmModule.forFeature([Eye])],
    controllers: [EyeController],
    providers: modules,
    exports: modules,
})
export class EyeModule {
}