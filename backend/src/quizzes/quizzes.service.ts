import { Injectable, NotFoundException } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

import { Quiz } from './schema/quizzes.schema';

import { CreateQuizDto } from './dto/create-quiz.dto';
import { UpdateQuizDto } from './dto/update-quiz.dto';
import { QueryQuizDto } from './dto/query-quiz.dto';

@Injectable()
export class QuizzesService {
  constructor(
    @InjectModel(Quiz.name) private readonly quizModel: Model<Quiz>,
  ) {}

  async create(createQuizDto: CreateQuizDto) {
    const newQuiz = new this.quizModel(createQuizDto);
    await newQuiz.save();
    return newQuiz;
  }

  async findAll(query: QueryQuizDto) {
    const { title, description, page = 1, limit = 10 } = query;
    const skip = (page - 1) * limit;
    let filter: any = {};

    if (title) filter.title = { $regex: title, $options: 'i' };
    if (description)
      filter.description = { $regex: description, $options: 'i' };

    const quizzes = await this.quizModel
      .find(filter)
      .limit(limit)
      .skip(skip)
      .exec();

    const totalQuizzes = await this.quizModel.countDocuments(filter);

    return {
      quizzes,
      page,
      totalPages: Math.ceil(totalQuizzes / limit),
    };
  }

  async findOne(id: string) {
    const quiz = await this.quizModel.findById(id);
    if (!quiz) throw new NotFoundException('Quiz not found');
    return quiz;
  }

  async update(id: string, updateQuizDto: UpdateQuizDto) {
    const quiz = await this.quizModel.findById(id);
    if (!quiz) throw new NotFoundException('Quiz not found');
    const updatedQuiz = await this.quizModel.findByIdAndUpdate(
      id,
      updateQuizDto,
      { new: true },
    );
    return updatedQuiz;
  }

  async remove(id: string) {
    const quiz = await this.quizModel.findById(id);
    if (!quiz) throw new NotFoundException('Quiz not found');
    const deletedQuiz = await this.quizModel.deleteOne({ _id: id });
    return deletedQuiz;
  }
}
