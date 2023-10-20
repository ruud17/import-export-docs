import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { ExportType, JobState } from '../../common/enums/state.enum';

@Schema()
export class ExportJob extends Document {
  @Prop({ required: true })
  bookId: string;

  @Prop({ required: true, enum: ExportType })
  type: string;

  @Prop({ default: JobState.Pending })
  state: string;

  @Prop({ default: Date.now })
  created_at: Date;

  @Prop()
  updated_at?: Date;
}

export const ExportJobSchema = SchemaFactory.createForClass(ExportJob);
