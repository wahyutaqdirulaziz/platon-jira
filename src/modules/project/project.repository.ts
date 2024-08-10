import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { Project } from "@prisma/client";


@Injectable()
export class ProjectRepository{
    constructor(private prisma: PrismaService) {}

    async getall(): Promise<Project[]> {
        return this.prisma.project.findMany();
    }
      
    async createProject(data: { project_name: string}): Promise<Project> {
        return this.prisma.project.create({
          data: {
            project_name: data.project_name,
          },
        });
      }

}