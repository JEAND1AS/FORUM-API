import { User } from "../../user/entities/user.entity";
import { Question } from "../../questions/entities/question.entity";

export class Answer implements Answer {
    id: number;
    body: string;
    createdAt: Date;
    updatedAt: Date;
    userId: number;
    questionId: number;
    user: User;
    question: Question;
}