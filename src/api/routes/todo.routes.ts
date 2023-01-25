import { Router } from 'express';
import { todosController } from '../../app/controllers';

const todosRoute = Router();

// getTodo
todosRoute.get('/:id', async (req, res) => {
  res.send(req);
});

// editTodo
todosRoute.put('/:id', async (req, res) => {
  res.send(req);
});

// removeTodo
todosRoute.delete('/:id', async (req, res) => {
  res.send(req);
});

// listTodo
todosRoute.get('/', async (_req, res) => {
  const results = await todosController.list();
  return res.json(results);
});

// addTodo
todosRoute.post('/', async (req, res) => {
  const { body } = req;
  const results = await todosController.add(body);
  return res.status(201).json(results);
});


export { todosRoute };