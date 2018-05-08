const Data = require('./generic.data');

const {
    User,
    Job,
    JobCategory,
    UserJob,
} = require('../db/models');

class JobData extends Data {
    constructor() {
        super(Job, [User, UserJob]);
    }

    getAllActiveJobs() {
        return this.Model.findAll({
            where: {
                isActive: true,
            },
            include: [{
                model: JobCategory,
            }],
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

    editJobData(job) {
        return this.Model.update({
            title: job.title,
            description: job.description,
            isActive: job.isActive,
            isDeleted: job.isDeleted,
        }, {
            where: {
                id: job.id,
            },
        }
        );
    }

    getJobAppFromData(jobId) {
        

        return this.Model.findAll({
            where: { id: jobId },
            attributes: ['title'],
            // raw: true,
            // plain: true,
            include: [
                // { model: UserJob,
                // where: { jobId: jobId } },
                { model: User,
                    attributes: ['firstName', 'lastName', 'email'] },
            ],
        });
    }

    // deleteJobData(id) {
    //     return this.Model.findById(id, {
    //         include: this.includes,
    //         plain: true,
    //     }).update({ isDeleted: 1 });

        // return this.Model.getById(id)
        // .then((job) => {
        //     job.isDeleted = 1;
        // }).save();
        // .update({ isDeleted: 1 })
    // }
    }

module.exports = JobData;
