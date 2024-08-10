import { ApiProperty } from '@nestjs/swagger';
import { Status } from '@prisma/client';
import { IsNotEmpty, IsString } from 'class-validator';

export class UpdateStatusTaskDto {


  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    description: 'Status pengerjain Task',
    example: 'OPEN,DONE,NEEDREVIEW',
    required: true,
  })
  status: Status;
}