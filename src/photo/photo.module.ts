import { Module } from '@nestjs/common';
import { PhotoEntity } from './entities/photo.entity';
import { PhotoService } from './photo.service';
import { PhotoController } from './photo.controller';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([PhotoEntity])],
  controllers: [PhotoController],
  providers: [PhotoService],
})
export class PhotoModule {}
