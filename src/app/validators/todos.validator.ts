import Joi from 'joi';
import { AddTodo } from '../../types';

export const todosValidator = {
  async bodyAdd(value: unknown): Promise<AddTodo> {
    const schema = Joi.object<AddTodo>({
      description: Joi.string(),
      isDone: Joi.boolean().default(false),
    });

    const result = await schema.validateAsync(value);
    return result;
  }
};