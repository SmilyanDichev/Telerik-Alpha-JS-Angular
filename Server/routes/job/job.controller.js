const init = (app, data) => {
    // const bcrypt = require('bcrypt-nodejs');
    // const jwt = require('jwt-simple');
    // const moment = require('moment');
    // const config = require('../../config/config');

    const getPublicJobs = async () => {
        try {
            return await data.job.getAllActiveJobs();
        } catch (exception) {
            throw new Error(
                'Request to get all active jobs rejected in job controller! ' +
                exception);
        }
    };
    const getJobById = async (id) => {
        try {
            return await data.job.getById(id);
        } catch (exception) {
            throw new Error(
                'Request to get job by id rejected in job controller! ' +
                exception);
        }
    };

    const getAllJobs = async () => {
        try {
            return await data.job.getAllNotDeletedJobs();
        } catch (exception) {
            throw new Error(
                `Request to get all non-deleted jobs
                rejected in job controller! `,
                exception);
        }
    };
    const createNewJob = async (newJob) => {
        try {
            return await data.job.create({
                title: newJob.title,
                description: newJob.description,
                isActive: newJob.isActive,
                JobCategoryId: newJob.JobCategoryId,
                isDeleted: 0,
            });
        } catch (exception) {
            throw new Error(
                'Request to create a new job rejected in job controller! ' +
                exception);
        }
    };
    const editJob = async (job) => {
        try {
            return await data.job.editJobData(job.id, {
                title: job.title,
                description: job.description,
                isActive: job.isActive,
                isDeleted: job.isDeleted,
            });
        } catch (exception) {
            throw new Error(
                'Request to edit job rejected in job controller! ' +
                exception);
        }
    };

    return {
        getPublicJobs,
        getJobById,
        getAllJobs,
        createNewJob,
        editJob,
    };
};
module.exports = {
    init,
};
