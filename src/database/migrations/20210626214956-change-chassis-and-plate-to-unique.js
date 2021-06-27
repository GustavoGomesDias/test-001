module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.changeColumn('acquisitions', 'chassis', {
      type: Sequelize.STRING,
      allowNull: false,
      unique: true,
    });
    await queryInterface.changeColumn('acquisitions', 'plate', {
      type: Sequelize.STRING,
      allowNull: false,
      unique: true,
    });
  },

  down: async () => {},
};
