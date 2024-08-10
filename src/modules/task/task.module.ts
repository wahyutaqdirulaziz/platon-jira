import { Module } from '@nestjs/common';
import { PrismaModule } from 'src/modules/prisma/prisma.module'; // Impor PrismaModule
import { TaskController } from './task.controller';
import { TaskService } from './task.service';
import { TaskRepository } from './task.repository';

@Module({
  imports: [PrismaModule], // Pastikan PrismaModule diimpor di sini
  controllers: [TaskController],
  providers: [TaskService, TaskRepository], // Tidak perlu menambahkan PrismaService di sini
  exports: [TaskService],
})
export class TaskModule {}
