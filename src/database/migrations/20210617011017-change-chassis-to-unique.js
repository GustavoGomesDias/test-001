module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.changeColumn('vehicles', 'chassis', {
      type: Sequelize.STRING,
      allowNull: false,
      unique: true,
    });
  },

  down: async () => {},
};
