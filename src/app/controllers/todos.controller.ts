import { Todo } from '../../types';
import { todosService } from '../services';
import { todosValidator } from '../validators';

export const todosController = {
  async list(): Promise<Todo[]> {
    const results = await todosService.list();
    return results;
  },

  async add(body: unknown): Promise<Todo | void> {
    const data = await todosValidator.bodyAdd(body);
    const id = await todosService.add(data);
    const results = await todosService.get(id);
    return results;
  }
};
