import { FilterableRelation } from '@nestjs-query/query-graphql';
import { ObjectType, Field, Int } from '@nestjs/graphql';
import { StaffEntity } from 'src/modules/staffs/entities/staff.entity';
import { UserDTO } from 'src/modules/users/dto/user.dto';
import { User } from 'src/modules/users/entities/user.entity';
import { Column, ManyToOne} from 'typeorm';
import { Entity } from 'typeorm/decorator/entity/Entity';
import { ScheduleDTO } from '../dto/schedule.dto';


@Entity()

export class Schedule extends StaffEntity{
 
  @Column()
  id: string

  @Column()
  description: string;

  @Column()
  prevision_date: Date;

  @Column()
  status: string;

  @Column()
  responsible:string;

  @Column()
  delivery_date: Date;

  @Column({nullable: true})
  userId?: string; 

  @ManyToOne(() => User, user => user.schedules)
  user: User;
}
