import { Module, ValidationPipe } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { UserService } from './user/user.service';
import { UserModule } from './user/user.module';
import { DatabaseModule } from './database/database.module';
import { QuestionsModule } from './questions/questions.module';
import { AnswersModule } from './answers/answers.module';
import { AppController } from './app.controller';
import { APP_PIPE } from '@nestjs/core';


@Module({
  imports: [
    AuthModule, 
    UserModule, 
    DatabaseModule, 
    QuestionsModule, 
    AnswersModule
  ],
  
  providers: [
    UserService,
    { provide: APP_PIPE, useClass: ValidationPipe }
  ],

  controllers: [
    AppController
  ],

})
export class AppModule {}
