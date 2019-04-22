const testFixtures = {
  newTodo: {
    title: "Complete test",
    task: "Write test for all API endpoint"
  },
  todoArrays: [
    { title: "setup task", task: "Clean up the code base" },
    { title: "deploy task", task: "Deploy to heroku" },
    { title: "add feature", task: "Implement a new feature" }
  ],
  invalidTodo: {
    title: null,
    task: null
  }
};

module.exports = testFixtures;
