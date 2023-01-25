import { expect, use } from 'chai';
import chaiAsPromised from 'chai-as-promised';
import sinon from 'sinon';
import { todosModel } from '../../../src/app/models';
import { todoDB } from '../../../src/db';
import { AddTodo } from '../../../src/types';

use(chaiAsPromised);

describe('app/models/todos.model', () => {
  beforeEach(sinon.restore);
  describe('list', () => {
    it('should throw if findAll fails', () => {
      sinon.stub(todoDB, 'findAll').rejects();
      expect(todosModel.list()).to.eventually.be.rejected;
    });
    it('should return a list of objects', () => {
      sinon.stub(todoDB, 'findAll').resolves([]);
      expect(todosModel.list()).to.eventually.be.deep.equal([]);
    });
  });
  describe('add', () => {
    it('should throw if todoDB throws', () => {
      sinon.stub(todoDB, 'create').rejects();
      expect(todosModel.add({} as AddTodo)).to.eventually.be.rejected;
    });
    it('should return inserted id', () => {
      const mock: AddTodo = { description: 'tarefa', isDone: false };
      sinon.stub(todoDB, 'create').resolves({ id: 1 } as never);
      expect(todosModel.add(mock)).to.eventually.be.equal(1);
    });
  });
  describe('get', () => {
    it('should throw if todoDB throws', () => {
      sinon.stub(todoDB, 'findOne').rejects();
      expect(todosModel.get(1)).to.eventually.be.rejected;
    });
    it('should return a task', () => {
      sinon.stub(todoDB, 'findOne').resolves({} as never);
      expect(todosModel.get(1)).to.eventually.be.deep.equal({});
    });
  });
});