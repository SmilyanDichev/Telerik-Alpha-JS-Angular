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
            {
                title: 'web designer',
                createdAt: new Date(),
                updatedAt: new Date(),
                description: 'lame job eh?',
                isActive: true,
                isDeleted: false,
                jobCategoryId: 1,
            },
            {
                title: '.net Q&A',
                createdAt: new Date(),
                updatedAt: new Date(),
                description: 'lame job eh?',
                isActive: true,
                isDeleted: false,
                jobCategoryId: 2,
            },
            {
                title: 'Microsoft PR',
                createdAt: new Date(),
                updatedAt: new Date(),
                description: 'lame job eh?',
                isActive: true,
                isDeleted: false,
                jobCategoryId: 2,
            },
            {
                title: 'Microsoft 1',
                createdAt: new Date(),
                updatedAt: new Date(),
                description: 'lame job eh?',
                isActive: true,
                isDeleted: false,
                jobCategoryId: 2,
            },
            {
                title: 'Microsoft 2',
                createdAt: new Date(),
                updatedAt: new Date(),
                description: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.',
                isActive: true,
                isDeleted: false,
                jobCategoryId: 2,
            },
            {
                title: 'Microsoft 3',
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
