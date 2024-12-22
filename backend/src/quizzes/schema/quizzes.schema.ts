import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema({ timestamps: true })
export class Quiz {
  @Prop({ required: true })
  title: string;

  @Prop({ required: true })
  description: string;

  @Prop({ required: true, type: [Object] })
  questions: Question[];

  @Prop({ required: true })
  totalMarks: number;

  @Prop({ default: Date.now })
  createdAt: Date;
}

export const QuizSchema = SchemaFactory.createForClass(Quiz);

export class Question {
  @Prop({ required: true })
  questionText: string;

  @Prop({ required: true, type: [String] })
  options: string[];

  @Prop({ required: true })
  correctAnswer: string;

  @Prop({ default: '' })
  explanation: string;
}
