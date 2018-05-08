'use strict';

var Sequelize = require('sequelize');

/**
 * Actions summary:
 *
 * addColumn "isDeleted" to table "Jobs"
 *
 **/

var info = {
    "revision": 2,
    "name": "noname",
    "created": "2018-04-26T15:38:14.594Z",
    "comment": ""
};

var migrationCommands = [{
    fn: "addColumn",
    params: [
        "Jobs",
        "isDeleted",
        {
            "type": Sequelize.BOOLEAN,
            "allowNull": false
        }
    ]
}];

module.exports = {
    pos: 0,
    up: function(queryInterface, Sequelize)
    {
        var index = this.pos;
        return new Promise(function(resolve, reject) {
            function next() {
                if (index < migrationCommands.length)
                {
                    let command = migrationCommands[index];
                    console.log("[#"+index+"] execute: " + command.fn);
                    index++;
                    queryInterface[command.fn].apply(queryInterface, command.params).then(next, reject);
                }
                else
                    resolve();
            }
            next();
        });
    },
    info: info
};
