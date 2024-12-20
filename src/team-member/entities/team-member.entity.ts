import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class TeamMemberEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    length: 100,
    charset: 'utf8mb4',
  })
  name: string;

  @Column('text')
  team: string;

  @Column()
  label: string;
}
