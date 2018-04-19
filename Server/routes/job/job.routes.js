const {
    Router,
} = require('express');
const bodyParser = require('body-parser');
const passport = require('passport');
const jobController = require('./job.controller');

const init = (app, data) => {
    const router = new Router();
    const controller = jobController.init(app, data);
    app.use(bodyParser.urlencoded({
        extended: true,
    }));
    router
        .get('/job', async (req, res) => {
            try {
                const publicJobs = await GetPublicJobs();
                res.status(200).json(publicJobs);
            } catch (exception) {
                res.status(200).json({
                    msg: 'No jobs are available. Please come back later!',
                });
            }
        })
        .get('/job:id', async (req, res) => {
            const jobId = req.body.id;
            try {
                const jobDetails = await getJobById(id);
                res.status(200).json(jobDetails);
            } catch (exception) {
                res.redirect('./job');
            }
        })
        .post('/job/apply', passport.authenticate('jwt', {
            session: false,
        }), (req, res) => {
            const jobId = req.body.jobId;
            const userId = req.body.userId;
            const comment = req.body.userComment;
            const userCV = req.body.userCV;
            const userLetter = req.body.userLetter;

            const application = {
                jobId,
                userId,
                comment,
                userCV,
                userLetter,
            };
            postJobApplication(application);
        })
        .get('/jobs', passport.authenticate('jwt', {
            session: true,
        }), async (req, res) => {
            try {
                const allJobs = await getAllJobs();
                res.status(200).json(allJobs);
            } catch (exception) {
                res.status(200).json({
                    msg: 'No jobs available',
                });
            }
        })
        .post('/jobs/create', passport.authenticate('jwt', {
            session: true,
        }), (req, res) => {
            const title = res.body.titleDescriptionCategoryStatus
            const description = res.body.description
            const category = res.body.category
            const status = res.body.status
        })
        .post('/jobs/edit')
};

// const promiseSender = () => {
//     return new Promise((resolve, reject) => {
//         return reject();
//         Promise.reject();
//     }); 

// };

// const promiseGetter = async () => {
//     try {
//         const promise = await Promise.resolve(21);
//     console.log(!!promise);
//     } catch (e) {
//         const log = e;
//         console.log('error bagged and tagged');
//     }
// }
// promiseGetter();