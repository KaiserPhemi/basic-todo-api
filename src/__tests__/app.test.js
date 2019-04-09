/* eslint-disable no-undef */
// dependencies
import app from '../app';
import http from 'supertest';
import { expect } from 'chai';

// database
import Todo from '../api/v1/todos/todoModel';

process.env.NODE_ENV = 'test';

// test suite
describe('App', () => {
  beforeEach(() => {
    console.log('We got test covered');

  });

  afterEach(() => {

  });

  
  it('should retrieve all todos', (done) => {
    http(app)
      .get('/todos')
      .expect(200)
      .end((err, res) => {
        expect(res.body).to.be.an('object');
        done();
      });
  });
});
