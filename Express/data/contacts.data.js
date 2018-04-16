const Data = require('./generic.data');

const {
    Contacts,
} = require('../db/models/contacts');

class ContactsData extends Data {
    constructor() {
        super(Contacts, []);
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
