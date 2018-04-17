const init = (app, data) => {
    const {
        Router,
    } = require('express');
    const passport = require('passport');
    const Controller = require('./user.controller');
    const jwt = require('jsonwebtoken');
    const router = new Router();
    const controller = new Controller(data);
    const config = require('./config');
    // TO DO user history JWT  strategy and check only admin
    router
        .get('/history', async (req, res) => {
            if (req.user) {
                const email = req.user.email;
                const userHistory = await controller.getUserJobHistory(email);
                res.status(200).json(userHistory);
            }
        })
        .post('/register', async (req, res) => {
            await controller.createUser(req.body);
        })
        .post('/login', (req, res, next) => {
            passport.authenticate('local', (err, user, info) => {
                if (err) {
                    return res.status(400).json({
                        msg: 'error 400',
                    });
                }
                if (!user) {
                    return res.status(300).json({
                        msg: 'user not found!',
                    });
                }
                req.login(user, (er) => {
                    if (er) {
                        return next(er);
                    }
                    const token = jwt.sign({
                        message: 'success',
                        user: user.id,
                    }, config.JWT_SECRET);
                    return res.status(200).json(token);
                });
                return err;
            });
        });
};