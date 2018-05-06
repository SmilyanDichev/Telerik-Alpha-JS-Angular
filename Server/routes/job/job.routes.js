const {
    Router,
} = require('express');
const bodyParser = require('body-parser');
const passport = require('passport');
const jobController = require('./job.controller');
const multer = require('multer');
const store = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, './uploads');
    },
    filename: (req, file, cb) => {
        cb(null, file.originalname);
    },
});
// const upload = multer({ dest: '../../uploads/' });
const upload = multer({
    storage: store,
}).fields([
    { name: 'cv', maxCount: 1 },
    { name: 'letter', maxCount: 1 },
  ]);

const init = (app, data) => {
    const router = new Router();
    const {
        getPublicJobs,
        getJobById,
        getAllJobs,
        createNewJob,
        editJob,
        deleteJob,
    } = jobController.init(app, data);
    const {
        applyJob,
    } = require('../user/user.controller');

    app.use(bodyParser.urlencoded({
        extended: true,
    }));
    router
        .get('/active', async (req, res) => {
            try {
                const publicJobs = await getPublicJobs();
                res.status(200).json(publicJobs);
            } catch (exception) {
                res.status(502).json({
                    msg: 'Request to get public jobs in job routes rejected!',
                    exception,
                });
            }
        })
        .get('/all', passport.authenticate('jwt-admin', {
                session: false,
            }),
            async (req, res) => {
                try {
                    const allJobs = await getAllJobs();
                    res.status(200).json(allJobs);
                } catch (exception) {
                    res.status(401).json({
                        msg: 'Request to get all jobs in job routes rejected!',
                        exception,
                    });
                }
            })
        .get('/:id', async (req, res) => {
            const jobId = req.params.id;
            try {
                const jobDetails = await getJobById(jobId);
                res.status(200).json(jobDetails);
            } catch (exception) {
                res.status(502).json({
                    msg: 'Job application in job routes rejected!',
                    exception,
                });
            }
        })
        .post('/apply/upload', async (req, res) => {
            try {
                upload(req, res, (err) => {
                    console.log("! ! !files ! ! !");
                    console.log(req.files);
                    // console.log(req.files);
                    console.log(req.body);
                    if (err) {
                        return res.status(501).json({
                            error: err,
                        });
                    }
                    return res.status(200).json({
                        msg: 'success',
                    });
                });
            } catch (exception) {
                res.status(502).json({
                    msg: 'Job application in job routes rejected!',
                    exception,
                });
            }
        })
        .post('/apply/:id', passport.authenticate('jwt', {
            session: false,
        }), async (req, res) => {
            try {
                // const jobId = req.params.id;
                // console.log('! ! ! apply ! ! !', req.user.dataValues, req.params.id);
                console.log('! ! ! apply ! ! !', req.params.id);
                // await applyJob(req.body);
                // res.redirect('/job');
            } catch (exception) {
                res.status(502).json({
                    msg: 'Job application in job routes rejected!',
                    err: exception,
                });
            }
        })
        .post('/create', passport.authenticate('jwt-admin', {
            session: false,
        }), async (req, res) => {
            try {
                await createNewJob(req.body);
                res.redirect('/jobs');
            } catch (exception) {
                console.log('-------------> JOB FAILED in job routes! ', exception);

                res.status(502).json({
                    msg: 'Request to create job rejected in job routes!',
                    exception,
                });
            }
        })
        .post('/delete', passport.authenticate('jwt-admin', {
            session: false,
        }), async (req, res) => {
            try {
                await deleteJob(req.body.jobId);
                res.status(200);
            } catch (exception) {
                console.log('-------------> JOB DELETION FAILED in job routes! ', exception);

                res.status(502).json({
                    msg: 'Request to delete job rejected in job routes! ',
                    exception,
                });
            }
        })

        .post('/edit', passport.authenticate('jwt', {
            session: false,
        }), async (req, res) => {
            try {
                await editJob(res.body);
                res.redirect('/allJobs');
            } catch (exception) {
                res.status(502).json({
                    msg: 'Request to edit job in job routes rejected!',
                    exception,
                });
            }
        });
    app.use('/jobs', router);
};

module.exports = {
    init,
};
