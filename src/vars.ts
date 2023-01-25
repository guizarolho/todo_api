import dotenv from 'dotenv';

dotenv.config();

const { env } = process;

export default {
  api: {
    port: Number(env.PORT || 3001),
  },
  db: {
    uri: env.DB_URI || 'mysql://root:k33p0n@127.0.0.1:3306/todos'
  }
};