
import { Express, Request, Response } from 'express';
import { UserController } from '../controller';
import UserMiddleware from '../middleware/user.middlewar';
import createUserSchema from '../schema/user.schema';
import { SessionController } from '../controller'
const routes = (app: Express) => {


  app.get('/api/v1/healthCheck', (req: Request, res: Response) => { res.send("Got positive result in health check") })

  app.post('/api/v1/user/register', UserMiddleware(createUserSchema), UserController.createUserHandler);

  app.post('/api/v1/user/login', UserMiddleware(createUserSchema), SessionController.createUserSession);

}
export default routes;
