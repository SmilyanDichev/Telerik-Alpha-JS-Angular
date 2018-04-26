const {
    Router,
} = require('express');
const passport = require('passport');
const userControler = require('./user.controller');

const init = (app, data) => {
    const router = new Router();
    const controller = userControler.init(app, data);

    // TO DO user history JWT  strategy and check only admin
    router
        .get('/history', passport.authenticate('jwt', {
            session: false,
        }), (req, res) => {
            res.status(200).json({
                msg: 'success',
            });
        })
        .get('/', (req, res)=>{
             res.send('NodeJS SERVER');
        })
        .post('/register', async (req, res) => {
            console.log('! ! ! register ! ! !');
            await controller.register(req.body);
        })
        .post('/login', async (req, res) => {
            console.log('! ! ! login ! ! !');
            await controller.login(req, res);
        });
        app.use('/users', router);
};

module.exports = {
    init,
};
