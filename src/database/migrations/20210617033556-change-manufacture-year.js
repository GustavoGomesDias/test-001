module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.changeColumn('acquisitions', 'manufacture_year', {
      type: Sequelize.STRING,
      allowNull: false,
    });

    await queryInterface.changeColumn('vehicles', 'manufacture_year', {
      type: Sequelize.STRING,
      allowNull: false,
    });
  },

  down: async () => {},
};
