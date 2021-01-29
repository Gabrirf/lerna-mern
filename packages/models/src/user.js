const { Schema, model } = require('mongoose');

const { uniqueNotNullString } = require('./utils/types');
const { cleanObject } = require('./utils/format');

const roles = ['user', 'admin'];

const settingsSchema = Schema({
  role: { type: String, enum: roles },
  value: String,
}, { _id: false });

const userSchema = new Schema({
  userName: { type: String, required: true, unique: true },
  realName: uniqueNotNullString('realName'),
  birth: Date,
  password: String,
  settings: settingsSchema,
  image: { data: Buffer, contentType: String },
});

userSchema.method('toJSON', cleanObject);

module.exports = model('user', userSchema);
