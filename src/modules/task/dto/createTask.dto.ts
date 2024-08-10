import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateTaskDto {


  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    description: 'Nama task anda ',
    example: 'Task pertama ku',
    required: true,
  })
  task: string;

  @IsNumber()
  @IsNotEmpty()
  @ApiProperty({
    description: 'Project yang terhubung dengan task ini',
    example: '1',
    required: true,
  })
  projectId: number;
}