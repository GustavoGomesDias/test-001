module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('acquisitions', 'chassis', {
      type: Sequelize.STRING,
      allowNull: false,
    });
  },

  down: async (queryInterface) => {
    await queryInterface.removeColumn('acquisitions', 'chassis');
  },
};
