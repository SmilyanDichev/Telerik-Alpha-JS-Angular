const Data = require('./generic.data');
const UserData = require('./user.data');
const JobData = require('./job.data');
const LinkData = require('./link.data');
const ContactData = require('./contacts.data');
const {
    userJob,
} = require('../db/models');
module.exports = {
    user: new UserData(),
    job: new JobData(),
    link: new LinkData(),
    contact: new ContactData(),
    userJob: new Data(userJob, [JobData, UserData]),
};

