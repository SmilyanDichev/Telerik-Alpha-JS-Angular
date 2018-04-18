const Data = require('./generic.data');
const {
    Link,
} = require('../db/models');

class LinkData extends Data {
    constructor() {
        super(Link, []);
    }
    editLink(linkId, newInfo) {
        return this.Model.update({
            name: newInfo.name,
            target: newInfo.target,
            iconLink: newInfo.iconLink,
            isHidden: newInfo.isHidden,
        }, {
            where: {
                id: linkId,
            },
        });
    }
    deleteLink(linkId) {
        return this.Model.destroy({
            where: {
                id: linkId,
            },
        });
    }
}

module.exports= LinkData;
