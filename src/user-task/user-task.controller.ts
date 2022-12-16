import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { UserTaskService } from './user-task.service';

@ApiTags('User Task')
@Controller('user-task')
export class UserTaskController {
  constructor(private readonly userTaskService: UserTaskService) {}
}
