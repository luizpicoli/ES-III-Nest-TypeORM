import { StaffEntity } from 'src/modules/staffs/entities/staff.entity';
import { Schedule } from 'src/modules/schedules/entities/schedule.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
@Entity()
export class User extends StaffEntity {

  @Column()
  name: string;

  @Column()
  created: Date;

  @Column({nullable: true})
  cpf: number; 

  @OneToMany(() => Schedule, (schedules) => schedules.user)
  schedules: Schedule[];



}
