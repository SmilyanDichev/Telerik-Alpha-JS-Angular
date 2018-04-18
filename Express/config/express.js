/* globals __dirname */
const path = require('path');

const cors = require('cors');
const bodyParser = require('body-parser');

const morgan = require('morgan');

const init = (app) => {
    console.log('init');
    if (typeof app.use !== 'function' ||
        typeof app.set !== 'function') {
        throw new Error('Invalid app');
    }
    // TO DO check if set is needed?
    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(morgan('combined'));
    app.use(cors());
    app.use(bodyParser.json());
};

module.exports= {
    init,
};
