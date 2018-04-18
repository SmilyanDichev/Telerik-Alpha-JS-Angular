const expressApp = require('express');
const data = require('./data');

const config = require('./config/config');
const express = require('./config/express');
const auth = require('./config/auth');
const app = expressApp();
express.init(app);
auth.init(app, data);
require('./routes').init(app, data);

//TO DO NPM MUTLER TO RESEARCH
app.listen(config.PORT, () => {
    console.log(`App listening on port ${config.PORT}`);
});