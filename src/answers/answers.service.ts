import { Injectable } from '@nestjs/common';
import { CreateAnswerDto } from './dto/create-answer.dto';
import { UpdateAnswerDto } from './dto/update-answer.dto';
import { PrismaService } from 'src/database/prisma.service';

@Injectable()
export class AnswersService {

  constructor(private readonly prisma: PrismaService) {}


  create(createAnswerDto: CreateAnswerDto, userId: any, questionId: number) {
    const newAnswer = {
      body: createAnswerDto.body,
      user: {
        connect: { id: userId.sub },
      },
      question: {
        connect: { id: questionId },
      },
    };
    return this.prisma.answer.create({
      data: newAnswer,
    });
  }

  findAll() {
    return this.prisma.question.findMany({})
  }

  findOne(id: number) {
    return this.prisma.question.findUnique({
      where: { id }
  });
}

  update(id: number, updateAnswerDto: UpdateAnswerDto) {
    return this.prisma.question.update({
      where: { id },
      data: updateAnswerDto,
    })
  }

  remove(id: number) {
    return this.prisma.question.delete({
      where: { id }
    });
  }
}
