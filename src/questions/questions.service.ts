import { Inject, Injectable } from '@nestjs/common';
import { CreateQuestionDto } from './dto/create-question.dto';
import { UpdateQuestionDto } from './dto/update-question.dto';
import { PrismaService } from 'src/database/prisma.service';
import { title } from 'process';

@Injectable()
export class QuestionsService {

  constructor(private readonly prisma: PrismaService) {}

  async create(createQuestionDto: CreateQuestionDto, req: any) {
    return await this.prisma.question.create({
      data: { ...createQuestionDto, userId: req.sub.sub },
    });
  }

  async findAll() {
    return await this.prisma.question.findMany({
      include: { 
        answers: true,
         user: {
          select: {
            id: true,
            name: true,
            email: true,
          }
         },
        },
    });
  }

  async findOne(id: number) {
    return await this.prisma.question.findUnique({ where: { id },
    include: { 
      answers: true,
       user: {
        select: {
          id: true,
          name: true,
          email: true,
        }
       } } 
    });
  }

  async update(id: number, updateQuestionDto: UpdateQuestionDto) {
    return await this.prisma.question.update({
      where: { id },
      data: updateQuestionDto,
      include: { 
        answers: true
       },
    })
  }

  remove(id: number) {
    return this.prisma.question.delete({ 
      where: { id },
    include: { 
      answers: true
     },
    });
  }

}
