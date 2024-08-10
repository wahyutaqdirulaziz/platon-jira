import { Injectable } from "@nestjs/common";
import { ProjectRepository } from "./project.repository";
import { Project } from "@prisma/client";
import { CreateProjectDto } from "./dto/createProject.dto";


@Injectable()
export class ProjectService{
    constructor(private projectRepository: ProjectRepository) {}

    async project(){
        const data:  Project[]  = await this.projectRepository.getall();
        return data;
    }
      
    async createProject(createProjectDto: CreateProjectDto): Promise<Project> {
        return this.projectRepository.createProject({
          project_name: createProjectDto.project_name
        });
      }

}