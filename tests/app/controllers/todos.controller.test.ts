import chaiAsPromised from 'chai-as-promised';
import { expect, use } from 'chai';
import sinon from 'sinon';
import { todosController } from '../../../src/app/controllers';
import { todosService } from '../../../src/app/services';
import { AddTodo } from '../../../src/types';
import { todosValidator } from '../../../src/app/validators';

use(chaiAsPromised);

describe('app/services/todos.controller', () => {
  beforeEach(sinon.restore);
  describe('list', () => {
    it('should throw if todosService throws', () => {
      sinon.stub(todosService, 'list').rejects();
      expect(todosController.list()).to.eventually.be.rejected;
    });
    it('should return a results list', async () => {
      sinon.stub(todosService, 'list').resolves([]);
      expect(todosController.list()).to.eventually.deep.equal([]);
    });
  });

  describe('add', () => {
    it('should throw if todosModel throws', () => {
      sinon.stub(todosValidator, 'bodyAdd').resolves({} as AddTodo);
      sinon.stub(todosService, 'add').resolves(1);
      sinon.stub(todosService, 'get').rejects();
      expect(todosController.add([])).to.eventually.be.rejected;
    });
    it('should return results', () => {
      const mock: AddTodo = { description: 'tarefa', isDone: false };
      sinon.stub(todosService, 'add').resolves(1);
      expect(todosController.add(mock)).to.eventually.be.deep.equal(1);
    });
  });
});