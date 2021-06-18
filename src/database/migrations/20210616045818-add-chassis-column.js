module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('sales', 'chassis', {
      type: Sequelize.STRING,
      allowNull: false,
      references: {
        model: 'vehicles',
        key: 'chassis',
      },
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE',
    });

    await queryInterface.addColumn('acquisitions', 'chassis', {
      type: Sequelize.STRING,
      allowNull: false,
      references: {
        model: 'vehicles',
        key: 'chassis',
      },
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE',
    });
  },

  down: async (queryInterface) => {
    await queryInterface.removeColumn('sales', 'chassis');
  },
};
