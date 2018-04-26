const init = (app, data) => {
    const getPublicJobs = async () => {
        try {
            return await data.getAllActiveJobs();
        } catch (exception) {
            throw new Error(
                'Request to get all active jobs rejected in job controller!\n' +
                exception);
        }
    };
    const getJobById = async (id) => {
        try {
            return await data.getById(id);
        } catch (exception) {
            throw new Error(
                'Request to get job by id rejected in job controller!\n' +
                exception);
        }
    };

    const getAllJobs = async () => {
        try {
            return await data.getAllNotDeletedJobs();
        } catch (exception) {
            throw new Error(
                'Request to get all non-deleted jobs rejected in job controller!\n' +
                exception);
        }
    };
    const createNewJob = async (newJob) => {
        try {
            return await data.create({
                title: newJob.title,
                description: newJob.description,
                isActive: newJob.isActive,
                isDeleted: newJob.isDeleted,
            });
        } catch (exception) {
            throw new Error(
                'Request to create a new job rejected in job controller!\n' +
                exception);
        }
    };
    const editJob = async (job) => {
        try {
            return await data.editJobData(job.id, {
                title: job.title,
                description: job.description,
                isActive: job.isActive,
                isDeleted: job.isDeleted,
            });
        } catch (exception) {
            throw new Error(
                'Request to edit job rejected in job controller!\n' +
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