import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PhotoService } from './photo/photo.service';
import { UserModule } from './user/user.module';
import { TeamMemberModule } from './team-member/team-member.module';
import 'reflect-metadata';
import { PhotoModule } from './photo/photo.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PhotoEntity } from './photo/entities/photo.entity';
import { TeamMemberService } from './team-member/team-member.service';
import { TeamMemberEntity } from './team-member/entities/team-member.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      charset: 'utf8mb4',
      port: 3306,
      username: 'root',
      password: '123456',
      database: 'storage_family',
      entities: [PhotoEntity, TeamMemberEntity],
      synchronize: true,
    }),
    UserModule,
    TeamMemberModule,
    PhotoModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
