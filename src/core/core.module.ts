import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Task, TaskSchema } from './entities/task';
import { UserTask, UserTaskSchema } from './entities/user-task';
import { User, UserSchema } from './entities/user.entity';

@Module({
  imports: [
    MongooseModule.forFeatureAsync([
      {
        name: User.name,
        useFactory: () => UserSchema,
        collection: 'user',
      },
      {
        name: UserTask.name,
        useFactory: () => UserTaskSchema,
        collection: 'user_task',
      },
      {
        name: Task.name,
        useFactory: () => TaskSchema,
        collection: 'task',
      },
    ]),
  ],
  exports: [MongooseModule],
})
export class CoreModule {}
