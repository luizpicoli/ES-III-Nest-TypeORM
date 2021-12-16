import { FilterableField } from '@nestjs-query/query-graphql';
import { ObjectType, Field, Int } from '@nestjs/graphql';
import { StaffDTO } from 'src/modules/staffs/dto/staff.dto';
import { StaffEntity } from 'src/modules/staffs/entities/staff.entity';
import { Column, Entity } from 'typeorm';

@ObjectType('manage')
export class ManageDTO extends StaffDTO {
  

  @FilterableField()
  name: string;

  @FilterableField()
  prevision_date: Date;

  @FilterableField()
  tarefas: string;


}
