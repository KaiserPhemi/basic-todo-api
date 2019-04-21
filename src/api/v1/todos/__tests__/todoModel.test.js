// third party libraries
import { expect } from "chai";
import mongoose from "mongoose";

// database model
import Todo from "../todoModel";

// test suites
describe("Todo Model", () => {
  let newTodo = {
    title: "Complete test",
    task: "Write test for all API endpoint"
  };
  before(done => {
    mongoose.connect("mongodb://localhost/todoTest", { useNewUrlParser: true });
    done();
  });
  afterEach(done => {
    Todo.deleteMany({});
    done();
  });

  describe("Create Todo", () => {
    it("should create a todo item", done => {
      Todo.create(newTodo)
        .then(todo => {
          console.log("created", todo);
          expect(todo).to.be.ok;
          expect(todo).to.be.an("object");
          expect(todo).to.have.property("title");
          expect(todo).to.have.property("task");
          expect(todo).to.have.property("id");
          expect(todo).to.have.property("completed");
          expect(todo.title).to.eq;
        })
        .catch(err => {
          console.log("Error message", err);
        });
      done();
    });
  });
  // describe("Retrieve Todos", () => {});
  // describe("Update Todo", () => {});
  // describe("Delete Todo", () => {});
});
