import { ObjectType, Field, Int } from '@nestjs/graphql';
import { CreateDateColumn, DeleteDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';

@Entity()
export class StaffEntity{
 @PrimaryGeneratedColumn('uuid')
 id: String;

 @CreateDateColumn()
 createDAt:Date;

 @UpdateDateColumn()
 updateDAt:Date;
 
 @DeleteDateColumn()
 deleteDAt:Date;

}
