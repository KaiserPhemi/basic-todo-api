/* eslint-disable no-undef */
// dependencies
import supertest from "supertest";
import { expect } from "chai";
import mongoose from "mongoose";

// database model
import Todo from "../todoModel";

// express app
import app from "../../../../app";

// fixtures
import { todoArrays, newTodo } from "./testFixtures";

process.env.NODE_ENV = "test";
const http = supertest.agent(app);
const baseUrl = "/api/v1";

// test suites
describe("Todo API", () => {
  before(() => {
    mongoose.connect("mongodb://localhost/todoTest", { useNewUrlParser: true });
  });
  beforeEach(done => {
    Todo.insertMany(todoArrays).then(() => done());
  });
  let allTodos = [];
  let todoId;

  describe("End point /todos", () => {
    it("GET /todos should get all todos", done => {
      http
        .get(`${baseUrl}/todos`)
        .expect(200)
        .end((err, res) => {
          allTodos = [...res.body.todos];
          todoId = allTodos[1]._id;
          expect(res.body.todos).to.be.an("array");
          expect(res.body.message).to.equal("All todos retrieved successfuly");
          done();
        });
    });

    it("POST /todos should create todo", done => {
      http
        .post(`${baseUrl}/todos`)
        .expect(201)
        .send(newTodo)
        .end((err, res) => {
          if (err) done(err);
          expect(res.body.todo).to.be.an("object");
          expect(res.body.message).to.equal("Todo created successfully.");
          done();
        });
    });

    it("GET /todos/:id should get a single todo item with the stated id", done => {
      http
        .get(`${baseUrl}/todos/${todoId}`)
        .expect(200)
        .end((err, res) => {
          expect(res.body.todo).to.be.an("object");
          expect(res.body.message).to.equal("Todo retrieved successfully");
          done();
        });
    });

    it("PUT /todos/:id should update a single todo item with details passed", done => {
      http
        .put(`${baseUrl}/todos/${todoId}`)
        .send({ title: "changing this" })
        .expect(201)
        .end((err, res) => {
          expect(res.body.todo).to.be.an("object");
          expect(res.body.todo.title).to.equal("changing this");
          expect(res.body.message).to.equal("Todo item updated successfully.");
          done();
        });
    });

    it("DELETE /todos/:id should delete a single todo item with id stated", done => {
      http
        .delete(`${baseUrl}/todos/${todoId}`)
        .expect(200)
        .end((err, res) => {
          expect(res.body.todo).to.be.an("object");
          expect(res.body.message).to.equal("Todo item deleted successfully");
          done();
        });
    });
  });
});
