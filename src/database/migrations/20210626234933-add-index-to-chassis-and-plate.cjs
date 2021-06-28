module.exports = {
  up: async (queryInterface) => {
    await queryInterface.addIndex('acquisitions', ['chassis'], {
      indexName: 'chassis',
      indicesType: 'UNIQUE',
    });
    await queryInterface.addIndex('acquisitions', ['plate'], {
      indexName: 'plate',
      indicesType: 'UNIQUE',
    });
  },

  down: async () => {},
};
