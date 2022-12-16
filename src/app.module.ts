import { Module } from '@nestjs/common';
import { CoreModule } from './core/core.module';
import { UserModule } from './user/user.module';
import { TaskModule } from './task/task.module';
import { UserTaskModule } from './user-task/user-task.module';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost/task_manager'),
    CoreModule,
    UserModule,
    TaskModule,
    UserTaskModule,
    AuthModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
