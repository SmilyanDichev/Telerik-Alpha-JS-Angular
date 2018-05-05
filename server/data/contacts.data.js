const Data = require('./generic.data');

const {
    Contacts,
} = require('../db/models/');

class ContactsData extends Data {
    constructor(contacts) {
        super(contacts, []);
    }

    editContact(contactId, newInfo) {
        return this.Model.update({
            name: newInfo.name,
            value: newInfo.value,
            isMapAddress: newInfo.isMapAddress,
        }, {
            where: {
                id: contactId,
            },
        });
    }
    deleteContact(contactId) {
        return this.Model.destroy({
            where: {
                id: contactId,
            },
        });
    }
}

module.exports = ContactsData;
