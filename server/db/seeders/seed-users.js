module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert('Users', [{
            createdAt: new Date(),
            updatedAt: new Date(),
            email: 'admin@foodstore.com',
            password: '$2a$10$lqPu2w/NhmTs8ceKsYuHku7J79JOWS9YMx81SEV7wW1R1W1DPsscG',
            firstName: 'georgi',
            lastName: 'ivanov',
            isAdmin: true,
        }, {
            createdAt: new Date(),
            updatedAt: new Date(),
            email: 'user@foodstore.com',
            password: '$2a$10$lqPu2w/NhmTs8ceKsYuHku7J79JOWS9YMx81SEV7wW1R1W1DPsscG',
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
