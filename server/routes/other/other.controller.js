const init = (app, data) => {
    // Categories
    const getAllCategories = async () => {
        console.log('! ! !other controller categories ! ! !');
        return await data.categories.getAll();
    };

    const getAllContacts = () => {
        try {
            return data.contact.getAll();
        } catch (exception) {
            console.log(
                `-----------> Request to get all
                contacts rejected in other controller ` +
                exception);
            }
        };

    // Contacts
    const createContact = async (contact) => {
        try {
            return await data.contacts.create(contact);
        } catch (exception) {
            console.log(
                '-----------> Request to create new contact rejected ' +
                exception);
        }
    };

    const editContact = (contact) => {
        // TO DO
    };


    // Links
    const getAllLinks = async () => {
        try {
            return await data.link.getAllLink();
        } catch (exception) {
            console.log(
                `-----------> Request to get all links
                 rejected in other controller! ` +
                exception);
        }
    };

    const createLink = async (link) => {
        try {
            return await data.link.create(link);
        } catch (exception) {
            console.log(
                '-----------> Request to create new link rejected ' +
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
        getAllCategories,
    };
};

module.exports = {
    init,
};
