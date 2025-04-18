import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { UserService } from './user/user.service';
import { UserModule } from './user/user.module';
import { DatabaseModule } from './database/database.module';
import { QuestionsModule } from './questions/questions.module';
import { AnswersModule } from './answers/answers.module';


@Module({
  imports: [AuthModule, UserModule, DatabaseModule, QuestionsModule, AnswersModule],
  providers: [UserService],
})
export class AppModule {}
