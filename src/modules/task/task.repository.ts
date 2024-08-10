import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { Status, Task } from "@prisma/client";


@Injectable()
export class TaskRepository {
    constructor(private prisma: PrismaService) { }

    async findByProjectId(projectId: number): Promise<Task[]> {
        return this.prisma.task.findMany({
            where: {
                projectId: projectId,
            },
            include:{
                user:true
            }
        });
    }

    async assignTask(taskId: number, userid: number): Promise<Task> {
        return this.prisma.task.update({
          where: {
            id: taskId,
          },
          data: {
            userId: userid,
          },
        });
      }


      async createTask(
        task: string,
        projectId: number,
        userId?: number,
      ): Promise<Task> {
        return this.prisma.task.create({
          data: {
            task,
            projectId,
            userId, // Bisa null atau undefined jika userId tidak diberikan
          },
        });
      }


      async updateTaskStatus(taskId: number, status: Status): Promise<Task> {
        return this.prisma.task.update({
          where: {
            id: Number(taskId),
          },
          data: {
            status, // Mengupdate status dengan nilai baru
          },
        });
      }
}