import { ObjectType, Field, Int } from '@nestjs/graphql';
import { StaffEntity } from 'src/modules/staffs/entities/staff.entity';
import { Column, Entity } from 'typeorm';

@Entity()
export class Manage extends StaffEntity {
  

  @Column()
  name: string;

  @Column()
  prevision_date: Date;

  @Column()
  tarefas: string;


}
