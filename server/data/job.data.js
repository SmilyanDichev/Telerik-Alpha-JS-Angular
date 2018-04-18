const Data = require('./generic.data');

const {
    User,
    Job,
} = require('../db/models');

class JobData extends Data {
    constructor() {
        super(Job, [User]);
    }

    getAllActiveJobs() {
        return this.Model.findAll({
            where: {
                isActive: true,
            },
        });
    }
    getAllNotDeletedJobs() {
        return this.Model.findAll({
            where: {
                isDeleted: false,
            },
        });
    }

    getAllJobsByUserId() {

    }
}

module.exports = JobData;
