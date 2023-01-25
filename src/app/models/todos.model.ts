import { todoDB } from '../../db';
import { AddTodo, Todo } from '../../types';

export const todosModel = {
  async list(): Promise<Todo[]> {
    const results = await todoDB.findAll({ raw: true });
    return results as unknown as Todo[];
  },

  async add(data: AddTodo): Promise<Todo['id']> {
    const results = await todoDB.create({ ...data, createdAt: new Date() }) as any;
    return results.id;
  },

  async get(id: Todo['id']): Promise<Todo> {
    const results = await todoDB.findOne({ where: { id }, raw: true });
    return results as unknown as Todo;
  }
};