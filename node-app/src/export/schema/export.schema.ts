import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { ExportType, State } from 'src/common/enums/state.enum';

@Schema()
export class Export extends Document {
  @Prop({ required: true })
  bookId: string;

  @Prop({ required: true, enum: ExportType })
  type: string;

  @Prop({ default: State.Pending })
  state: string;

  @Prop({ default: Date.now })
  created_at: Date;

  @Prop()
  updated_at?: Date;
}

export const ExportSchema = SchemaFactory.createForClass(Export);
