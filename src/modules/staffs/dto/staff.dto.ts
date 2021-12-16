import { FilterableField } from '@nestjs-query/query-graphql';
import { ObjectType, Field, Int } from '@nestjs/graphql';
import { CreateDateColumn, DeleteDateColumn, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';

@ObjectType()
export class StaffDTO{
@FilterableField()
 id: String;

 @FilterableField()
 createDAt:Date;

 @FilterableField()
 updateDAt:Date;
 
 @FilterableField()
 deleteDAt:Date;

}
