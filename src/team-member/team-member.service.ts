import { Injectable } from '@nestjs/common';
import { CreateTeamMemberDto } from './dto/create-team-member.dto';
import { UpdateTeamMemberDto } from './dto/update-team-member.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { TeamMemberEntity } from './entities/team-member.entity';
import { Repository } from 'typeorm';

@Injectable()
export class TeamMemberService {
  constructor(
    @InjectRepository(TeamMemberEntity)
    private teamMemberRepository: Repository<TeamMemberEntity>,
  ) {}

  create(createTeamMemberDto: CreateTeamMemberDto) {
    console.log('[debug] createTeamMemberDto:', createTeamMemberDto);
    const { name, team, label = [] } = createTeamMemberDto;
    return this.teamMemberRepository.save({
      name,
      team,
      label: label.join(','),
    });
  }

  async findAll() {
    const data = await this.teamMemberRepository.find();
    return data.map((item) => {
      return {
        ...item,
        label: item?.label === '' ? [] : item?.label.split(','),
      };
    });
  }

  findOne(id: number) {
    return `This action returns a #${id} teamMember`;
  }

  async update(id: number, updateTeamMemberDto: UpdateTeamMemberDto) {
    const data = await this.teamMemberRepository.findOne({ where: { id } });
    const { name, team, label = [] } = updateTeamMemberDto;
    data.name = name;
    data.team = team;
    data.label = label.join(',');
    return this.teamMemberRepository.save(data);
  }

  async remove(id: number) {
    const data = await this.teamMemberRepository.findOne({ where: { id } });
    console.log('[debug] delete data:', data);
    return this.teamMemberRepository.remove(data);
  }
}
