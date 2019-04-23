// dependencies
import mongoose from "mongoose";

const { Schema, model, models } = mongoose;

// define schema
const todoSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  task: {
    type: String,
    required: true
  },
  completed: {
    type: Boolean,
    required: false,
    default: false
  }
});

// define model
const Todo = mongoose.models.Todo || model("Todo", todoSchema);

export default Todo;
