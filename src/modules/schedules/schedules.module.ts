import { Module } from '@nestjs/common';
import { Schedule } from './entities/schedule.entity';
import { NestjsQueryGraphQLModule, PagingStrategies } from '@nestjs-query/query-graphql';
import { NestjsQueryTypeOrmModule } from '@nestjs-query/query-typeorm';
import { ScheduleDTO } from './dto/schedule.dto';
import { UpdateScheduleInput } from './dto/update-Schedule.input';
import { CreateScheduleInput } from './dto/create-schedule.input';

@Module({
  imports:[
    NestjsQueryGraphQLModule.forFeature({
           
      imports: [NestjsQueryTypeOrmModule.forFeature([Schedule])],
      
      resolvers: [{
         DTOClass: ScheduleDTO, 
         EntityClass: Schedule,
         CreateDTOClass:CreateScheduleInput,
         UpdateDTOClass:UpdateScheduleInput,
         enableTotalCount:true,
         pagingStrategy: PagingStrategies.OFFSET,
        }],
    }),
  ],
  providers: []
})
export class SchedulesModule {}
