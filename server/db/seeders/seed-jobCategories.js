module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert('JobCategories', [{
                name: 'js',
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                name: '.net',
                createdAt: new Date(),
                updatedAt: new Date(),
            },
        ], {});
    },

    down: (queryInterface, Sequelize) => {
        /*
          Add reverting commands here.
          Return a promise to correctly handle asynchronicity.
          Example:
          return queryInterface.bulkDelete('Person', null, {});
        */
    },
};
