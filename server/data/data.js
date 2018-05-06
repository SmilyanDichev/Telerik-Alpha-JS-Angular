const Data = require('./generic.data');
const UserData = require('./user.data');
const JobData = require('./job.data');
const LinkData = require('./link.data');
const ContactData = require('./contacts.data');
const {
    UserJob,
    Contact,
    link,
    JobCategory,
    Job,
} = require('../db/models');

module.exports = {
    user: new UserData(),
    job: new JobData(Job),
    link: new LinkData(link),
    contact: new ContactData(Contact),
    categories: new Data( JobCategory, []),
    userJob: new Data(UserJob, [JobData, UserData]),
};
