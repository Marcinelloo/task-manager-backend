import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';
import { Task } from './task';
import { User } from './user.entity';

export type UserTaskDocument = HydratedDocument<UserTask>;

export const STATUSES_TYPES_ENUM = [
  'created',
  'pending',
  'veryfication',
  'ended',
];
type STATUES_TYPES = typeof STATUSES_TYPES_ENUM;
type STATUES_TYPE = STATUES_TYPES[number];

@Schema({ timestamps: true })
export class UserTask {
  @Prop({
    required: true,
    type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
  })
  user: User;
  @Prop({
    required: true,
    type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Task' }],
  })
  task: Task;
  @Prop({ required: true, enum: STATUSES_TYPES_ENUM })
  status: STATUES_TYPE;
  @Prop()
  comment: string;
}

export const UserTaskSchema = SchemaFactory.createForClass(UserTask);
