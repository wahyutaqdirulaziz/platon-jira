import { Body, Controller, Get, Post, UseInterceptors } from "@nestjs/common";
import { Project } from "@prisma/client";
import { ProjectService } from "./project.service";
import { ApiTags } from "@nestjs/swagger";
import { ResponseInterceptor } from "../../shared/interceptors/response.interceptor";
import { CreateProjectDto } from "./dto/createProject.dto";



@Controller('project')
@ApiTags('project')
@UseInterceptors(ResponseInterceptor)
export class ProjectController{
    constructor(
        private readonly projectService: ProjectService,
      ) {}

      @Get()
      async getAllProjects(): Promise<Project[]> {
        return this.projectService.project();
      }

      @Post()
      async createProject(@Body() createProjectDto: CreateProjectDto): Promise<Project> {
        return this.projectService.createProject(createProjectDto);
      }
}