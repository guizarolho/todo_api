import express from 'express';
import 'express-async-errors';
import { errorHandlerMiddleware } from './middlewares';
import { corsMiddleware } from './middlewares/cors.middleware';
import { todosRoute } from './routes/todo.routes';

const api = express();

// req middlewares
api.use(express.json());
api.use(express.urlencoded({ extended: true }));
api.use(corsMiddleware);

// routes
api.use('/todos', todosRoute);
api.get('/', (_req, res) => {
  res.send({ message: 'teste' });
});

// res middlewares
api.use(errorHandlerMiddleware);

export default api;
