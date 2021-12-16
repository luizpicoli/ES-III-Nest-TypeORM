import { NestjsQueryGraphQLModule, PagingStrategies } from '@nestjs-query/query-graphql';
import { NestjsQueryTypeOrmModule } from '@nestjs-query/query-typeorm';
import { Module } from '@nestjs/common';
import { CreateManageInput } from './dto/create-manage.input';
import { ManageDTO } from './dto/manage.dto';
import { UpdateManageInput } from './dto/update-manage.input';
import { Manage } from './entities/manage.entity';


@Module({
  imports:[
    NestjsQueryGraphQLModule.forFeature({
           
      imports: [NestjsQueryTypeOrmModule.forFeature([Manage])],
      
      resolvers: [{
         DTOClass: ManageDTO, 
         EntityClass: Manage,
         CreateDTOClass:CreateManageInput,
         UpdateDTOClass:UpdateManageInput,
         enableTotalCount:true,
         pagingStrategy: PagingStrategies.OFFSET,
        }],
    }),
  ],
  providers: []
})
export class ManageModule {}
