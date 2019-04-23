// models
import Todo from "./todoModel";

/**
 * @desc handles all request for all todos
 */
const todoController = {
  /**
   * @desc gets all todos
   * @param {object} req
   * @param {object} res
   */
  getAllTodos(req, res) {
    Todo.find()
      .then(todos => {
        return res.status(200).send({
          message: "All todos retrieved successfuly",
          todos
        });
      })
      .catch(err => {
        return res.status(500).send({
          message: "An error occured.",
          err
        });
      });
  },

  /**
   * @desc creates a todo
   * @param {object} req
   * @param {object} res
   */
  createTodo(req, res) {
    const { title, task } = req.body;
    if (!title || !task) {
      return res.status(400).send({
        message: "Fields cannot be blank. Please try again"
      });
    }
    Todo.create(req.body)
      .then(todo => {
        return res.status(201).send({
          message: "Todo created successfully.",
          todo
        });
      })
      .catch(err => {
        return res.status(500).send({
          message: "An error has occured. Todo not created.",
          err
        });
      });
  },

  /**
   * @desc retrieves a single todo item
   * @param {object} req
   * @param {object} res
   */
  getTodo(req, res) {
    const { id } = req.params;
    Todo.findById(id)
      .then(todo => {
        if (!todo) {
          return res.status(404).send({
            message: "Todo item not found"
          });
        }
        return res.status(201).send({
          message: "Todo retrieved successfully",
          todo
        });
      })
      .catch(err => {
        return res.status(500).send({
          message: "An error has occured",
          err
        });
      });
  },

  /**
   * @desc updates a single todo item
   * @param {object} req
   * @param {object} res
   */
  updateTodo(req, res) {
    const { id } = req.params;
    const { body } = req;
    Todo.findByIdAndUpdate(id, body, { new: true })
      .then(todo => {
        if (!todo) {
          return res.status(404).send({
            message: "Todo item not found"
          });
        }
        return res.status(201).send({
          message: "Todo item updated successfully.",
          todo
        });
      })
      .catch(err => {
        return res.status(500).send({
          message: "Todo item not updated. Internal error",
          err
        });
      });
  },

  /**
   * @desc deletes a todo item
   * @param {object} req
   * @param {object} res
   */
  deleteTodo(req, res) {
    const { id } = req.params;
    if (!id) {
      return res.status(400).send({
        message: "Todo item id not stated"
      });
    }
    Todo.findByIdAndDelete(id)
      .then(todo => {
        if (!todo) {
          return res.status(404).send({
            message: "Todo item not found"
          });
        }
        return res.status(201).send({
          message: "Todo item deleted successfully",
          todo
        });
      })
      .catch(err => {
        return res.status(500).send({
          message: "An error occured",
          err
        });
      });
  }
};

export default todoController;
