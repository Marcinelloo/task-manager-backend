import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type Taskocument = HydratedDocument<Task>;

@Schema({ timestamps: true })
export class Task {
  @Prop({ required: true, minLength: 5, maxlength: 60 })
  title: string;
  @Prop({ required: true })
  from: Date;
  @Prop({ required: true })
  to: Date;
  @Prop({ required: true, minLength: 5, maxlength: 60 })
  description: string;
}

export const TaskSchema = SchemaFactory.createForClass(Task);
