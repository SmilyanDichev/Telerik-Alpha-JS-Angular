const expressApp = require('express');
const data = require('./data');

const {
    config,
    auth,
    express,
} = require('./config');
const {
    routes,
} = require('./routes');

const app = expressApp();
routes.init(app, data);
express.init(app);
auth.init(app, data);

//TO DO NPM MUTLER TO RESEARCH

app.listen(config.PORT, () => {
    console.log(`App listening on port ${config.PORT}`);
});
