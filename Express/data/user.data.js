const Data = require('./generic.data');
const {
    Op,
} = require('sequelize');

const {
    User,
    Job,
} = require('../db/models');

class UserData extends Data {
    constructor() {
        super(User, [Job]);
    }

    getByEmail(email) {
        return this.Model.findOne({
            where: {
                email,
            },
            include: [{
                model: Job,
            }],
        });
    }

    getByFullName(name) {
        return this.Model.findAll({
            where: {
                [Op.or]: [{
                        firstName: {
                            [Op.contains]: name,
                        },
                    },
                    {
                        lastName: {
                            [Op.contains]: name,
                        },
                    },
                ],
            },
            include: [{
                model: Job,
            }],
        });
    }

    getByAppliedJobs(job) {
        return this.Model.findAll({
            include: [{
                model: Job,
                where: {
                    title: job,
                },
            }],
        });
    }

    isObjectValid(obj) {
        return !!obj;
    }
}

module.exports = UserData;
