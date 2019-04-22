// third party libraries
import { expect } from "chai";
import mongoose from "mongoose";
import "babel-polyfill";

// database model
import Todo from "../todoModel";

// fixtures
const { newTodo, todoArrays, invalidTodo } = require("./testFixtures");

// test suites
describe("Todo Model", () => {
  before(done => {
    mongoose.connect("mongodb://localhost/todoTest", { useNewUrlParser: true });
    done();
  });
  after(done => {
    Todo.deleteMany({}).then(() => {
      done();
    });
  });

  describe("Create Todo", () => {
    it("should create a todo item", done => {
      Todo.create(newTodo).then(todo => {
        expect(todo).to.be.an("object");
        expect(todo).to.have.property("title");
        expect(todo).to.have.property("task");
        expect(todo).to.have.property("id");
        expect(todo).to.have.property("completed");
        done();
      });
    });
    it("should not create todo item for null inputs", done => {
      Todo.create(invalidTodo)
        .then()
        .catch(err => {
          expect(err.errors.title.name).to.eql("ValidatorError");
          expect(err.errors.title.properties.value).to.eql(null);
          expect(err.errors.task.name).to.eql("ValidatorError");
          expect(err.errors.task.properties.value).to.eql(null);
          done();
        });
    });
  });

  describe("Retrieve Todos", () => {
    before(done => {
      Todo.insertMany(todoArrays).then(() => done());
    });
    it("should retrieve all todos in the database", done => {
      Todo.find({}).then(todos => {
        expect(todos).to.be.an("array");
        expect(todos.length).to.be.a("number");
        done();
      });
    });
  });

  describe("Update Todo", () => {
    before(done => {
      Todo.insertMany(todoArrays).then(() => done());
    });
    it("should update a todo item", done => {
      Todo.findOneAndUpdate(
        { title: "setup task" },
        { title: "add more" },
        { new: true }
      ).then(todo => {
        expect(todo).to.be.an("object");
        expect(todo).to.have.property("title");
        expect(todo.title).to.eql("add more");
        done();
      });
    });
  });

  describe("Delete Todo", () => {
    before(done => {
      Todo.insertMany(todoArrays).then(() => done());
    });
    it("should delete a todo item", done => {
      Todo.findOneAndDelete({ title: "setup task" }).then(todo => {
        expect(todo).to.be.an("object");
        done();
      });
    });
  });
});
