import { Sequelize } from 'sequelize';
import vars from '../vars';
import makeTodo from './todos';

const sequelize = new Sequelize(vars.db.uri, {
  dialect: 'mysql'
});

export const todoDB = makeTodo(sequelize);

export default sequelize;