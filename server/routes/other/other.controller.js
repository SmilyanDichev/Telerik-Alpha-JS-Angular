const init = (app, data) => {
        // Contacts

        const getAllContacts = async () => {
            try {
                return await data.contacts.getAllContacts();
            } catch (exception) {
                throw new Error(
                    'Request to get all contacts rejected in other controller!\n' +
                    exception);
            }
        };

        const createContact = async (contact) => {
            try {
                return await data.contact.create(contact);
            } catch (exception) {
                throw new Error(
                    'Request to create new contact rejected \n' +
                    exception);
            }
        };

        const editContact= (link) => {
            // TO DO
        };


        // Links
    const getAllLinks = async () => {
        try {
            return await data.link.getAllLink();
        } catch (exception) {
            throw new Error(
                'Request to get all links rejected in other controller!\n' +
                exception);
        }
    };

    const createLink = async (link) => {
        try {
            return await data.link.create(link);
        } catch (exception) {
            throw new Error(
                'Request to create new link rejected \n' +
                exception);
        }
    };

    const editLink = (link) => {
        // TO DO
    };

    return {
        getAllLinks,
        getAllContacts,
        createLink,
        createContact,
        editLink,
        editContact,
    };
};

module.exports = {
    init,
};
