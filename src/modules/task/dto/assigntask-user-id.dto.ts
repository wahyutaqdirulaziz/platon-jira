import { ApiProperty } from '@nestjs/swagger';

export class AssignTaskUserIdDto {
  @ApiProperty({
    description: 'ID of the user to assign to the task',
    example: 1
  })
  userId: number;
}
