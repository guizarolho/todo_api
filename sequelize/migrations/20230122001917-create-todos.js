module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('todos', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      description: {
        allowNull: false,
        type: Sequelize.STRING
      },
      isDone: {
        allowNull: false,
        type: Sequelize.BOOLEAN
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE(3)
      },
      updatedAt: {
        allowNull: true,
        type: Sequelize.DATE(3)
      }
    }, {
      timestamps: false,
      tableName: 'todos'
    });
  },
  async down(queryInterface) {
    await queryInterface.dropTable('todos');
  }
};