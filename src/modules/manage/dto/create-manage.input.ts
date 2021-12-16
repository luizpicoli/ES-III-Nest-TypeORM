import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateManageInput {
  @Field()
  name: string;

  @Field()
  prevision_date: Date;

  @Field()
  tarefas: string;

}
