import {
  IsString,
  IsNotEmpty,
  IsOptional,
  IsNumber,
  ValidateNested,
  IsArray,
} from 'class-validator';
import { Type } from 'class-transformer';

export class CreateQuizDto {
  @IsNotEmpty()
  @IsString()
  title: string;

  @IsNotEmpty()
  @IsString()
  description: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => QuestionDto)
  questions: QuestionDto[];

  @IsNumber()
  @Type(() => QuestionDto)
  totalMarks: number;
}

class QuestionDto {
  @IsNotEmpty()
  @IsString()
  questionText: string;

  @IsNotEmpty()
  @IsArray()
  @IsString({ each: true }) //run the validation on each item of the array
  options: string[];

  @IsNotEmpty()
  @IsString()
  correctAnswer: string;

  @IsOptional()
  @IsString()
  explanation: string;
}
