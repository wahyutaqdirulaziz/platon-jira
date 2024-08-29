import { Body, Controller, Get, Param, Patch, Post, UseInterceptors } from "@nestjs/common";
import { Status, Task } from "@prisma/client";
import { ResponseInterceptor } from "../response.interceptor";
import { TaskService } from "./task.service";
import { CreateTaskDto } from "./dto/createTask.dto";
import { ApiTags } from "@nestjs/swagger";
import { UpdateStatusTaskDto } from "./dto/updateStatusTask.dto";



@Controller('task')
@ApiTags('task')
@UseInterceptors(ResponseInterceptor)
export class TaskController{
    constructor(
        private readonly taskService: TaskService,
      ) {}

      @Get("/:projectId")
      async getAllTask(@Param("projectId") projectId: string): Promise<Task[]> {
        return this.taskService.task(Number(projectId));
      }

      @Get('assignTask/:taskId/:userId')
      async updateTaskUserId(
        @Param('taskId') taskId: number,
        @Param('userId') userId: number,
      ): Promise<Task> {
       
        return this.taskService.assignTaskUserId(Number(taskId), Number(userId));
      }


      @Post()
      async createTask(@Body() createTaskDto: CreateTaskDto): Promise<Task> {
        return this.taskService.createTask(createTaskDto);
      }


      @Patch(':taskId/status')
      async updateTaskStatus(
        @Param('taskId') taskId: number,
        @Body() updateStatusTaskDto: UpdateStatusTaskDto,
      ): Promise<Task> {
        return this.taskService.changeTaskStatus(Number(taskId), updateStatusTaskDto.status);
      }
}