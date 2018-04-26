module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert('Jobs', [{
                title: 'web developer',
                createdAt: new Date(),
                updatedAt: new Date(),
                description: 'cool job eh?',
                isActive: true,
                isDeleted: false,
                jobCategoryId: 1,
            },
            {
                title: '.net developer',
                createdAt: new Date(),
                updatedAt: new Date(),
                description: 'lame job eh?',
                isActive: true,
                isDeleted: false,
                jobCategoryId: 2,
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
