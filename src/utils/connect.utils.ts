import mongoose from "mongoose";
import config from 'config';
import log from './log';


const connect = async () => {

  try {

    const dbUrl = config.get<string>('dbUrl');
    await mongoose.connect(dbUrl);

    log.info("Db connected successfully!")

  } catch (e: any) {
    log.error(e);
    process.exit(0);
  }

}
export default connect;
