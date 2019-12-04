import { UserModule } from "./user/user.module";
import { HeartModule } from "./heart/heart.module";
import { EyeModule } from "./eye/eye.module";
import { GroupModule } from "./group/group.module";
import { Module } from "@nestjs/common";

@Module({
  imports: [
    UserModule,
    HeartModule,
    EyeModule,
    GroupModule,
  ],
})
export class IndexModule {}