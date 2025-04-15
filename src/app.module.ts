import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { UserService } from './user/user.service';
import { UserModule } from './user/user.module';
import { DatabaseModule } from './database/database.module';


@Module({
  imports: [AuthModule, UserModule, DatabaseModule],
  providers: [UserService],
})
export class AppModule {}
