'use strict';

var Sequelize = require('sequelize');

/**
 * Actions summary:
 *
 * createTable "JobCategories", deps: []
 * createTable "contacts", deps: []
 * createTable "LinkCategories", deps: []
 * createTable "Users", deps: []
 * createTable "Jobs", deps: [JobCategories]
 * createTable "Links", deps: [LinkCategories]
 * createTable "UserJobs", deps: [Users, Jobs]
 *
 **/

var info = {
    "revision": 1,
    "name": "noname",
    "created": "2018-04-16T14:14:20.960Z",
    "comment": ""
};

var migrationCommands = [{
        fn: "createTable",
        params: [
            "JobCategories",
            {
                "id": {
                    "type": Sequelize.INTEGER,
                    "autoIncrement": true,
                    "primaryKey": true,
                    "allowNull": false
                },
                "name": {
                    "type": Sequelize.STRING,
                    "unique": true,
                    "allowNull": false
                },
                "createdAt": {
                    "type": Sequelize.DATE,
                    "allowNull": false
                },
                "updatedAt": {
                    "type": Sequelize.DATE,
                    "allowNull": false
                }
            },
            {}
        ]
    },
    {
        fn: "createTable",
        params: [
            "contacts",
            {
                "id": {
                    "type": Sequelize.INTEGER,
                    "autoIncrement": true,
                    "primaryKey": true,
                    "allowNull": false
                },
                "name": {
                    "type": Sequelize.STRING,
                    "allowNull": false
                },
                "value": {
                    "type": Sequelize.STRING,
                    "allowNull": false
                },
                "isMapAddress": {
                    "type": Sequelize.BOOLEAN
                },
                "createdAt": {
                    "type": Sequelize.DATE,
                    "allowNull": false
                },
                "updatedAt": {
                    "type": Sequelize.DATE,
                    "allowNull": false
                }
            },
            {}
        ]
    },
    {
        fn: "createTable",
        params: [
            "LinkCategories",
            {
                "id": {
                    "type": Sequelize.INTEGER,
                    "autoIncrement": true,
                    "primaryKey": true,
                    "allowNull": false
                },
                "name": {
                    "type": Sequelize.STRING
                },
                "createdAt": {
                    "type": Sequelize.DATE,
                    "allowNull": false
                },
                "updatedAt": {
                    "type": Sequelize.DATE,
                    "allowNull": false
                }
            },
            {}
        ]
    },
    {
        fn: "createTable",
        params: [
            "Users",
            {
                "id": {
                    "type": Sequelize.INTEGER,
                    "autoIncrement": true,
                    "primaryKey": true,
                    "allowNull": false
                },
                "email": {
                    "type": Sequelize.STRING,
                    "validate": {
                        "isEmail": true,
                        "len": [3, 1024]
                    },
                    "unique": true,
                    "allowNull": false
                },
                "password": {
                    "type": Sequelize.STRING,
                    "validate": {
                        "len": [8, 256]
                    },
                    "allowNull": false
                },
                "firstName": {
                    "type": Sequelize.STRING,
                    "validate": {
                        "len": [3, 100],
                        "isAlpha": true
                    },
                    "allowNull": false
                },
                "lastName": {
                    "type": Sequelize.STRING,
                    "validate": {
                        "len": [3, 100],
                        "isAlpha": true
                    },
                    "allowNull": false
                },
                "isAdmin": {
                    "type": Sequelize.BOOLEAN,
                    "allowNull": false
                },
                "createdAt": {
                    "type": Sequelize.DATE,
                    "allowNull": false
                },
                "updatedAt": {
                    "type": Sequelize.DATE,
                    "allowNull": false
                }
            },
            {}
        ]
    },
    {
        fn: "createTable",
        params: [
            "Jobs",
            {
                "id": {
                    "type": Sequelize.INTEGER,
                    "autoIncrement": true,
                    "primaryKey": true,
                    "allowNull": false
                },
                "title": {
                    "type": Sequelize.STRING,
                    "validate": {
                        "len": [4, 256]
                    },
                    "allowNull": false
                },
                "description": {
                    "type": Sequelize.TEXT,
                    "validate": {
                        "len": [4, 16384]
                    },
                    "allowNull": false
                },
                "isActive": {
                    "type": Sequelize.BOOLEAN,
                    "allowNull": false
                },
                "createdAt": {
                    "type": Sequelize.DATE,
                    "allowNull": false
                },
                "updatedAt": {
                    "type": Sequelize.DATE,
                    "allowNull": false
                },
                "JobCategoryId": {
                    "type": Sequelize.INTEGER,
                    "onUpdate": "CASCADE",
                    "onDelete": "CASCADE",
                    "references": {
                        "model": "JobCategories",
                        "key": "id"
                    },
                    "allowNull": false
                }
            },
            {}
        ]
    },
    {
        fn: "createTable",
        params: [
            "Links",
            {
                "id": {
                    "type": Sequelize.INTEGER,
                    "autoIncrement": true,
                    "primaryKey": true,
                    "allowNull": false
                },
                "name": {
                    "type": Sequelize.STRING,
                    "validate": {
                        "len": [3, 128]
                    },
                    "allowNull": false
                },
                "target": {
                    "type": Sequelize.STRING,
                    "validation": {
                        "isUrl": true
                    },
                    "allowNull": false
                },
                "iconLink": {
                    "type": Sequelize.STRING,
                    "validation": {
                        "isUrl": true
                    },
                    "allowNull": false
                },
                "isHidden": {
                    "type": Sequelize.BOOLEAN,
                    "allowNull": false
                },
                "createdAt": {
                    "type": Sequelize.DATE,
                    "allowNull": false
                },
                "updatedAt": {
                    "type": Sequelize.DATE,
                    "allowNull": false
                },
                "LinkCategoryId": {
                    "type": Sequelize.INTEGER,
                    "onUpdate": "CASCADE",
                    "onDelete": "NO ACTION",
                    "references": {
                        "model": "LinkCategories",
                        "key": "id"
                    },
                    "allowNull": false
                }
            },
            {}
        ]
    },
    {
        fn: "createTable",
        params: [
            "UserJobs",
            {
                "comment": {
                    "type": Sequelize.STRING,
                    "validate": {
                        "len": [3, 1024]
                    },
                    "allowNull": false
                },
                "cvUrl": {
                    "type": Sequelize.STRING,
                    "allowNull": false
                },
                "letterUrl": {
                    "type": Sequelize.STRING,
                    "allowNull": true
                },
                "createdAt": {
                    "type": Sequelize.DATE,
                    "allowNull": false
                },
                "updatedAt": {
                    "type": Sequelize.DATE,
                    "allowNull": false
                },
                "UserId": {
                    "type": Sequelize.INTEGER,
                    "onUpdate": "CASCADE",
                    "onDelete": "CASCADE",
                    "references": {
                        "model": "Users",
                        "key": "id"
                    },
                    "primaryKey": true
                },
                "JobId": {
                    "type": Sequelize.INTEGER,
                    "onUpdate": "CASCADE",
                    "onDelete": "CASCADE",
                    "references": {
                        "model": "Jobs",
                        "key": "id"
                    },
                    "primaryKey": true
                }
            },
            {}
        ]
    }
];

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
