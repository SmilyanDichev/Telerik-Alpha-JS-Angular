const Data = require('./generic.data');
const {
    Link,
} = require('../db/models');

class LinkData extends Data {
    constructor() {
        super(Link, []);
    }
    getAllLinks() {
        return this.Model.findAll();
    }

    editLink(link) {
        return this.Model.update({
            name: link.name,
            target: link.target,
            iconLink: link.iconLink,
            isHidden: link.isHidden,
        }, {
            where: {
                id: link.id,
            },
        });
    }
    deleteLink(linkId) {
        console.log('------------->Delete link request id ',
            linkId, ' in link.data acquired! Goodbye link!');
        return this.Model.destroy({
            where: {
                id: linkId,
            },
        });
    }
}

module.exports= LinkData;
