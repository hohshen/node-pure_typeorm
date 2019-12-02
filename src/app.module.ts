import { Module } from '@nestjs/common';
// import { AppController } from './app.controller';
// import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './modules/user/user.module';
import { HeartModule } from './modules/heart/heart.module';
import { EyeModule } from './modules/eye/eye.module';
import { GroupModule } from './modules/group/group.module';
@Module({
  imports: [
    TypeOrmModule.forRoot(),
    UserModule,
    HeartModule,
    EyeModule,
    GroupModule
  ],
  // controllers: [AppController],
  // providers: [AppService],
})
export class AppModule { }
