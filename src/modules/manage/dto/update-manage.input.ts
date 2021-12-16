import { CreateManageInput } from './create-manage.input';
import { InputType, Field, Int, PartialType, ID } from '@nestjs/graphql';

@InputType()
export class UpdateManageInput extends PartialType(CreateManageInput) {
  @Field(() => ID, {nullable:true})
  id?: string;
}
