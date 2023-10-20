import { Schema } from 'mongoose';
import { State } from 'src/common/enums/state.enum';

export const ImportJobSchema = new Schema({
  bookId: { type: String, required: true },
  type: { type: String, required: true },
  url: { type: String, required: true },
  state: { type: String, default: State.Pending },
  created_at: { type: Date, default: Date.now },
  updated_at: { type: Date },
});
