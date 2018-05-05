module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert('Contacts', [{
                name: 'Telerik Academy',
                value: 'bul. "Aleksandar Malinov" 31, 1729 g.k. Mladost 1A, Sofia',
                isMapAddress: true,
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                name: 'Office OBB 1',
                value: 'ulitsa "Akademik Boris Stefanov" 1, 1700 Studentski Kompleks, Sofia',
                isMapAddress: false,
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                name: 'Office OBB 2',
                value: '12 Jerusalem Blvd., Ubb Jerusalem Branch, 1000 Sofia',
                isMapAddress: false,
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