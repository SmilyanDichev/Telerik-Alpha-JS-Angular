const expressApp = require('express');
const data = require('./data');

const config = require('./config/config');
const express = require('./config/express');
const auth = require('./config/auth');
const app = expressApp();
console.log('express init!!!!');
express.init(app);
console.log('auth init!!!!');
auth.init(app, data);
require('./routes').init(app, data);

//TO DO NPM MUTLER TO RESEARCH


 
app.listen(config.PORT, () => {
    console.log(`App listening on port ${config.PORT}`);
});

// const expressApp = require('express');

// const app = expressApp();

// app.get('/', (req, res) => res.send('Hello World!'));

// app.listen(3000, () => console.log('Example app listening on port 3000!'));