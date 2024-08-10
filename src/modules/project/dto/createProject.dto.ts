import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class CreateProjectDto {


  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    description: 'Name of the project',
    example: 'My first project',
    required: true,
  })
  project_name: string;
}