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
            const allLinks = await controller.getAllLinks(req.body);
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
        })
        .post('/contacts/add', passport.authenticate('jwt', {
            session: false,
        }, async (req, res) => {
            await controller.createContact(req.body);
        }))
        .post('/contact/edit', passport.authenticate('jwt', {
            session: false,
        }, async (req, res) => {
            await controller.editContact(req.body);
        }))
        .post('/links/add', passport.authenticate('jwt', {
            session: false,
        }, async (req, res) => {
            await controller.createLink(req.body);
        }))
        .post('/links/edit', passport.authenticate('jwt', {
            session: false,
        }, async (req, res) => {
            await controller.editLink(req.body);
        }))
        ;
    app.use('/', router);
};

module.exports = {
    init,
};
