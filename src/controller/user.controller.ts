import { Request, Response } from 'express';
import { omit } from 'lodash';
import { createUseInput } from '../schema/user.schema';
import { UserService } from '../service'
export const UserController = {
  createUserHandler
}

async function createUserHandler(req: Request<{}, {}, createUseInput['body']>, res: Response) {
  try {
    const user = await UserService.userCreation(req.body);
    return res.status(200).send(omit(user.toJSON(), 'password'));
  } catch (e: any) {

    return res.send(e.message).status(409)
  }
}
