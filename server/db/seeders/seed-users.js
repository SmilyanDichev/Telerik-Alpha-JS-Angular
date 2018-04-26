module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert('Users', [{
            createdAt: new Date(),
            updatedAt: new Date(),
            email: 'admin@foodstore.com',
            password: '123',
            firstName: 'georgi',
            lastName: 'ivanov',
            isAdmin: true,
        }, {
            createdAt: new Date(),
            updatedAt: new Date(),
            email: 'user@foodstore.com',
            password: '12356',
            firstName: 'ivan',
            lastName: 'savov',
            isAdmin: false,
        }], {});
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
