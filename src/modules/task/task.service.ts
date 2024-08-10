import { Injectable } from "@nestjs/common";
import { Project, Status, Task } from "@prisma/client";
import { TaskRepository } from "./task.repository";
import { CreateTaskDto } from "./dto/createTask.dto";


@Injectable()
export class TaskService{
    constructor(private taskRepository: TaskRepository) {}

    async task(projectId: number){
        const data:Task[]  = await this.taskRepository.findByProjectId(projectId);
        return data;
    }
      
    async assignTaskUserId(taskId: number, userId: number): Promise<Task> {
        return this.taskRepository.assignTask(taskId, userId);
      }

      async createTask(createTaskDto: CreateTaskDto): Promise<Task> {
        const { task, projectId } = createTaskDto;
        return this.taskRepository.createTask(task, projectId);
      }

      async changeTaskStatus(taskId: number, status: Status): Promise<Task> {
        return this.taskRepository.updateTaskStatus(taskId, status);
      }

}