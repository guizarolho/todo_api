import chaiAsPromised from 'chai-as-promised';
import { expect, use } from 'chai';
import sinon from 'sinon';
import { todosService } from '../../../src/app/services';
import { todosModel } from '../../../src/app/models';
import { AddTodo } from '../../../src/types';

use(chaiAsPromised);

describe('app/services/todos.service', () => {
  beforeEach(sinon.restore);
  describe('list', () => {
    it('should throw if todosModel throws', () => {
      sinon.stub(todosModel, 'list').rejects();
      expect(todosService.list()).to.eventually.be.rejected;
    });
    it('should return results', () => {
      sinon.stub(todosModel, 'list').resolves([]);
      expect(todosService.list()).to.eventually.deep.equal([]);
    });
  });

  describe('add', () => {
    it('should throw if todosModel throws', () => {
      sinon.stub(todosModel, 'add').rejects();
      expect(todosService.get(1)).to.eventually.be.rejected;
    });
    it('should return results', () => {
      const mock: AddTodo = { description: 'tarefa', isDone: false };
      sinon.stub(todosModel, 'add').resolves(1);
      expect(todosService.add(mock)).to.eventually.be.deep.equal(1);
    });
  });

  describe('get', () => {
    it('should throw if todosModel throws', () => {
      sinon.stub(todosModel, 'get').rejects();
      expect(todosService.get(1)).to.eventually.be.rejected;
    });
    it('should return results', () => {
      sinon.stub(todosModel, 'get').resolves({} as never);
      expect(todosService.get(1)).to.eventually.be.deep.equal({});
    });
  });
});