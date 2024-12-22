import { Injectable, NotFoundException } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

import { Announcement } from './schema/announcements.schema';

import { CreateAnnouncementDto } from './dto/create-announcement.dto';
import { UpdateAnnouncementDto } from './dto/update-announcement.dto';
import { QueryAnnouncementDto } from './dto/query-nnouncement.dto';

@Injectable()
export class AnnouncementsService {
  constructor(
    @InjectModel(Announcement.name)
    private announcementModel: Model<Announcement>,
  ) {}

  async create(createAnnouncementDto: CreateAnnouncementDto) {
    const newAnnouncement = new this.announcementModel(createAnnouncementDto);
    await newAnnouncement.save();
    return newAnnouncement;
  }

  async findAll(query: QueryAnnouncementDto) {
    const { title, content, page = 1, limit = 10 } = query;
    const skip = (page - 1) * limit;
    let filter: any = {};

    if (title) filter.title = { $regex: title, $options: 'i' };
    if (content) filter.content = { $regex: content, $options: 'i' };

    const announcements = await this.announcementModel
      .find(filter)
      .skip(skip)
      .limit(limit)
      .exec();

    const totalAnnouncements =
      await this.announcementModel.countDocuments(filter);

    return {
      announcements,
      page,
      totalPages: Math.ceil(totalAnnouncements / limit),
    };
  }

  async findOne(id: string) {
    const announcement = await this.announcementModel.findById(id);
    if (!announcement) throw new NotFoundException('Announcement not found');
    return announcement;
  }

  async update(id: string, updateAnnouncementDto: UpdateAnnouncementDto) {
    const announcement = await this.announcementModel.findById(id);
    if (!announcement) throw new NotFoundException('Announcement not found');
    const updateAnnouncement = await this.announcementModel.findByIdAndUpdate(
      id,
      updateAnnouncementDto,
      {
        new: true,
      },
    );
    return updateAnnouncement;
  }

  async remove(id: string) {
    const announcement = await this.announcementModel.findById(id);
    if (!announcement) throw new NotFoundException('Announcement not found');
    const deletedAnnouncement = await this.announcementModel.deleteOne({
      _id: id,
    });
    return deletedAnnouncement;
  }
}
