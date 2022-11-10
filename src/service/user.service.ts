import { DocumentDefinition } from "mongoose"
import User, { UserDocument } from '../model/user.model';
export const UserService = {

  userCreation,
  validatePasswor

}

async function userCreation(input: DocumentDefinition<Omit<UserDocument, 'createAt' | 'updatedAt' | 'confirmPassword'>>) {
  try {
    const user = await User.create(input);
    return user;
  } catch (e: any) {
    throw new Error(e);
  }
}

async function validatePasswor({ email, password }: { email: string, password: string }) {

  try {
    const user = await User.findOne({ email });
    if (!user) {
      return false
    }

    return user.comparePassword(user.password);

  } catch (e: any) {
    throw new Error(e);
  }


}
