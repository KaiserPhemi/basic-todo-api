# to-do api

[![CircleCI](https://circleci.com/gh/KaiserPhemi/basic-todo-api.svg?style=svg)](https://circleci.com/gh/KaiserPhemi/basic-todo-api)

This is just a basic To-Do API for use in front-end learning or just to play around with

## Stack

- [NodeJS](https://nodejs.org/en/)
- [ExpressJS](https://expressjs.com/)
- [MongoDB](https://www.mongodb.com/)
- [MongooseJS](https://mongoosejs.com/)

## Request Structure

-- Creating a ToDo item takes the following structure

```js
{
  title: 'title of todo item',
  task: 'short text to describe the todo'
}
```

-- Updating a ToDo item is similar to the structure above but can take a third property i.e.

```js
{
  title: 'title of todo item',
  task: 'short text to describe the todo',
  completed: false
}
```

## Author

- Oluwafemi Akinwa
