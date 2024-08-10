import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './modules/prisma/prisma.module';
import { ProjectModule } from './modules/project/project.module';
import { TaskModule } from './modules/task/task.module';

@Module({
  imports: [PrismaModule, ProjectModule,TaskModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
