const {
    Router,
} = require('express');
const passport = require('passport');
const otherController = require('./other.controller');

const init = (app, data) => {
    const router = new Router();
    const controller = otherController.init(app, data);

    router
        .get('/links', passport.authenticate('jwt', {
            session: false,
        }), async (req, res) => {
            const allLinks = await controller.getAllLink(req.body);
            res.status(200).json({
                msg: 'success',
                links: allLinks,
            });
        })
        .get('/contacts', passport.authenticate('jwt', {
            session: false,
        }), async (req, res) => {
            const allContacts = await controller.getAllContacts(req.body);
            res.status(200).json({
                msg: 'success',
                contacts: allContacts,
            });
        });
};

module.exports = {
    init,
};
