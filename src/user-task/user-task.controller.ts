import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { UserTaskService } from './user-task.service';

@Controller('user-task')
export class UserTaskController {
  constructor(private readonly userTaskService: UserTaskService) {}
}
