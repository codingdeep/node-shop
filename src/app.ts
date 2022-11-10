import express from 'express';

import config from 'config';


import logger from './utils/log';
import routes from './route/routes';
import connect from './utils/connect.utils';
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
const port = config.get<number>('port');


app.listen(port, () => {

  logger.info("App is running on http://localhost:" + port)
  connect();
  routes(app);
})

