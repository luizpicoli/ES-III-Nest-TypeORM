import { FilterableField, FilterableOffsetConnection, FilterableRelation } from '@nestjs-query/query-graphql';
import { ObjectType, Field, Int } from '@nestjs/graphql';
import { StaffDTO } from 'src/modules/staffs/dto/staff.dto';
import { StaffEntity } from 'src/modules/staffs/entities/staff.entity';
import { UserDTO } from 'src/modules/users/dto/user.dto';
import { Column, Connection } from 'typeorm';
import { Entity } from 'typeorm/decorator/entity/Entity';


@ObjectType('Schedule')
//@FilterableRelation('user', ( ) => UserDTO, { nullable: true })
@FilterableRelation('user', () => UserDTO)
export class ScheduleDTO extends StaffDTO {
  @FilterableField()
  id: string

  @FilterableField()
  description: string;
  
  @FilterableField()
  prevision_date?: Date;

  @FilterableField()
  status: string;

  @FilterableField()
  responsible: string;

  @FilterableField()
  delivery_date: Date;


}
