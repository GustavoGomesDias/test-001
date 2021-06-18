module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('sales', 'acquisition_id', {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
        model: 'acquisitions',
        key: 'id',
      },
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE',
    });
  },

  down: async (queryInterface) => {
    await queryInterface.removeColumn('sales', 'chassis');
  },
};
