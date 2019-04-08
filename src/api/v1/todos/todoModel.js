// dependencies
import mongoose from 'mongoose';

const { Schema, model } = mongoose;

// define schema
const todoSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  task: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    required: false,
    default: 'pending'
  }
});

// define model
const Todo = model('Todo', todoSchema);

export default Todo;
