const {
    Router,
} = require('express');
const bodyParser = require('body-parser');
const passport = require('passport');
const jobController = require('./job.controller');

const init = (app, data) => {
    const router = new Router();
    const {
        getPublicJobs,
        getJobById,
        getAllJobs,
        createNewJob,
        editJob,
    } = jobController.init(app, data);
    const {
        applyJob,
    } = require('../user/user.controller');

    app.use(bodyParser.urlencoded({
        extended: true,
    }));
    // TO DO user history JWT  strategy and check only admin

    router
        .get('/activeJobs', async (req, res) => {
            try {
                const publicJobs = await getPublicJobs();
                res.status(200).json(publicJobs);
            } catch (exception) {
                res.status(502).json({
                    msg: 'Request to get public jobs in job routes rejected!',
                    err: exception,
                });
            }
        })
        .get('/:id', async (req, res) => {
            const jobId = req.body.id;
            try {
                const jobDetails = await getJobById(jobId);
                res.status(200).json(jobDetails);
            } catch (exception) {
                console.log('invalid job or request to get job details in job routes rejected!\n' + exception);
                res.redirect('/activeJobs');
            }
        })
        .post('/apply', passport.authenticate('jwt', {
            session: false,
        }), async (req, res) => {
            try {
                await applyJob(req.body);
                res.redirect('/job');
            } catch (exception) {
                res.status(502).json({
                    msg: 'Job application in job routes rejected!',
                    err: exception,
                })
            }
        })
        .get('/allJobs', passport.authenticate('jwt', {
            session: true,
        }), async (req, res) => {
            try {
                const allJobs = await getAllJobs();
                res.status(200).json(allJobs);
            } catch (exception) {
                res.status(502).json({
                    msg: 'Request to get all jobs in job routes rejected!',
                    err: exception,
                });
            }
        })
        .post('/create', passport.authenticate('jwt', {
            session: true,
        }), async (req, res) => {
            try {
                await createNewJob(res.body);
                res.redirect('/job')
            } catch (exception) {
                res.status(502).json({
                    msg: 'Request to create job rejected in job routes!',
                    err: exception,
                });
            }
        })
        .post('/edit', passport.authenticate('jwt', {
            session: true,
        }), async (req, res) => {
            try {
                await editJob(res.body);
                res.redirect('/allJobs');
            } catch (exception) {
                res.status(502).json({
                    msg: 'Request to edit job in job routes rejected!',
                    err: exception,
                })
            }
        });
    app.use('/jobs', router);
};

module.exports = {
    init,
};