import { UserService } from "../service";

export const SessionController = {
  createUserSession
}

async function createUserSession(req: Request, res: Response) {
  try {


    //validate password
    const user = await UserService.validatePassword(req[body]);

    //create user session 


    // create access token 


    // create refresh token   


    // return access & refresh token






  } catch (e: any) {

  }
}
