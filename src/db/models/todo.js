module.exports = (sequelize, DataTypes) => {
  const Todo = sequelize.define('Todo', {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    status: {
      type: DataTypes.ENUM(),
      allowNull: false,
      values: ['completed', 'uncompleted'],
      defaultValue: 'uncompleted'
    }
  }, {});
  Todo.associate = function(models) {
    // associations can be defined here
  };
  return Todo;
};
