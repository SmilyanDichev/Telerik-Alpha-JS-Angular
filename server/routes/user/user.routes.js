const {
    Router,
} = require('express');
const passport = require('passport');
const controler = require('./user.controller');

const init = (app, data) => {
    const router = new Router();
    const controller = controler.init(app, data);

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
            // console.log('! ! ! register ! ! !');
            // console.log(req.body);
            await controller.register(req.body, res);
        })
        .post('/login', async (req, res) => {
            console.log('! ! ! login ! ! !');
            await controller.login(req.body, res);
        });
        app.use('/users', router);
};

module.exports = {
    init,
};
