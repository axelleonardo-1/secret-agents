import { Schema, model, SchemaTypes} from 'mongoose';

const fileSchema = new Schema({
  key: { type: SchemaTypes.String, required: true },
  url: { type: SchemaTypes.String, required: true },
  createdAt: { type: SchemaTypes.Date, default: Date.now }
});

export const fileModel = model('files', fileSchema);

export default fileModel;