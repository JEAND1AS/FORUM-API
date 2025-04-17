import { Module } from '@nestjs/common';
import { AnswersService } from './answers.service';
import { AnswersController } from './answers.controller';
import { DatabaseModule } from 'src/database/database.module'; // <-- isso aqui!

@Module({
  imports: [DatabaseModule], // <-- aqui também!
  controllers: [AnswersController],
  providers: [AnswersService],
})
export class AnswersModule {}
