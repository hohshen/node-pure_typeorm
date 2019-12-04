import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RepoModule } from './repositories/repo.module';
import { IndexModule } from './modules/index.module';
@Module({
  imports: [
    TypeOrmModule.forRoot(),
    RepoModule,
    IndexModule
  ],
})
export class AppModule { }
