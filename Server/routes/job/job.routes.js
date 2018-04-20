const {
    Router,
} = require('express');
const bodyParser = require('body-parser');
const passport = require('passport');
const jobController = require('./job.controller').default;

const init = (app, data) => {
    const router = new Router();
    const {
        getPublicJobs,
        getJobById,
        postJobApplication,
        getAllJobs,
        createNewJob,
        editJob
    } = jobController.init(app, data);

    app.use(bodyParser.urlencoded({
        extended: true,
    }));
    // TO DO user history JWT  strategy and check only admin

    router
        .get('/job', async (req, res) => {
            try {
                const publicJobs = await getPublicJobs();
                res.status(200).json(publicJobs);
            } catch (exception) {
                res.status(502).json({
                    msg: 'Request to get public jobs rejected!',
                    err: exception,
                });
            }
        })
        .get('/job:id', async (req, res) => {
            const jobId = req.body.id;
            try {
                const jobDetails = await getJobById(jobId);
                res.status(200).json(jobDetails);
            } catch (exception) {
                res.redirect('/job');
            }
        })
        .post('/job/apply', passport.authenticate('jwt', {
            session: false,
        }), async (req, res) => {
            try {
                await postJobApplication(req.body);
                res.redirect('/job');
            } catch (exception) {
                res.status(502).json({
                    msg: 'Job application rejected!',
                    err: exception,
                })
            }
        })
        .get('/jobs', passport.authenticate('jwt', {
            session: true,
        }), async (req, res) => {
            try {
                const allJobs = await getAllJobs();
                res.status(200).json(allJobs);
            } catch (exception) {
                res.status(502).json({
                    msg: 'Request to get all jobs rejected!',
                    err: exception,
                });
            }
        })
        .post('/jobs/create', passport.authenticate('jwt', {
            session: true,
        }), async (req, res) => {
            try {
                await createNewJob(res.body);
                res.redirect('/jobs')
            } catch (exception) {
                res.status(502).json({
                    msg: 'Request to create job rejected!',
                    err: exception,
                });
            }
        })
        .post('/jobs/edit', passport.authenticate('jwt', {
            session: true,
        }), async (req, res) => {
            try {
                await editJob(res.body);
                res.redirect('/jobs');
            } catch (exception) {
                res.status(502).json({
                    msg: 'Edit request rejected!',
                    err: exception,
                })
            }
        });
    app.use('/job', router);
};

module.exports = {
    init,
};
