import { Module } from '@nestjs/common';
import { TeamMemberService } from './team-member.service';
import { TeamMemberController } from './team-member.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TeamMemberEntity } from './entities/team-member.entity';

@Module({
  imports: [TypeOrmModule.forFeature([TeamMemberEntity])],
  controllers: [TeamMemberController],
  providers: [TeamMemberService]
})
export class TeamMemberModule {}
