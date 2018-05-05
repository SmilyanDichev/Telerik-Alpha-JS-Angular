const Data = require('./generic.data');
const UserData = require('./user.data');
const JobData = require('./job.data');
const LinkData = require('./link.data');
const ContactData = require('./contacts.data');
const {
    userJob,
    contact,
    link,
} = require('../db/models');

module.exports = {
    user: new UserData(),
    job: new JobData(),
    link: new LinkData(link),
    contact: new ContactData(contact),
    userJob: new Data(userJob, [JobData, UserData]),
};

