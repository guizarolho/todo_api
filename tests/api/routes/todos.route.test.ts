import { expect, request, use } from 'chai';
import chaiHttp from 'chai-http';
import sinon from 'sinon';
import api from '../../../src/api';
import { todoDB } from '../../../src/db';

use(chaiHttp);

describe('api/routes', () => {
  beforeEach(sinon.restore);
  describe('/GET - list', () => {
    it('should throw', async () => {
      sinon.stub(todoDB, 'findAll').rejects();

      const result = await request(api)
        .get('/todos');

      expect(result.status).to.equal(500);
    });
    it('should return list of todos', async () => {
      sinon.stub(todoDB, 'findAll').resolves([]);

      const result = await request(api)
        .get('/todos');

      expect(result.status).to.equal(200);
      expect(result.body).to.deep.equal([]);
    });
  });

  describe('/POST - addTodo', () => {
    const mock = { description: 'tarefa' };
    it('should return 201 with created element', async () => {
      sinon.stub(todoDB, 'create').resolves({ id: 1 } as never);
      sinon.stub(todoDB, 'findOne').resolves(mock as never);

      const result = await request(api)
        .post('/todos')
        .send(mock);

      expect(result.status).to.equal(201);
      expect(result.body).to.deep.equal(mock);
    });
  });
});