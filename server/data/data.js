const Data = require('./generic.data');
const UserData = require('./user.data');
const JobData = require('./job.data');
const LinkData = require('./link.data');
const ContactData = require('./contacts.data');
const { UserJob } = require('../db/models/');
const { JobCategory } = require('../db/models/');
module.exports = {
    user: new UserData(),
    job: new JobData(),
    link: new LinkData(),
    contacts: new ContactData(),
    categories: new Data( JobCategory, []),
    userJob: new Data(UserJob, [JobData, UserData]),
};

