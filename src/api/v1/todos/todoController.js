// models
import Todo from './todoModel';

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
        return res.status(200)
          .send({
            message: 'All todos retrieved successfuly',
            todos
          });
      })
      .catch(err => {
        return res.status(500)
          .send({
            message: 'An error occured.',
            err,
          });
      });
  },

  /**
   * @desc creates a todo
   * @param {object} req
   * @param {object} res
   */
  createTodo(req, res) {
    const {
      title,
      task,
    } = req.body;
    if (!title || !task) {
      return res.status(400)
        .send({
          message: 'Fields cannot be blank. Please try again'
        });
    }
    Todo.create(req.body)
      .then(todo => {
        return res.status(201)
          .send({
            message: 'Todo created successfully.',
            todo
          });
      })
      .catch(err => {
        return res.status(500)
          .send({
            message: 'An error has occured. Todo not created.',
            err
          });
      });
  },

  //   /**
  //    * @desc
  //    * @param {object} req
  //    * @param {object} res
  //    */
  //   getTodo(req, res) {
  //     // const todoId = req.params.id;
  //     // if (!todoId) {
  //     //   res.status(400)
  //     //     .send({
  //     //       message: 'Invalid todo id'
  //     //     });
  //     // }
  //     // db.Todo.findById(todoId)
  //     //   .then(todo => {
  //     //     if (!todo) {
  //     //       res.status(404)
  //     //         .send({
  //     //           message: 'Todo item not found'
  //     //         });
  //     //     }
  //     //     res.status(200)
  //     //       .send({
  //     //         message: 'Todo item retrieved successfully',
  //     //         todo,
  //     //       });
  //     //   })
  //     //   .catch(() => {
  //     //     res.status(500)
  //     //       .send({
  //     //         message: 'Todo item cannot be retrieved'
  //     //       });
  //     //   });
  //   },

  //   /**
  //    * @desc updates a todo item
  //    * @param {object} req
  //    * @param {object} res
  //    */
  //   updateTodo(req, res) {
  //     // db.Todo
  //     //   .findById(req.params.id)
  //     //   .then(todo => {
  //     //     if (!todo) {
  //     //       res.status(404)
  //     //         .send({
  //     //           message: 'Todo item not found',
  //     //         });
  //     //     }
  //     //     todo.update(req.body)
  //     //       .then(updatedTodo => {
  //     //         db.Todo.findById(updatedTodo.id)
  //     //           .then(() => {
  //     //             res.status(200)
  //     //               .send({
  //     //                 message: 'Todo item updated successfully',
  //     //                 updatedTodo,
  //     //               });
  //     //           })
  //     //           .catch(() => {
  //     //             res.status(404)
  //     //               .send({
  //     //                 message: 'Todo item not found'
  //     //               });
  //     //           });
  //     //       });
  //     //   })
  //     //   .catch(() => {
  //     //     res.status(500)
  //     //       .send({
  //     //         message: 'Todo item not updated'
  //     //       });
  //     //   });
  //   },

  //   /**
  //    * @desc handles delete of a todo item
  //    * @param {object} req
  //    * @param {object} res
  //    */
  //   deleteTodo(req, res) {
  //   //   const todoId = req.params.id;
  //   //   db.Todo
  //   //     .findById(todoId)
  //   //     .then(todo => {
  //   //       if (!todo) {
  //   //         res.status(404)
  //   //           .send({
  //   //             message: 'Todo item not found'
  //   //           });
  //   //       }
  //   //       const deletedTodo = todo;
  //   //       todo.destroy()
  //   //         .then(() => {
  //   //           res.status(200)
  //   //             .send({
  //   //               message: 'Todo item deleted successfully',
  //   //               deletedTodo,
  //   //             });
  //   //         })
  //   //         .catch(deletedTodo => {
  //   //           res.status(500)
  //   //             .send({
  //   //               message: 'Todo item was not deleted',
  //   //               deletedTodo
  //   //             });
  //   //         });
  //   //     })
  //   //     .catch(deletedTodo => {
  //   //       res.status(500)
  //   //         .send({
  //   //           message: 'Todo item was not deleted',
  //   //           deletedTodo
  //   //         });
  //   //     });
  //   },
  // };

};

export default todoController;
