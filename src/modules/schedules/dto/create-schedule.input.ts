import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateScheduleInput {
  @Field()
  description: string;

  @Field()
  prevision_date?: Date;

  @Field()
  status: string;

  @Field()
  responsible:string;

  @Field()
  delivery_date: Date;


  @Field()
  userId?: string;
}
