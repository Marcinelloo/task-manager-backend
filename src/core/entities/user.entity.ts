import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

const bcrypt = require('bcrypt');
const SALT_WORK_FACTOR = 10;

export type UserDocument = HydratedDocument<User>;

@Schema({ timestamps: true })
export class User {
  @Prop({ required: true, minLength: 5, maxlength: 60 })
  firstName: string;
  @Prop({ required: true, minLength: 5, maxlength: 60 })
  lastName: string;
  @Prop({ required: true })
  active: boolean;
  @Prop({ required: true, unique: true, minLength: 3, maxlength: 60 })
  email: string;
  @Prop({ required: true, minLength: 10, maxlength: 20 })
  password: string;
}
export const UserSchema = SchemaFactory.createForClass(User);

UserSchema.pre('save', function (next) {
  var user = this;

  if (!user.isModified('password')) return next();

  bcrypt.genSalt(SALT_WORK_FACTOR, function (err, salt) {
    if (err) return next(err);

    bcrypt.hash(user.password, salt, function (err, hash) {
      if (err) return next(err);
      user.password = hash;
      next();
    });
  });
});

UserSchema.methods.comparePassword = function (candidatePassword, cb) {
  bcrypt.compare(candidatePassword, this.password, function (err, isMatch) {
    if (err) return cb(err);
    cb(null, isMatch);
  });
};
