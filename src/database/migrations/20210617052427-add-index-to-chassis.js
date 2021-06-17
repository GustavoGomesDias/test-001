module.exports = {
  up: async (queryInterface) => {
    queryInterface.addIndex('vehicles', ['chassis'], {
      indexName: 'chassis',
      indicesType: 'UNIQUE',
    });
  },

  down: async () => {},
};
