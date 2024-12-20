import { Injectable } from '@nestjs/common';
import { CreatePhotoDto } from './dto/create-photo.dto';
import { UpdatePhotoDto } from './dto/update-photo.dto';
import { PhotoEntity } from './entities/photo.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class PhotoService {
  constructor(
    @InjectRepository(PhotoEntity)
    private photoRepository: Repository<PhotoEntity>,
  ) {}

  create(createPhotoDto: CreatePhotoDto) {
    return 'This action adds a new photo';
  }

  async findAll(): Promise<PhotoEntity[]> {
    return await this.photoRepository.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} photo`;
  }

  update(id: number, updatePhotoDto: UpdatePhotoDto) {
    return `This action updates a #${id} photo`;
  }

  remove(id: number) {
    return `This action removes a #${id} photo`;
  }
}
