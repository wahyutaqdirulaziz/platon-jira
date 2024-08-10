import { Module } from '@nestjs/common';
import { PrismaModule } from 'src/modules/prisma/prisma.module'; // Impor PrismaModule
import { ProjectController } from './project.controller';
import { ProjectService } from './project.service';
import { ProjectRepository } from './project.repository';

@Module({
  imports: [PrismaModule], // Pastikan PrismaModule diimpor di sini
  controllers: [ProjectController],
  providers: [ProjectService, ProjectRepository], // Tidak perlu menambahkan PrismaService di sini
  exports: [ProjectService],
})
export class ProjectModule {}
