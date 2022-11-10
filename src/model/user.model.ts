import mongoose from 'mongoose';
import config from 'config';
import bcrypt from 'bcrypt';


export interface UserDocument extends mongoose.Document {

  firstname: string,
  lastname: string,
  phone: string,
  email: string,
  password: string,
  createdAt: Date,
  updatedAt: Date,
  comparePassword: (candidatePassword: string) => Boolean

}


const UserSchema = new mongoose.Schema({
  firstname: {
    type: String,
    unique: false,
    required: true
  },

  lastname: {
    type: String,
    unique: false,
    required: true
  },

  email: {
    type: String,
    unique: true,
    required: true
  },
  phone: {
    type: String,
    unique: true,
    required: true
  },

  password: {
    type: String,
    unique: false,
    required: true
  }

}, { timestamps: true })

UserSchema.pre('save', async function(next) {
  const user = this as UserDocument;
  if (!user.isModified('password')) return next();

  const salt = await bcrypt.genSalt(config.get<number>('salt'))
  const hash = await bcrypt.hash(user.password, salt);
  user.password = hash;

  return next();

})

UserSchema.methods.comparePassword = async function(candidatePassword: string): Promise<Boolean> {
  const user = this as UserDocument;
  return await bcrypt.compare(candidatePassword, user.password);
}
const User = mongoose.model<UserDocument>('User', UserSchema);


export default User;
