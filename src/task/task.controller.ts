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
import { TaskService } from './task.service';

@ApiTags('User')
@Controller('task')
export class TaskController {
  constructor(private readonly taskService: TaskService) {}
}
