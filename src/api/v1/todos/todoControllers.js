// models
import db from '../../db/models';

/**
 * @desc handles all request for all todos
 */
const todoController = {
  /**
   * @desc retrieves all todo items
   * @param {object} req
   * @param {object} res
   */
  getAllTodos(req, res) {
    db.Todo
      .findAndCountAll()
      .then(todos => {
        res.status(200)
          .send({
            message: 'Successfully retrieved all todo items',
            todos
          });
      });
  },

  /**
   * @desc creates a todo item
   * @param {object} req
   * @param {object} res
   */
  createTodo(req, res) {
    const {
      title,
      description,
      status
    } = req.body;
    if (!title) {
      res.status(400)
        .send({
          message: 'Please include a title'
        });
    }
    if (!description) {
      res.status(400)
        .send({
          message: 'Please include a description'
        });
    }
    db.Todo
      .create({ title, description, status })
      .then(todo => {
        res.status(201)
          .send({
            message: 'Todo item was creatd succesfully',
            todo
          });
      })
      .catch(() => {
        res.status(500)
          .send({
            message: 'An error occured. Todo not created.'
          });
      });
  },

  /**
   * @desc
   * @param {object} req
   * @param {object} res
   */
  getTodo(req, res) {
    const todoId = req.params.id;
    if (!todoId) {
      res.status(400)
        .send({
          message: 'Invalid todo id'
        });
    }
    db.Todo.findById(todoId)
      .then(todo => {
        if (!todo) {
          res.status(404)
            .send({
              message: 'Todo item not found'
            });
        }
        res.status(200)
          .send({
            message: 'Todo item retrieved successfully',
            todo,
          });
      })
      .catch(() => {
        res.status(500)
          .send({
            message: 'Todo item cannot be retrieved'
          });
      });
  },

  /**
   * @desc updates a todo item
   * @param {object} req
   * @param {object} res
   */
  updateTodo(req, res) {
    db.Todo
      .findById(req.params.id)
      .then(todo => {
        if (!todo) {
          res.status(404)
            .send({
              message: 'Todo item not found',
            });
        }
        todo.update(req.body)
          .then(updatedTodo => {
            db.Todo.findById(updatedTodo.id)
              .then(() => {
                res.status(200)
                  .send({
                    message: 'Todo item updated successfully',
                    updatedTodo,
                  });
              })
              .catch(() => {
                res.status(404)
                  .send({
                    message: 'Todo item not found'
                  });
              });
          });
      })
      .catch(() => {
        res.status(500)
          .send({
            message: 'Todo item not updated'
          });
      });
  },

  /**
   * @desc handles delete of a todo item
   * @param {object} req
   * @param {object} res
   */
  deleteTodo(req, res) {
    const todoId = req.params.id;
    db.Todo
      .findById(todoId)
      .then(todo => {
        if (!todo) {
          res.status(404)
            .send({
              message: 'Todo item not found'
            });
        }
        const deletedTodo = todo;
        todo.destroy()
          .then(() => {
            res.status(200)
              .send({
                message: 'Todo item deleted successfully',
                deletedTodo,
              });
          })
          .catch(deletedTodo => {
            res.status(500)
              .send({
                message: 'Todo item was not deleted',
                deletedTodo
              });
          });
      })
      .catch(deletedTodo => {
        res.status(500)
          .send({
            message: 'Todo item was not deleted',
            deletedTodo
          });
      });
  },
};

export default todoController;
