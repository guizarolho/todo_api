import { AddTodo, Todo } from '../../types';
import { NotFoundError } from '../errors/not-found.error';
import { todosModel } from '../models';

export const todosService = {
  async list(): Promise<Todo[]> {
    const results = await todosModel.list();
    return results;
  },

  async add(data: AddTodo): Promise<Todo['id']> {
    const results = await todosModel.add(data);
    return results;
  },

  async get(id: Todo['id']): Promise<Todo | void> {
    const results = await todosModel.get(id);
    if (!results) throw new NotFoundError('todo not found');
    return results;
  }
};