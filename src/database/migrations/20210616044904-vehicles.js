module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('vehicles', {
      id: {
        type: Sequelize.STRING,
        allowNull: false,
        field: 'chassis',
      },

      chassis: {
        type: Sequelize.STRING,
        allowNull: false,
        primaryKey: true,
      },

      model: {
        type: Sequelize.STRING,
        allowNull: false,
      },

      brand: {
        type: Sequelize.STRING,
        allowNull: false,
      },

      manufacture_year: {
        type: Sequelize.STRING,
        allowNull: false,
      },

      plate: {
        type: Sequelize.STRING,
        allowNull: false,
      },

      color: {
        type: Sequelize.STRING,
        allowNull: false,
      },

      available: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
      },

      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },

      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    });
  },

  down: async (queryInterface) => {
    await queryInterface.dropTable('vehicles');
  },
};
